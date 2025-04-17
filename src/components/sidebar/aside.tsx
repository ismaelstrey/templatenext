'use client'
import {  useEffect, useState } from "react";
import Menu from "./menu";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import type { Session } from "next-auth";
import { useRouter } from "next/navigation";

export default function Aside({usuario}:{usuario?:Session | null}) { 
    const [show, setShow] = useState(true);
    const router = useRouter();

    useEffect(()=>{
      if(!usuario?.user.name) {
        router.push('/login')       
        }
    },[router,usuario?.user.name])

    const handleClick = () => {
        setShow(!show);//verifica se está funcionand
    } 
  return (
    <div className="flex h-screen" suppressHydrationWarning> 
       {usuario  && <> <TbArrowBadgeRightFilled title={ show ? 'Esconder menu' :'Mostrar menu'} size={40} className={`fixed top-2 left-2 ${show && 'rotate-180'}`} onClick={handleClick}/>         
       <Menu show={show} usuario={usuario} /> </>}
    </div>
  
  );
}