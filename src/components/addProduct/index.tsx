"use client";

import { useSidebarStore } from "@/store";
import Section from "../layout/section";
import Typography from "../layout/typography";
import { MoonIcon } from "../../../public/svg";
import { useLayoutEffect, useState } from "react";

const AddProductComponent = () => {
  const { sidebarOpen } = useSidebarStore();

  const [theme, setTheme] = useState<"dark" | "light">("light");

  const changeTheme = () => {
    if (theme) {
      if (theme === "light") {
        document.documentElement.classList.add("dark");
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
        localStorage.setItem("theme", "light");
      }
    }
  };

  useLayoutEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <>
      <Section className="flex flex-row-reverse">
        <section
          className={`${
            sidebarOpen ? "w-[calc(100%-250px)]" : "w-[calc(100%-75px)]"
          } duration-300`}
        >
          <div className="flex justify-between items-center">
            <Typography className="text-[#316e8d] dark:text-[#fff] text-[22px] font-[700] select-none">
              Add Products
            </Typography>
            <div className="flex ">
              <div
                className="w-[40px] h-[40px] rounded-full bg-[#fff] dark:bg-[#113C44] flex justify-center items-center cursor-pointer"
                onClick={changeTheme}
              >
                <div className="flex text-[#316e8d] dark:text-[#fff]">
                  <MoonIcon />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Section>
    </>
  );
};

export default AddProductComponent;
