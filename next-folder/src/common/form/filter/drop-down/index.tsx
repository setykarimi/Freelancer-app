import { usePathname, useRouter } from "next/navigation";

export default function FilterDropDown({
  options,
  filterField,
  searchParams,
}: {
  options: any[];
  filterField: any;
  searchParams: any;
}) {
  const current_path = usePathname();
  const router = useRouter();

  const filterValue = searchParams[filterField];
  const { status, category, sort } = searchParams;

  function handleChange(e: any) {
    let name = e.target.name;
    if (name == "sort") {
      router.push(
        `${current_path}?status=${
          status !== undefined ? status : ""
        }&category=${category !== undefined ? category : ""}&sort=${
          e.target.value
        }`
      );
    } else if (name == "category") {
      router.push(
        `${current_path}?status=${
          status !== undefined ? status : ""
        }&category=${e.target.value}&sort=${sort !== undefined ? sort : ""}`
      );
    }
  }

  return (
   <div className="pl-2 textField__input bg-secondary-0">
     <select
      value={filterValue}
      onChange={handleChange}
      className="w-full text-xs bg-secondary-0"
      name={filterField}
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
   </div>
  );
}
