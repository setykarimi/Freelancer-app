import { FieldValues, UseFormRegister } from "react-hook-form";

export interface RHFSelectPropsType {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  options: {
    label: string;
    value: string | number;
  }[];
  required?: boolean;
}
