import { TextFieldPropsType } from "./type";

export default function TextField({
  label,
  name,
  value,
  onChange,
}: TextFieldPropsType) {
  return (
    <div>
      <label className="mb-1 block" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="textField__input"
        type="text"
        autoComplete="off"
      />
    </div>
  );
}
