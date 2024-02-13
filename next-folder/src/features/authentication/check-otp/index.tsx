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
      const role_panel = user.role.toLowerCase();
      return router.push(role_panel);
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
    <div className="">
      <button onClick={onBack} className="w-6 h-6 text-secondary-500">
        <HiArrowRight />
      </button>
      {otpResponse && (
        <p className="flex items-center my-4">
          <span className="text-sm font-medium text-secondary-600"> {otpResponse?.message} </span>
          <button onClick={onBack} className="w-4 h-4 text-secondary-500 mr-2">
            <CiEdit />
          </button>
        </p>
      )}
      <div className="mb-4 text-secondary-500 flex flex-col">
        {time > 0 ? (
          <p className="text-xs text-center">
            <span className="font-bold">{time}{" "}</span>
             ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onResendOtp} className="mx-auto text-center text-primary-700 font-bold text-sm underline">ارسال مجدد کد تایید</button>
        )}
      </div>
      <form className="space-y-4 mt-8" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2rem",
            height: "2rem",
            padding: ".5rem .2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: ".4rem",
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
