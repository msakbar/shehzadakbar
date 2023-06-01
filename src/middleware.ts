import {getAuth, withClerkMiddleware } from "@clerk/nextjs/server";
import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";

export default withClerkMiddleware( (req: NextRequest) => {

    return NextResponse.next();
});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};