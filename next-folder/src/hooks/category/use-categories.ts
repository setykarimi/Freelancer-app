import { getCategoryApi } from "@/services/category-service";
import { useQuery } from "@tanstack/react-query";

export default function useCategories() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  const { categories: rawCategories = [] } = data || {};
  const categories = rawCategories.map((item: any) => ({
    label: item.title,
    value: item._id,
  }));
  const newCategories = rawCategories.map((item: any) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { rawCategories, categories, newCategories, isLoading, isError };
}
