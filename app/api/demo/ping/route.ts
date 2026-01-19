import { NextResponse } from "next/server";
import { createHash } from "crypto";
import { prisma } from "@/lib/db";

function getBearerToken(authHeader: string | null) {
  if (!authHeader) return null;
  const [type, token] = authHeader.split(" ");
  if (type !== "Bearer" || !token) return null;
  return token.trim();
}

export async function POST(req: Request) {
  const token = getBearerToken(req.headers.get("authorization"));
  if (!token) {
    return NextResponse.json({ error: "Missing API key." }, { status: 401 });
  }

  const hashedKey = createHash("sha256").update(token).digest("hex");
  const key = await prisma.apiKey.findFirst({
    where: { hashedKey, revokedAt: null },
    select: { id: true },
  });

  if (!key) {
    return NextResponse.json({ error: "Invalid API key." }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
}
