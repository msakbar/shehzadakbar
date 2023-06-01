import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SignInPage = () => {
  const router = useRouter();
  useEffect(() => {
    const { redirect_url } = router.query;
    if (redirect_url && (redirect_url as string).startsWith("http")) {
      router.push("/sign-in");
      return;
    }
  }, [router]);

  return <SignIn path="/sign-in" routing="path" />;
};

export default SignInPage;
