import { NextResponse, type NextRequest } from "next/server"
import authConfig from "./config/auth.config"
import NextAuth from "next-auth"
 
// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)
 
// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig)
export default auth(async function middleware(request: NextRequest) {
  // Your custom middleware logic goes here
  const isLoggedIn = request.cookies.has('session')
  const publicPaths = ['/', '/login', '/auth', '/api/auth']
  const isPublicPath = publicPaths.some(path => request.nextUrl.pathname.startsWith(path))

  if (!isLoggedIn && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
})