import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { GoPerson } from "react-icons/go";

export default function LandingNavbar() {
  return (
    <nav className="flex justify-between items-center py-4 w-full max-h-[10vh]">
      <span className="font-black lg:text-3xl text-2xl text-primary-900 block">
        پراجـــکت
      </span>
      <div className="flex items-center gap-4">
        <Link
          href="/auth"
          className="text-primary-900 border lg:border-primary-900 border-primary-100 lg:px-5 lg:py-2 lg:rounded-full rounded-xl lg:w-auto w-11 lg:h-auto h-11 flex justify-center items-center"
        >
          <GoPerson size={24} className="lg:hidden block" />
          <span className="lg:block hidden">ورود | ثبت نام</span>
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            href=""
            className="text-primary-900 border border-primary-100 flex items-center justify-center w-11 h-11 p-2 rounded-xl"
          >
            <BsTelephone size={24} />
          </Link>
          <div className="md:block hidden">
            <span className="block text-xs text-[#5F6063]">مشاوره رایگان</span>
            <span className="block text-[#303031]">۰۲۱-۹۱۰۱۵۱۴۶</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
