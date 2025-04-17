"use client"
import type { User } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";


interface Usuario extends User  {

}
export default function HomePage() {
const [usuarios, setUsuarios] = useState<Usuario[]|[]>([]);
const [type, setType] = useState<string>("user");
const fetchUsuarios = async ():Promise<void> => {
  try {
    const response = await fetch("/api/usuarios");
    const data = await response.json() as User[];
    setUsuarios(data);
    setType("user");
  } catch (error) {
    console.error("Error fetching users:", error);
    setUsuarios([]);
  }
}

const updateStatus = async (id:string,type:string) => {
  try {
    const response = await fetch(`/api/usuarios`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        type,
      }),
    })
    console.log(response)
    fetchUsuarios();
  }catch (error) {
    console.log(error);
  }
}



  useEffect(() => {   
    
    void fetchUsuarios();
  },[])
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center" suppressHydrationWarning >
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Page <span className="text-[hsl(280,100%,70%)]">Usuarios</span> 
        </h1>
       
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {usuarios.map((usuario) => (
            <div key={usuario.id} className="flex flex-col items-center justify-center gap-4">
            
              {usuario.image && usuario.name && <Image unoptimized src={usuario?.image} width={24} height={24} alt={usuario.name} className="w-24 h-24 rounded-full" />}
              <span>{usuario.id}</span>
              <span>{usuario.type}</span>
  
              <h2 className="text-xl font-semibold text-white">{usuario.name}</h2>
              <p className="text-gray-400">{usuario.email}</p>
                     
            <div>
          
            <form
              action={()=>updateStatus(usuario.id, type)}
            >
          
              <select className="bg-purple-700" onChange={(e)=>setType(e.target.value)}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>   
               <button className="mt-2 text-center justify-center w-full cursor-pointer hover:scale-110" type="submit">Alterar</button>
            </form>
            
          </div>
          </div> 
          ))}
 
        </div>
      </div>
    </main>
  );
}
