import { NextResponse } from "next/server";
import { createHash, randomBytes } from "crypto";
import { DEMO_MODE } from "@/lib/constants";
import { getSessionUser } from "@/lib/guards";
import { prisma } from "@/lib/db";

const MAX_KEYS_FREE = 1;

function generateKey() {
  const raw = `sfk_${randomBytes(24).toString("base64url")}`;
  const prefix = raw.slice(0, 8);
  const hashedKey = createHash("sha256").update(raw).digest("hex");
  return { raw, prefix, hashedKey };
}

export async function GET() {
  if (DEMO_MODE) {
    return NextResponse.json(
      { error: "Demo mode: API is disabled. Run locally to test." },
      { status: 403 }
    );
  }
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }

  const keys = await prisma.apiKey.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      prefix: true,
      createdAt: true,
      revokedAt: true,
    },
  });

  return NextResponse.json({ keys });
}

export async function POST(req: Request) {
  if (DEMO_MODE) {
    return NextResponse.json(
      { error: "Demo mode: API is disabled. Run locally to test." },
      { status: 403 }
    );
  }
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }

  const activeCount = await prisma.apiKey.count({
    where: { userId: user.id, revokedAt: null },
  });
  if (activeCount >= MAX_KEYS_FREE) {
    return NextResponse.json(
      {
        error:
          "Free plan allows only 1 API key. Upgrade to Pro for unlimited keys.",
      },
      { status: 403 }
    );
  }

  let payload: { name?: string } = {};
  try {
    payload = (await req.json()) as { name?: string };
  } catch {
    payload = {};
  }

  const name = payload.name?.trim() || "Default key";
  const { raw, prefix, hashedKey } = generateKey();

  const key = await prisma.apiKey.create({
    data: {
      userId: user.id,
      name,
      prefix,
      hashedKey,
    },
    select: {
      id: true,
      name: true,
      prefix: true,
      createdAt: true,
      revokedAt: true,
    },
  });

  return NextResponse.json({ key, plainKey: raw });
}
