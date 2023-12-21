import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { getOtp } from "../../services/auth-service";
import CheckOTPForm from "./check-otp-form";
import SendOTPForm from "./send-otp-form";

export default function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const {
    isPending: isSendingOtp,
    error,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({
        phoneNumber,
      });
      console.log("data", data);
      setStep(2);
      toast.success(data?.message);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={sendOtpHandler}
            setPhoneNumber={setPhoneNumber}
            phoneNumber={phoneNumber}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
            onBack={() => setStep((prev) => prev - 1)}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex justify-center pt-10">
      <div>{renderStep()}</div>
    </div>
  );
}
