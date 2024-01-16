import { useSearchParams } from "react-router-dom";

export default function FilterDropDown({ options, filterField }) {
  // const { searchParams, setSearchParams } = useSearchParams();
  // const category = searchParams.get(filterField) || "";

  function handleChange(){
    // setSearchParams.set(filterField, e.target.value)
    // setSearchParams(searchParams)
  }
  return (
    <select value={filterField} onChange={handleChange} className="textField__input py-2 text-xs">
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
