import CenterSection from "@/features/home/center-section";
import LandingNavbar from "@/features/home/layout/landing-navbar";
import LeftSection from "@/features/home/left-section";
import RightSection from "@/features/home/right-section";

export default function Home() {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="max-w-[1200px] mx-auto w-full xl:px-0 px-4">
        <LandingNavbar />
        <main className="main-height bg-white">
          <div className="grid lg:grid-cols-3 gap-8 lg:mt-4 mt-2 w-full">
            <RightSection />
            <CenterSection />
            <LeftSection />
          </div>
        </main>
      </div>
    </div>
  );
}
