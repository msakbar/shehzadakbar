import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Page() {
  return <SignIn />;
}