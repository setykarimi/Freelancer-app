export interface CheckOTPFormPropTypes {
  phoneNumber: string;
  onBack: () => void;
  onResendOtp: (e: any) => void;
  otpResponse: any;
  setTime:any
  time: number;
}
