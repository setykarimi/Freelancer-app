import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loading from "../../common/loading";
import TextField from "../../common/text-field";
import { getOtp } from "../../services/auth-service";

export default function SendOTPForm({ setStep, setPhoneNumber, phoneNumber }) {
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
      setStep(2);
      toast.success(data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
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

        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
