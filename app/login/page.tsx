import LoginForm from "./LoginForm";

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<{ callbackUrl?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const callbackUrl = params.callbackUrl ?? "/dashboard";

  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center justify-center px-6 py-16">
      <LoginForm callbackUrl={callbackUrl} />
    </main>
  );
}
