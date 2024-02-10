import Loading from "@/common/loading";
import { checkOtp } from "@/services/auth-service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { HiArrowRight } from "react-icons/hi";
import OTPInput from "react-otp-input";
import { CheckOTPFormPropTypes } from "./type";
const RESEND_TIME = 90;

export default function CheckOTPForm({
  phoneNumber,
  onBack,
  onResendOtp,
  otpResponse,
}: CheckOTPFormPropTypes) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const router = useRouter();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({
        phoneNumber: phoneNumber,
        otp: otp,
      });
      toast.success(message);
      if (user.status !== 2) {
        router.push("/");
        toast("پروفایل شما در انتظار تایید است.", { icon: "👏🏻" });
        return;
      }
      if (user.role == "OWNER") return router.push("/owner");
      if (user.role == "FREELANCER") return router.push("/freelancer");
      if (user.role == "ADMIN") return router.push("/admin");
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
      <button onClick={onBack} className="w-6 h-6 text-secondary-500">
        <HiArrowRight />
      </button>
      {otpResponse && (
        <p className="flex items-center gap-x-2 my-4">
          <span> {otpResponse?.message} </span>
          <button onClick={onBack} className="w-6 h-6 text-secondary-500">
            <CiEdit />
          </button>
        </p>
      )}
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
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}
