
import { auth } from "~/lib/auth";
import Login from "../pages/Login";
function Main  ({ children}:{children:React.ReactNode})  {
return  <body suppressHydrationWarning><div suppressHydrationWarning className="flex w-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
{children}</div></body>
}
export async function Template({ children}:{children:React.ReactNode}) {
const autenticado = await auth()

console.log(autenticado)
 return !autenticado ?  <Main><Login/></Main> : <Main>{children}</Main> 


}