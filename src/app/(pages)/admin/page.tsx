
import { auth } from "~/lib/auth";

export default async function HomePage() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-amber-600">
      <div suppressHydrationWarning className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Page <span className="text-[hsl(280,100%,70%)]">Admin</span> 
        </h1>
       
     
      </div>
    </main>
  );
}
