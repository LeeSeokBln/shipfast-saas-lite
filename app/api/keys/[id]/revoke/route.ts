import { NextResponse } from "next/server";
import { DEMO_MODE } from "@/lib/constants";
import { getSessionUser } from "@/lib/guards";
import { prisma } from "@/lib/db";

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
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

  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: "Missing key id." }, { status: 400 });
  }

  await prisma.apiKey.updateMany({
    where: { id, userId: user.id, revokedAt: null },
    data: { revokedAt: new Date() },
  });

  return NextResponse.json({ ok: true });
}
