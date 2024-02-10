import { useSearchParams } from "react-router-dom";

export default function FilterDropDown({
  options,
  filterField,
}: {
  options: any[];
  filterField: any;
}) {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get(filterField) || "";

  function handleChange(e: any) {
    console.log(e.target.value);
    
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  }

  

  return (
    <select
      value={filterValue}
      onChange={handleChange}
      className="textField__input py-2 text-xs bg-secondary-0"
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
