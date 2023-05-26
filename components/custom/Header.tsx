import React from "react";
import { TypographyLarge, TypographyP, TypographySmall } from "./Typography";
import Link from "next/link";

type Props = {};

const Header: React.FC<Props> = (props): React.ReactElement => {
  return (
    <header className="flex items-center justify-between py-4">
      <TypographyLarge>OceanMart</TypographyLarge>

      <div className="flex items-center gap-8">
        <Link href={"/"}>
          <TypographySmall>Store</TypographySmall>
        </Link>
        <Link href={"/"}>
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
