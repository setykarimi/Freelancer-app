import Stat from "@features/owner/stat";
import {
    HiCurrencyDollar,
    HiOutlineViewGrid,
    HiUser
} from "react-icons/hi";

export default function Stats({ proposals, users, projects }: any) {
  return (
    <div className="grid md:grid-cols-3 gap-x-8">
      <Stat
        color="yellow"
        title="کاربران"
        value={users}
        icon={<HiUser className="lg:w-20 w-16 lg:h-20 h-16" />}
      />
      <Stat
        color="primary"
        title="درخواست‌ها"
        value={proposals}
        icon={<HiOutlineViewGrid className="lg:w-20 w-16 lg:h-20 h-16" />}
      />
      <Stat
        color="green"
        title="پروژه‌ها"
        value={projects}
        icon={<HiCurrencyDollar className="lg:w-20 w-16 lg:h-20 h-16" />}
      />
    </div>
  );
}
