import { FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";

export interface RadioInputPropsType {
  label: string;
  value: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  validationSchema: any;
  watch: UseFormWatch<FieldValues>;
}
