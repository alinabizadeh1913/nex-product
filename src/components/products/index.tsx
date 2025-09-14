"use client";

import { useLayoutEffect, useState } from "react";
import Section from "../layout/section";
import Typography from "../layout/typography";
import { useSidebarStore } from "@/store";
import {
  LeftIcon,
  ListIcon,
  MoonIcon,
  PriceIcon,
  RightIcon,
  SearchIcon,
  SortIcon,
} from "../../../public/svg";
import Image from "next/image";

interface categoryType {
  id: number;
  title: string;
}
const ProductsComponent = () => {
  const [categories, setCategories] = useState<categoryType[]>([
    {
      id: 1,
      title: "Art",
    },
    {
      id: 2,
      title: "Music",
    },
    {
      id: 3,
      title: "Collectibles",
    },
    {
      id: 4,
      title: "Sport",
    },
  ]);

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
          } duration-300 flex justify-center`}
        >
          <section className="w-[1536px] mx-auto">
            <Typography className="text-[#316e8d] dark:text-[#fff] text-[22px] font-[700] select-none">
              Products
            </Typography>
            <div className="flex mt-6 justify-between items-center">
              <div className="category flex gap-x-4 items-center">
                {categories?.map((category) => (
                  <div
                    className={`h-[36px] ${
                      category.id === 1 ? "bg-[#fff] dark:bg-[#113C44]" : ""
                    } hover:bg-[#fff] dark:hover:bg-[#113C44] rounded-full px-4 flex items-center cursor-pointer`}
                    key={category.id}
                  >
                    <Typography className="text-[#316e8d] dark:text-[#fff]">
                      {category.title}
                    </Typography>
                  </div>
                ))}
              </div>
              <div className="flex gap-x-[16px]">
                <div className="h-[40px] rounded-full bg-[#fff] dark:bg-[#113C44] px-5 flex gap-x-[10px] w-[200px]">
                  <label
                    htmlFor="searchInput"
                    className="cursor-pointer flex items-center justify-center"
                  >
                    <div className="flex items-center justify-center text-[#316e8d] dark:text-[#fff]">
                      <SearchIcon />
                    </div>
                  </label>
                  <input
                    type="text"
                    id="searchInput"
                    className="w-full border-0 outline-0 bg-transparent text-[#316e8d] placeholder:text-[#316e8d] dark:placeholder:text-white dark:text-[#fff]"
                    placeholder="Search"
                  />
                </div>
                <div className="h-[40px] rounded-full bg-[#fff] dark:bg-[#113C44] px-[8px] flex items-center gap-x-[6px] cursor-pointer">
                  <div className="w-[28px] h-[28px] rounded-full bg-[#eef3ff] dark:bg-[#113C44] flex justify-center items-center text-[#316e8d] dark:text-[#fff]">
                    <PriceIcon />
                  </div>
                  <div>
                    <Typography className="text-[#316e8d] dark:text-[#fff] font-[700] text-[14px]">
                      2,000 - 3,000
                    </Typography>
                  </div>
                </div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#fff] dark:bg-[#113C44] flex justify-center items-center cursor-pointer">
                  <div className="flex text-[#316e8d] dark:text-[#fff]">
                    <SortIcon />
                  </div>
                </div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#fff] dark:bg-[#113C44] flex justify-center items-center cursor-pointer">
                  <div className="flex text-[#316e8d] dark:text-[#fff]">
                    <ListIcon />
                  </div>
                </div>

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
            <div className="mt-10">
              <div
                className={`grid gap-5 flex-wrap ${
                  sidebarOpen ? "grid-cols-4" : "grid-cols-5"
                }`}
              >
                {Array.from({ length: 20 }).map((_, index) => (
                  <div
                    className="p-[15px] rounded-[10px] bg-[#fff] dark:bg-[#113C44]"
                    key={index}
                  >
                    <div className="relative w-full h-[150px] rounded-[10px] overflow-hidden">
                      <Image src={`/images/image.png`} alt={`img`} fill />
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <Typography className="text-[#316e8d] dark:text-[#fff] font-[600]">
                        Abstract Colors
                      </Typography>
                      <Typography className="text-[#316e8d] dark:text-[#fff] text-sm">
                        05/12
                      </Typography>
                    </div>
                    <div className="category">
                      <Typography className="text-[#2b565e] dark:text-[#7CCFDE] text-sm">
                        Art
                      </Typography>
                    </div>
                    <div className="description">
                      <Typography className="text-[#316e8d] dark:text-[#fff] line-clamp-2 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda, omnis modi officiis saepe similique atque
                        nesciunt vel fugiat, ipsam iusto ea nostrum perferendis
                        officia aperiam molestias possimus harum veritatis
                        provident.
                      </Typography>
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <Typography className="text-[#316e8d] dark:text-[#fff] font-[600] text-sm">
                        Price : 300 $
                      </Typography>
                      <button className="bg-[#248597] h-[32px] rounded-full px-5">
                        <Typography className="text-[#fff] text-sm">
                          Buy
                        </Typography>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-20 w-full flex justify-center">
              <div className="flex gap-x-4">
                <div className="w-[36px] h-[36px] rounded-full border-[2px] border-[#248597] hover:bg-[#248597] duration-300 group flex justify-center items-center select-none cursor-pointer">
                  <Typography className="text-[#316e8d] dark:text-[#fff] group-hover:text-white">
                    <LeftIcon />
                  </Typography>
                </div>
                <div className="w-[36px] h-[36px] rounded-full border-[2px] border-[#248597] hover:bg-[#248597] duration-300 group flex justify-center items-center select-none cursor-pointer">
                  <Typography className="text-[#316e8d] dark:text-[#fff] group-hover:text-white">
                    2
                  </Typography>
                </div>
                <div className="w-[36px] h-[36px] rounded-full border-[2px] border-[#248597] hover:bg-[#248597] duration-300 group flex justify-center items-center select-none cursor-pointer">
                  <Typography className="text-[#316e8d] dark:text-[#fff] group-hover:text-white">
                    3
                  </Typography>
                </div>
                <div className="w-[36px] h-[36px] rounded-full border-[2px] border-[#248597] hover:bg-[#248597] duration-300 group flex justify-center items-center select-none cursor-pointer">
                  <Typography className="text-[#316e8d] dark:text-[#fff] group-hover:text-white">
                    4
                  </Typography>
                </div>
                <div className="w-[36px] h-[36px] rounded-full border-[2px] border-[#248597] hover:bg-[#248597] duration-300 group flex justify-center items-center select-none cursor-pointer">
                  <Typography className="text-[#316e8d] dark:text-[#fff] group-hover:text-white">
                    5
                  </Typography>
                </div>
                <div className="w-[36px] h-[36px] rounded-full border-[2px] border-[#248597] hover:bg-[#248597] duration-300 group flex justify-center items-center select-none cursor-pointer">
                  <Typography className="text-[#316e8d] dark:text-[#fff] group-hover:text-white">
                    <RightIcon />
                  </Typography>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Section>
    </>
  );
};

export default ProductsComponent;
