export interface SendOTPFormPropTypes {
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  isSendingOtp: boolean;
  register: any
  errors:any
}
