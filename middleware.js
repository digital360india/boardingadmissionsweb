import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/admin")) {
    return NextResponse.redirect("https://accounts.boardingadmissions.com/");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
