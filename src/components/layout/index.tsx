"use client";

import { useSidebarStore } from "@/store";
import SideMenu from "./sideMenu";
import Typography from "./typography";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { sidebarOpen } = useSidebarStore();

  return (
    <>
      <div className="w-full h-screen flex xl:hidden justify-center items-center px-[48px]">
        <Typography className="text-2xl text-[#316e8d] dark:text-white text-center leading-9 select-none">
          For the best experience, please view this site on a desktop device !
        </Typography>
      </div>
      <section className="hidden xl:flex overflow-hidden">
        <SideMenu />
        <main
          className={`w-full ${
            sidebarOpen ? "px-[42px]" : "px-[40px]"
          } py-[40px] duration-300`}
        >
          {children}
        </main>
      </section>
    </>
  );
};

export default Layout;
