"use client";

import { useSidebarStore } from "@/store";
import Section from "../layout/section";
import Typography from "../layout/typography";

const AddProductComponent = () => {
  const { sidebarOpen } = useSidebarStore();
  return (
    <>
      <Section className="flex flex-row-reverse">
        <section
          className={`${
            sidebarOpen ? "w-[calc(100%-250px)]" : "w-[calc(100%-75px)]"
          } duration-300`}
        >
          <Typography className="text-[#fff] text-[22px] font-[700] select-none">
            Add Products
          </Typography>
        </section>
      </Section>
    </>
  );
};

export default AddProductComponent;
