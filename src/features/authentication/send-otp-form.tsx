import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import TextField from "../../common/text-field";
import { getOtp } from "../../services/auth-service";
import toast from "react-hot-toast";

export default function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({
        phoneNumber,
      });
      console.log("data", data);
      toast.success(data?.message)
    } catch (error) {
      
      toast.error(error?.message);
    }
  };

  return (
    <div>
      <form className=" space-y-4" onSubmit={sendOtpHandler}>
        <TextField
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          label="شماره موبایل"
          name="phoneNumber"
        />

        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}
