import { useSearchParams } from "react-router-dom";

export default function StatusFilter({
  filterField,
  options,
}: {
  filterField: string;
  options: any;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleChange(value: string) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex items-center gap-x-2 text=xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 border border-secondary-100 bg-secondary-0 rounded-lg p-1">
        {options.map(({ value, label }: { value: string; label: string }) => {
          const isActive = value === currentFilter;
          return (
            <button
              key={value}
              disabled={isActive}
              onClick={() => handleChange(value)}
              className={`whitespace-nowrap rounded-md px-4 py-1 font-bold transition-all duration-300 text-xs ${
                isActive
                  ? "!bg-primary-900 text-white"
                  : "bg-secondary-0 text-secondary-800"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
