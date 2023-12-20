export interface SendOTPFormPropTypes {
  phoneNumber: number | string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  isSendingOtp: boolean;
}
