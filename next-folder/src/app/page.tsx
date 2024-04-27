import CenterSection from "@/features/home/center-section";
import LandingNavbar from "@/features/home/layout/landing-navbar";

export default function Home() {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="max-w-[1200px] mx-auto w-full xl:px-0 px-4">
        <LandingNavbar />
        <main className="max-h-[90vh]">
          <div className="grid lg:grid-cols-3 gap-4 mt-4 w-full">
            <div className="lg:block hidden"></div>
            <CenterSection />
            <div className="lg:block hidden"></div>
          </div>
        </main>
      </div>
    </div>
  );
}
