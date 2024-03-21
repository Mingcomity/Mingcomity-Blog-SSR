import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  switch (request.nextUrl.pathname) {
    case '/':
      return NextResponse.redirect(new URL('/home', request.nextUrl.origin))
    case '/home/pages':
      return NextResponse.redirect(
        new URL('/home/pages/home', request.nextUrl.origin)
      )
    case '/home/datas':
      return NextResponse.redirect(
        new URL('/home/datas/article', request.nextUrl.origin)
      )

    default:
      break
  }

  return NextResponse.next()
}

// 匹配器
export const config = {
  // 匹配不包含 _next 路径
  matcher: ['/((?!_next/static|api|favicon.ico).*)']
}
