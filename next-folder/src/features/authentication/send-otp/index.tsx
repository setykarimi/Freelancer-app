import TextField from "../../../common/form/text-field";
import Loading from "../../../common/loading";
import { SendOTPFormPropTypes } from "./type";

export default function SendOTPForm({
  onSubmit,
  isSendingOtp,
  register,
  errors,
}: SendOTPFormPropTypes) {
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <TextField
        register={register}
        errors={errors}
        validationSchema={{
          required: "شماره تماس الزامی است.",
        }}
        label="شماره موبایل"
        name="phoneNumber"
        required
      />

      {isSendingOtp ? (
        <Loading />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      )}
    </form>
  );
}
