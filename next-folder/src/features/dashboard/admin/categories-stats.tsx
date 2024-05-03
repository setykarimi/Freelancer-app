import Loading from "@/common/loading";
import Stat from "@/common/stats";
import useCategories from "@/hooks/category/use-categories";
import { toPersianNumbers } from "@/utils/to-persian-numbers";
import truncateText from "@/utils/truncate-text";
import { BiSolidCategory } from "react-icons/bi";

export default function CategoriesStats() {
  const { isLoading, rawCategories, isError, error }: any = useCategories();
  
  if (isLoading) {
    return <Loading />;
  }


  if(isError){    
    throw (error?.response?.data?.message);
  }

  return (
    <Stat
      color="blue"
      title="دسته‌بندی‌ها"
      singleName="دسته‌بندی"
      active={truncateText(rawCategories[0].title, 10)}
      declined={truncateText(rawCategories[1].title, 10)}
      wait={truncateText(rawCategories[2].title, 10)}
      total={toPersianNumbers(rawCategories?.length)}
      icon={<BiSolidCategory className="lg:w-20 w-16 lg:h-20 h-16" />}
    />
  );
}
