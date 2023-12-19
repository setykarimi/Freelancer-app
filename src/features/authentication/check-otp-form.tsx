import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/auth-service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CheckOTPForm({ phoneNumber }) {
  const [otp, setOtp] = useState("");
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
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div>
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
