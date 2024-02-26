import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterDropDown({
  options,
  filterField,
  searchParams
}: {
  options: any[];
  filterField: any;
  searchParams: any
}) {
  
  const current_path = usePathname();
  const router = useRouter();
  
  const filterValue = searchParams[filterField]
  
  function handleChange(e: any) {
    
    router.push(`${current_path}?status=${searchParams?.status}&${filterField}=${e.target.value}`);
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
