import Loading from "@common/loading";
import TextField from "@common/text-field";
import { SendOTPFormPropTypes } from "./type";

export default function SendOTPForm({
  onSubmit,
  isSendingOtp,
  register,
  errors,
}: SendOTPFormPropTypes) {
  return (
    <div>
      <form className=" space-y-4" onSubmit={onSubmit}>
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
