"use client";

import React, { Dispatch, SetStateAction } from "react";
import { TypographyLarge, TypographySmall } from "./Typography";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ setOpen, open }): React.ReactElement => {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between py-4">
      <TypographyLarge>
        <Link href={"/"}>OceanMart</Link>
      </TypographyLarge>

      <div
        className="text-2xl md:hidden block"
        onClick={() => {
          setOpen(true);
        }}
      >
        <GiHamburgerMenu />
      </div>
      <div className="md:flex items-center gap-8 hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <TypographySmall>Store</TypographySmall>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                router.push("/store/shoes");
              }}
            >
              Shoes
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                router.push("/store/clothing");
              }}
            >
              Clothing
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                router.push("/store/watches");
              }}
            >
              Watches
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href={"/about"}>
          <TypographySmall>About</TypographySmall>
        </Link>
        <Link href={"/"}>
          <TypographySmall>Contact</TypographySmall>
        </Link>
      </div>
    </header>
  );
};

export default Header;
