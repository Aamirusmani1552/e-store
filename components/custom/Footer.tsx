import React from "react";
import { TypographyH3, TypographyLarge, TypographyMutedH3 } from "./Typography";
import { InstagramIcon } from "lucide-react";
import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";

type Props = {};

const Footer: React.FC<Props> = (props): React.ReactElement => {
  return (
    <footer className="py-10 flex justify-between flex-col md:flex-row">
      <div className="flex gap-4 items-center">
        <TypographyH3>OceanMart</TypographyH3>
        <TypographyMutedH3>|&nbsp;&nbsp;&nbsp;2023</TypographyMutedH3>
      </div>
      <div className="flex gap-4 items-center">
        <TypographyLarge>Follow Us On | </TypographyLarge>
        <div className="flex gap-4">
          <Link
            target={"_blank"}
            href={"https://www.instagram.com/oceanmart_accessories/"}
          >
            <InstagramIcon />
          </Link>

          <Link
            target={"_blank"}
            href={"https://chat.whatsapp.com/GUgNQYRRc9MEhEPH3Pxa0P"}
          >
            <div className="text-2xl">
              <AiOutlineWhatsApp />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
