import { useState } from "react";
import OTPInput from "react-otp-input";

export default function CheckOTPForm() {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <form className="space-y-10">
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: '2.5rem',
            padding: '.5rem .2rem',
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: '.5rem'
          }}
        />
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
}
