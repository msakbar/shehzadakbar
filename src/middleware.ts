import {getAuth, withClerkMiddleware } from "@clerk/nextjs/server";
import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";

export default withClerkMiddleware( (req: NextRequest) => {
    const { userId } = getAuth(req);
    if (!userId) {
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set('redirect_url', req.nextUrl.pathname);
      return NextResponse.redirect(signInUrl);
    }
    return NextResponse.next();
});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};