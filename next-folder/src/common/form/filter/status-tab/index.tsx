import { usePathname, useRouter } from "next/navigation";

export default function StatusFilter({
  options,
  searchParams,
}: {
  options: { value: string; label: string }[];
  searchParams: any;
}) {
  const current_path = usePathname();
  const router = useRouter();

  const clickHandler = (e: any) => {
    router.push(`${current_path}?status=${e.target.value}`);
  };

  return (
    <div className="flex items-center gap-x-2 text-xs w-full h-full">
      <span className="text-secondary-900">وضعیت</span>
      <div className="flex items-center gap-x-2 border border-secondary-100 bg-secondary-0 rounded-md p-1 w-full justify-between h-full">
        {options.map(({ value, label }) => {
          const isActive = value === searchParams?.status || options[0].value;

          return (
            <button
              onClick={clickHandler}
              value={value}
              className={`whitespace-nowrap rounded-md px-4 py-1 font-bold transition-all duration-300 text-xs ${
                isActive
                  ? "bg-primary-900 text-white"
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
