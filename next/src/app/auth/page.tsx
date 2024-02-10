"use client";
import useUser from "@/hooks/authentication/use-user";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthPage() {
  const [step, setStep] = useState(1);
  const { user } = useUser();
  const router = useRouter();

  return <div>AuthPage</div>;
}
