import { motion } from "framer-motion";
import type { Session } from "next-auth";
import Link from "next/link";
import { Usuario } from "./usuario";

export default function Menu({show,usuario}:{show?:boolean,usuario?:Session | null}) {
if(!show) return null;
  return (
    <motion.div     
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[hsl(280,100%,70%)] w-64 flex flex-col items-center justify-around h-full"
    > 
      <div suppressHydrationWarning className="flex flex-col items-center justify-center ">  
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/usuarios">Usuarios</Link>
        <Link href="/pagamento">Pagamentos</Link>
      </div>
      {usuario?.user.name &&  <div>
        <Usuario usuario={usuario}/>
        </div>}
    </motion.div>  
  );
}