import { useRouter } from "next/router";

const RedirectAfterSignOutPage = () => {
    const router = useRouter();

  return <div>This is a custom redirect landing page after signing out</div>;
}

export default RedirectAfterSignOutPage;