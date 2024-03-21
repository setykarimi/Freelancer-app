import Loading from "@/common/loading";
import Stat from "@/common/stats";
import useUsers from "@/hooks/authentication/use-users";
import { toPersianNumbers } from "@/utils/to-persian-numbers";
import { PiUsersThree } from "react-icons/pi";

export default function UserStats() {
  const { isLoading, users, isError }: any = useUsers();

  if (isLoading) return <Loading />;

  const activeUsers = users.filter((user: any) => user.status == 2).length;
  const waitUsers = users.filter((user: any) => user.status == 1).length;
  const declinedUsers = users.filter((user: any) => user.status == 0).length;

  return (
    <Stat
      color="orange"
      title="کاربران"
      active={`${toPersianNumbers(activeUsers)} فعال`}
      declined={`${toPersianNumbers(declinedUsers)} رد شده`}
      wait={`${toPersianNumbers(waitUsers)} در انتظار تایید`}
      total={`${toPersianNumbers(users?.length)}`}
      icon={<PiUsersThree className="lg:w-20 w-16 lg:h-20 h-16" />}
    />
  );
}
