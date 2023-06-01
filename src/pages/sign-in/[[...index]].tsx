import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SignInPage = () => {
    const router = useRouter();



  return <SignIn path="/sign-in" routing="path" />;
}

export default SignInPage;