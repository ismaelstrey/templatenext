"use client"
import Image from "next/image";
import { useEffect, useState } from "react";


interface User  {
  name: string | null;
  id: string;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
}
export default function HomePage() {
const [usuarios, setUsuarios] = useState<User[]|[]>([]);

  useEffect(() => {
    const fetchUsuarios = async ():Promise<void> => {
      try {
        const response = await fetch("/api/usuarios");
        const data = await response.json() as User[];
        setUsuarios(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsuarios([]);
      }
    }   
    
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
              <h2 className="text-xl font-semibold text-white">{usuario.name}</h2>
              <p className="text-gray-400">{usuario.email}</p>
            </div>

          ))}
        </div>
      </div>
    </main>
  );
}
