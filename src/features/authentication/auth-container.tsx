import { useState } from "react";
import SendOTPForm from "./send-otp-form";
import CheckOTPForm from "./check-otp-form";

export default function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOTPForm setStep={setStep} setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber}/>;
      case 2:
        return <CheckOTPForm phoneNumber={phoneNumber}/>;
      default:
        return null;
    }
  };
  return <div className="flex justify-center pt-10"><div>{renderStep()}</div></div>;
}
