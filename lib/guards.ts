import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function requireUser() {
  const session = await auth();
  const email = session?.user?.email?.toLowerCase();

  if (!email) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    redirect("/login");
  }

  return user;
}

export async function getSessionUser() {
  const session = await auth();
  const email = session?.user?.email?.toLowerCase();
  if (!email) return null;
  return prisma.user.findUnique({ where: { email } });
}
