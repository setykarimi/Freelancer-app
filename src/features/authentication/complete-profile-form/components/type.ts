import { FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";

export interface RadioInputGroupPropsType {
  watch: UseFormWatch<FieldValues>;
  register: UseFormRegister<FieldValues>;
  errors: any;
  config: {
    name: string;
    validationSchema: any;
    option: {
      value: string;
      label: string;
    }[];
  };
}
