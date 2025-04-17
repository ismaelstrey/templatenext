'use server'

import { auth ,signOut,signIn} from "~/lib/auth";



export async function handleAuth() {
const session = await auth();
if(session){
   await signOut({
    redirectTo:"/login" 
   });
}

await signIn("google",{
    redirectTo:"/"
})

}

export async function updateStatusUser(type?:string) {
    const session = await auth();
    if(!session){
        console.log("No hay session")
    }
const id = session?.user?.id;
if(!id){
 console.log("No hay id")
}



   
}