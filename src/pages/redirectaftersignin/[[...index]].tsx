import { useRouter } from "next/router";

const RedirectAfterSignInPage = () => {
    const router = useRouter();

  return <div>This is a custom redirect landing page after signing in</div>;
}

export default RedirectAfterSignInPage;