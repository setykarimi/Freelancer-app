import Link from "next/link";
import { IoShieldCheckmark } from "react-icons/io5";

export default function CenterSection() {
  return (
    <div className="grid grid-rows-[1fr_2fr_1fr] justify-between lg:gap-8 gap-4 mx-auto h-[85vh]">
      <FirstSection />
      <MainSection />
      <ThirdSection />
    </div>
  );
}

const FirstSection = () => {
  return (
    <div className="shadow p-4 rounded-b-3xl w-full flex items-center justify-center">
      <div className="w-1/2 p-2 border-l border-l-primary-900">
        <span className="block text-center font-extrabold lg:text-2xl text-lg">
          ۲۰,۰۰۰+
        </span>
        <span className="block text-center text-[#5F6063] mt-1 lg:text-base text-sm">
          کارفرما در پراجکت
        </span>
      </div>

      <div className="w-1/2 p-2 ">
        <span className="block text-center font-extrabold lg:text-2xl text-lg">
          ۵۰,۰۰۰+
        </span>
        <span className="block text-center text-[#5F6063] mt-1 lg:text-base text-sm">
          فریلنسر در پراجکت
        </span>
      </div>
    </div>
  );
};

const MainSection = () => {
  return (
    <div className="shadow h-full px-8 py-4 rounded-3xl w-full flex flex-col items-center justify-center gap-6">
      <h1 className="font-black text-primary-900 lg:text-5xl text-2xl">پراجـــکت</h1>
      <h2 className="lg:text-2xl text-lg space-y-1">
        <span className="block text-center">پلتفرم آنلاین استخدام</span>
        <span className="block text-center">فریلنسر و برون‌سپاری پروژه</span>
      </h2>

      <Link
        href="/auth"
        className="bg-primary-900 text-white px-8 py-2 rounded-full font-bold shadow-primary-300 shadow-lg mt-2"
      >
        شروع کنید
      </Link>
    </div>
  );
};

const ThirdSection = () => {
  return (
    <div className="shadow px-8 py-4 rounded-t-3xl w-full flex flex-col items-center justify-center">
      <IoShieldCheckmark size={32} className="text-primary-900 mb-4" />
      <span className="font-extrabold block">
        پرداخت‌ امن پراجکت ضامن امنیت کاربران
      </span>
      <span className="text-center block text-[#5F6063] mt-3 text-sm">
        هزینه انجام پروژه تا تایید نهایی و رضایت شما، نزد صندوق امن پراجکت به
        امانت می‌ماند.
      </span>
    </div>
  );
};
