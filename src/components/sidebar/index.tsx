import { auth } from "~/lib/auth";
import Aside from "./aside";
export default async function Sidebar() { 
const usuario = await auth();


  //retorna o componente Aside com o usuári
  return <div suppressHydrationWarning> <Aside usuario={usuario}/></div>
}