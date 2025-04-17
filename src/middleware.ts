import { NextResponse, type NextRequest } from "next/server"
import authConfig from "./config/auth.config"
import NextAuth from "next-auth"

const { auth } = NextAuth(authConfig)

export default auth(async function middleware(request: NextRequest) {
  const session = await auth()
  const publicPaths = ['/', '/login', '/auth', '/api/auth']
  const isPublicPath = publicPaths.some(path => request.nextUrl.pathname.startsWith(path))

  if (!session && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
})

// Optionally configure matcher
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}