import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiArrowRight } from "react-icons/hi";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "../../../services/auth-service";
import { CheckOTPFormPropTypes } from "./type";

const RESEND_TIME = 90;

export default function CheckOTPForm({
  phoneNumber,
  onBack,
  onResendOtp,
}: CheckOTPFormPropTypes) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async () => {
    try {
      const { message, user } = await mutateAsync({
        phoneNumber: phoneNumber,
        otp: otp,
      });
      toast.success(message);
      if (user.active) {
        if (user.role == "OWNER") navigate("owner");
      } else {
        navigate("/complete-profile");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      <div className="mb-4 text-secondary-500">
        {time > 0 ? (
          <p>{time} ارسال مجدد کد</p>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد تایید</button>
        )}
      </div>
      <form className="space-y-10" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: ".5rem .2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: ".5rem",
          }}
        />
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      </form>
    </div>
  );
}