export interface SendOTPFormPropTypes {
    phoneNumber: number | string;
    setStep: React.Dispatch<React.SetStateAction<number>>
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>
  }
  