import { FieldValues, UseFormRegister } from "react-hook-form";

export interface TextFieldPropsType {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  type?: string;
  required?: boolean;
  validationSchema: any;
  errors: any;
}
