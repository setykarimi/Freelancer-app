import Stat from "@features/owner/stat";
import { toPersianNumbersWithComma } from "@utils/to-persian-numbers";
import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";

export default function Stats({ proposals }: { proposals: any }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p: any) => p.status === 2).length;
  const balance = acceptedProposals
    ? acceptedProposals?.reduce((acc: number, curr: any) => acc + curr.price, 0)
    : 0;

  return (
    <div className="grid md:grid-cols-3 gap-x-8">
      <Stat
        color="primary"
        title="درخواست‌ها"
        value={numOfProposals}
        icon={<HiOutlineViewGrid className="lg:w-20 w-16 lg:h-20 h-16" />}
      />
      <Stat
        color="green"
        title="درخواست‌های تایید شده"
        value={acceptedProposals.length}
        icon={<HiCurrencyDollar className="lg:w-20 w-16 lg:h-20 h-16" />}
      />
      <Stat
        color="yellow"
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        icon={<HiCollection className="lg:w-20 w-16 lg:h-20 h-16" />}
      />
    </div>
  );
}
