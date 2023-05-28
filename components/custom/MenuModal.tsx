"use client";
import React, { Dispatch, SetStateAction } from "react";
import { TypographyH2 } from "./Typography";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuModal: React.FC<Props> = ({ setOpen, open }): React.ReactElement => {
  const router = useRouter();
  return (
    <motion.section
      initial={{ left: "-200%" }}
      animate={{ left: 0 }}
      className="w-screen h-screen bg-primaryGray fixed top-0 left-0 z-10 flex flex-col p-5"
    >
      <div
        className="w-full flex justify-end items-center text-3xl"
        onClick={() => setOpen(false)}
      >
        <RxCross2 />
      </div>
      <TypographyH2>
        <ul className="flex flex-col gap-6 mt-8">
          <li
            className="hover:bg-gray-200 p-2 rounded-md"
            onClick={() => {
              router.push("/");
              setOpen(false);
            }}
          >
            Home
          </li>
          <li
            className="hover:bg-gray-200 p-2 rounded-md"
            onClick={() => {
              router.push("/about");
              setOpen(false);
            }}
          >
            About
          </li>
          <li className="flex flex-col gap-4 ">
            <span className="p-2">Store</span>
            <ol className="flex flex-col gap-4 ">
              {["shoes", "clothing", "watches"].map((item, i) => {
                return (
                  <li
                    key={i}
                    className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-md"
                    onClick={() => {
                      router.push(`/store/${item}`);
                      setOpen(false);
                    }}
                  >
                    <AiOutlineDoubleRight />
                    <span className="capitalize">{item}</span>
                  </li>
                );
              })}
            </ol>
          </li>
        </ul>
      </TypographyH2>
    </motion.section>
  );
};

export default MenuModal;
