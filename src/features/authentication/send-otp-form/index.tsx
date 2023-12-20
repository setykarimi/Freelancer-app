import Loading from "../../../common/loading";
import TextField from "../../../common/text-field";
import { SendOTPFormPropTypes } from "./type";

export default function SendOTPForm({
  onSubmit,
  isSendingOtp,
  setPhoneNumber,
  phoneNumber,
}: SendOTPFormPropTypes) {
  return (
    <div>
      <form className=" space-y-4" onSubmit={onSubmit}>
        <TextField
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          label="شماره موبایل"
          name="phoneNumber"
        />

        <div>
          {isSendingOtp ? (
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
