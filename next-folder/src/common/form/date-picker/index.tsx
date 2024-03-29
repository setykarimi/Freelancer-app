import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DatePickerFieldProps } from "./type";

function DatePickerField({ label, date, setDate }: DatePickerFieldProps) {
  return (
    <div>
      <span className="mb-2 block text-secondary-700 text-right">{label}</span>
      <DatePicker
        containerClassName="w-full"
        inputClass="textField__input"
        calendarPosition="bottom-center"
        value={date}
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}
export default DatePickerField;
