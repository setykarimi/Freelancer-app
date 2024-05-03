"use client";
import CheckOTPForm from "@/features/authentication/check-otp";
import SendOTPForm from "@/features/authentication/send-otp";
import useUser from "@/hooks/authentication/use-user";
import { getOtp } from "@/services/auth-service";
import { convertPersianNumToEnglish } from "@/utils/convert-nums-to-english";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const RESEND_TIME = 90;

export default function AuthPage() {
  const [step, setStep] = useState(1);
  const { user } = useUser();
  const router = useRouter();
  const [time, setTime] = useState(RESEND_TIME);
  // useEffect(() => {
  //   if (user) router.replace("/");
  // }, [user]);

  const {
    isPending: isSendingOtp,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (values: any) => {
    try {
      const data = await mutateAsync({
        phoneNumber: convertPersianNumToEnglish(values.phoneNumber.toString()),
      });
      setStep(2);
      toast.success(data?.message);
    } catch (error: any) {
      const err_msg = error?.response?.data?.message;
      toast.error(err_msg ? err_msg : "متاسفانه خطایی رخ داده است.");
    }
    setTime(90);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler)}
            register={register}
            errors={errors}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onBack={() => setStep((prev) => prev - 1)}
            onResendOtp={handleSubmit(sendOtpHandler)}
            otpResponse={otpResponse}
            phoneNumber={getValues("phoneNumber")}
            time={time}
            setTime={setTime}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className=" bg-secondary-0 max-w-sm w-full p-8 rounded-lg shadow-secondary-200 shadow">
      {renderStep()}
    </div>
  );
}
