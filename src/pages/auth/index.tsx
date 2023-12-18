import CheckOTPForm from "../../features/authentication/check-otp-form";
import SendOTPForm from "../../features/authentication/send-otp-form";

export default function AuthPage() {
  return (
    <div className="flex justify-center pt-10">
      <div>
        <SendOTPForm />
        <CheckOTPForm />
      </div>
    </div>
  );
}

// send otp
// check otp
