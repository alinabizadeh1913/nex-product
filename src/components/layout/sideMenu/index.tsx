"use client";

import Link from "next/link";
import {
  ChartIcon,
  HomeIcon,
  LayoutIcon,
  LoginIcon,
  PlusIcon,
  ProductIcon,
  ProfileIcon,
  SettingsIcon,
} from "../../../../public/svg";
import Section from "../section";
import Typography from "../typography";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useSidebarStore } from "@/store";

const SideMenu = () => {
  const pathname = usePathname();
  const { sidebarOpen, setSidebarOpen } = useSidebarStore();
  const sidebarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <>
      <section ref={sidebarRef}>
        <section
          className={`${
            sidebarOpen ? "w-[250px]" : "w-[75px]"
          } bg-[#fff] dark:bg-[#0c2a30] h-screen fixed top-0 left-0`}
          style={{
            transition: "width 0.3s ease",
          }}
        >
          <div className="flex flex-col justify-between h-full w-full">
            <div>
              <div
                className={`${
                  sidebarOpen ? "px-[36px]" : "px-[16px]"
                } duration-300 py-[40px]`}
              >
                <Typography
                  className={`flex gap-x-1 select-none ${
                    sidebarOpen ? "" : "justify-center"
                  }`}
                  tagName="h1"
                >
                  <span className="text-[#316e8d] dark:text-[#fff] font-[700] text-[20px]">
                    Nex
                  </span>
                  <span
                    className={`text-[#316e8d] dark:text-[#fff] text-[20px] ${
                      sidebarOpen ? "block" : "hidden"
                    }`}
                  >
                    Product
                  </span>
                </Typography>
              </div>
              <div
                className={`flex flex-col gap-y-[20px] ${
                  sidebarOpen ? "ps-[36px]" : ""
                } duration-300`}
              >
                <div
                  className={`flex items-center relative ${
                    sidebarOpen ? "" : "justify-center"
                  }`}
                >
                  <div className="flex items-center gap-x-[16px] cursor-default select-none">
                    <div className="flex text-[#316e8d] dark:text-white">
                      <HomeIcon />
                    </div>
                    <Typography
                      className={`text-[#316e8d] dark:text-[#ffffff] ${
                        sidebarOpen ? "block" : "hidden"
                      }`}
                    >
                      Dashboard
                    </Typography>
                  </div>
                  <div className="absolute right-0 w-[3px] h-[120%] rounded-full"></div>
                </div>
                <div
                  className={`flex items-center relative ${
                    sidebarOpen ? "" : "justify-center"
                  }`}
                >
                  <Link
                    href={"/"}
                    className="flex items-center gap-x-[16px] cursor-pointer"
                  >
                    <div
                      className={`flex ${
                        pathname == "/"
                          ? "text-[#316e8d] dark:text-[#74D8FF]"
                          : "text-[#316e8d] dark:text-[#ffffff]"
                      }`}
                    >
                      <ProductIcon />
                    </div>
                    <Typography
                      className={`${
                        pathname == "/"
                          ? "text-[#316e8d] dark:text-[#74D8FF]"
                          : "text-[#316e8d] dark:text-[#ffffff]"
                      } ${sidebarOpen ? "block" : "hidden"}`}
                    >
                      Products
                    </Typography>
                  </Link>
                  <div
                    className={`absolute right-0 w-[3px] h-[120%] rounded-full ${
                      pathname == "/" ? "bg-[#4CA3BD]" : ""
                    }`}
                  ></div>
                </div>
                <div
                  className={`flex items-center relative ${
                    sidebarOpen ? "" : "justify-center"
                  }`}
                >
                  <Link
                    href={"/add-product"}
                    className="flex items-center gap-x-[16px] cursor-pointer"
                  >
                    <div
                      className={`flex ${
                        pathname == "/add-product"
                          ? "text-[#316e8d] dark:text-[#74D8FF]"
                          : "text-[#316e8d] dark:text-[#ffffff]"
                      }`}
                    >
                      <PlusIcon />
                    </div>
                    <Typography
                      className={`${
                        pathname == "/add-product"
                          ? "text-[#316e8d] dark:text-[#74D8FF]"
                          : "text-[#316e8d] dark:text-[#ffffff]"
                      } ${sidebarOpen ? "block" : "hidden"}`}
                    >
                      Add Product
                    </Typography>
                  </Link>
                  <div
                    className={`absolute right-0 w-[3px] h-[120%] rounded-full ${
                      pathname == "/add-product" ? "bg-[#4CA3BD]" : ""
                    }`}
                  ></div>
                </div>
                <div
                  className={`flex items-center relative ${
                    sidebarOpen ? "" : "justify-center"
                  }`}
                >
                  <div className="flex items-center gap-x-[16px] cursor-default select-none">
                    <div className="flex text-[#316e8d] dark:text-white">
                      <ChartIcon />
                    </div>
                    <Typography
                      className={`text-[#316e8d] dark:text-[#ffffff] ${
                        sidebarOpen ? "block" : "hidden"
                      }`}
                    >
                      Chart
                    </Typography>
                  </div>
                  <div className="absolute right-0 w-[3px] h-[120%] rounded-full"></div>
                </div>
                <div
                  className={`flex items-center relative ${
                    sidebarOpen ? "" : "justify-center"
                  }`}
                >
                  <div className="flex items-center gap-x-[16px] cursor-default select-none">
                    <div className="flex text-[#316e8d] dark:text-white">
                      <LayoutIcon />
                    </div>
                    <Typography
                      className={`text-[#316e8d] dark:text-[#ffffff] ${
                        sidebarOpen ? "block" : "hidden"
                      }`}
                    >
                      Layout
                    </Typography>
                  </div>
                  <div className="absolute right-0 w-[3px] h-[120%] rounded-full"></div>
                </div>
                <div
                  className={`flex items-center relative ${
                    sidebarOpen ? "" : "justify-center"
                  }`}
                >
                  <div className="flex items-center gap-x-[16px] cursor-default select-none">
                    <div className="flex text-[#316e8d] dark:text-white">
                      <ProfileIcon />
                    </div>
                    <Typography
                      className={`text-[#316e8d] dark:text-[#ffffff] ${
                        sidebarOpen ? "block" : "hidden"
                      }`}
                    >
                      Profile
                    </Typography>
                  </div>
                  <div className="absolute right-0 w-[3px] h-[120%] rounded-full"></div>
                </div>
                <div
                  className={`flex items-center relative ${
                    sidebarOpen ? "" : "justify-center"
                  }`}
                >
                  <div className="flex items-center gap-x-[16px] cursor-default select-none">
                    <div className="flex text-[#316e8d] dark:text-white">
                      <SettingsIcon />
                    </div>
                    <Typography
                      className={`text-[#316e8d] dark:text-[#ffffff] ${
                        sidebarOpen ? "block" : "hidden"
                      }`}
                    >
                      Settings
                    </Typography>
                  </div>
                  <div className="absolute right-0 w-[3px] h-[120%] rounded-full"></div>
                </div>
              </div>
            </div>
            <div
              className={`${sidebarOpen ? "px-[36px]" : "px-[16px]"} py-[40px]`}
            >
              <button className="w-full flex justify-center bg-[#316e8d] hover:bg-[#215a63] h-[42px] rounded-[5px]">
                <div className="flex items-center gap-x-[8px]">
                  <Typography
                    className={`text-[#ffffff] ${
                      sidebarOpen ? "block" : "hidden"
                    }`}
                  >
                    Login
                  </Typography>
                  <div className="flex">
                    <LoginIcon />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default SideMenu;
