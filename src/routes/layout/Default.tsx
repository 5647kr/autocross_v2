import { Outlet } from "react-router";
import MobileHeader from "../../components/MobileHeader";
import { DesktopNav, MobileNav } from "../../components/Nav";

export default function Default() {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-7xl mx-auto">
      <MobileHeader />
      <main className="flex-1 grid gird-cols-4 gap-5 mx-5 pt-15 pb-22.5 lg:grid-cols-12 lg:gap-6 lg:pb-5 lg:pt-5 lg:mx-6">
        <DesktopNav />
        <div className="col-span-full lg:col-[3/13]">
          <Outlet />
        </div>
      </main>
      <MobileNav />
    </div>
  );
}
