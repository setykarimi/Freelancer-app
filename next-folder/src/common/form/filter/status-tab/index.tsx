import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StatusFilter({
  options,
  searchParams,
}: {
  options: { value: string; label: string }[];
  searchParams: any;
}) {
  const current_path = usePathname();

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 border border-secondary-100 bg-secondary-0 rounded-lg p-1">
        {options.map(({ value, label }) => {
          const isActive = value === searchParams?.status || options[0].value;
          return (
            <Link
              href={{
                pathname: current_path,
                query: { status: value },
              }}
              className={`whitespace-nowrap rounded-md px-4 py-1 font-bold transition-all duration-300 text-xs ${
                isActive
                  ? "bg-primary-900 text-white"
                  : "bg-secondary-0 text-secondary-800"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
