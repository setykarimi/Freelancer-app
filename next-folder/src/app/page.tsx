import LandingNavbar from "@/common/layout/landing-navbar";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[1200px] mx-auto w-full xl:px-0 px-4">
        <LandingNavbar />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          main page
        </main>
      </div>
    </div>
  );
}
