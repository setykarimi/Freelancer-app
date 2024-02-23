import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function StatusFilter({
  filterField,
  options,
}: {
  filterField: string;
  options: { value: string; label: string }[];
}) {
  const router = useRouter();
  const [currentFilter, setCurrentFilter] = useState<string>('');

  useEffect(() => {
    const queryValue:any = router.query[filterField];
    setCurrentFilter(queryValue || options[0].value);
  }, [router.query, filterField, options]);

  function handleChange(value: string) {
    router.push({ pathname: router.pathname, query: { ...router.query, [filterField]: value } });
    setCurrentFilter(value);
  }

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 border border-secondary-100 bg-secondary-0 rounded-lg p-1">
        {options.map(({ value, label }) => {
          const isActive = value === currentFilter;
          return (
            <button
              key={value}
              disabled={isActive}
              onClick={() => handleChange(value)}
              className={`whitespace-nowrap rounded-md px-4 py-1 font-bold transition-all duration-300 text-xs ${
                isActive ? 'bg-primary-900 text-white' : 'bg-secondary-0 text-secondary-800'
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