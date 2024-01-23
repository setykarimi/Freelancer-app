import useUser from "@hook/use-user";
import { getOtp } from "@services/auth-service";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CheckOTPForm from "./check-otp-form";
import SendOTPForm from "./send-otp-form";

export default function AuthContainer() {
  const [step, setStep] = useState(1);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

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
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
            phoneNumber={getValues("phoneNumber")}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col justify-center pt-10 w-full">
      <div>{renderStep()}</div>
    </div>
  );
}
