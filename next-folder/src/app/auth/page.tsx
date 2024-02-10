"use client";
import useUser from "@/hooks/authentication/use-user";
import { getOtp } from "@/services/auth-service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function AuthPage() {
  const [step, setStep] = useState(1);
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) router.replace("/");
  }, [user]);

  const {
    isPending: isSendingOtp,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (values: any) => {
    try {
      const data = await mutateAsync(values);
      setStep(2);
      toast.success(data?.message);
    } catch (error: any) {
      const err_msg = error.response.data.message;

      toast.error(err_msg ? err_msg : "متاسفانه خطایی رخ داده است.");
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  return <div>AuthPage</div>;
}
