import { useState } from "react";
import TextField from "../../common/text-field";

export default function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div>
      <form className=" space-y-4">
        <TextField
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          label="شماره موبایل"
          name="phoneNumber"
        />

        <button className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
}
