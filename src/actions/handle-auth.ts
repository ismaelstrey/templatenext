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