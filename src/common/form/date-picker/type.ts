import React from "react";
import { Value } from "react-multi-date-picker";

export interface DatePickerPropsType {
  label: string;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Value>>;
}
