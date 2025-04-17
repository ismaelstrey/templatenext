import type { Session } from "next-auth";
import Image from "next/image";
import { handleAuth } from "~/actions/handle-auth";

export function Usuario({usuario}:{usuario?:Session | null}) {
 
  return <div className="flex w-full flex-col justify-center items-center mt-4 h-full gap-4 bg-black/50 p-4 rounded-3xl">
 {usuario?.user.image&& usuario?.user.name && <Image className="rounded-full border-2 border-[#15162c]" unoptimized src={usuario?.user.image} width={100} height={100} alt={usuario?.user.name}/>}
   <span className="flex flex-col"> 
    <h2>{usuario?.user.name}</h2>
   <h4>{usuario?.user.email}</h4>
  
   <form
      action={handleAuth}
    >
      <button className="text-[#15162c] mt-2 text-center justify-center w-full cursor-pointer hover:scale-110" type="submit">Sair</button>
    </form>
   </span>

   

    
  </div>
}