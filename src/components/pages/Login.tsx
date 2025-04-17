import { handleAuth } from "~/actions/handle-auth";

export default async function Login() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <div suppressHydrationWarning className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Page <span className="text-[hsl(280,100%,70%)]">LOGIN</span> 
        </h1>
       
        <form
      action={handleAuth}
    >
      <button className="border p-2 cursor-pointer rounded-lg m-4" type="submit">Fazer Login Com uma conta do Google</button>
    </form>
      </div>
    </main>
  );
}
