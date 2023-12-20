export interface CheckOTPFormPropTypes {
  phoneNumber: number | string;
  onBack: () => void;
  onResendOtp: (e: any) => void;
}
