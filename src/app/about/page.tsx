import React from "react";
import {
  TypographyH2,
  TypographyLarge,
  TypographyP,
} from "../../../components/custom/Typography";
import AboutSectionCard from "../../../components/custom/AboutSectionCard";

type Props = {};

const pageData = [
  {
    title: "What we really do?",
    description:
      "OceanMart is a startup and we are on a mission to revolutionize the way you shop online. As an innovative ecommerce store, we bring you a seamless shopping experience right at your fingertips.",
  },
  {
    title: "Incorporated",
    description: "May 2023",
  },
  {
    title: "Our Vision",
    description:
      "our vision is to redefine the online shopping experience and become the go-to destination for customers seeking convenience, quality, and exceptional value. We aspire to be more than just an ecommerce store; we strive to be a trusted partner on your shopping journey",
  },
  {
    title: "Cooperate With Us!",
    description:
      "We are developing new features to serve better to our customers, If you are facing any issue, Please feel free to Contact Us",
  },
];

const page = (props: Props) => {
  return (
    <main className="min-h-screen w-full relative py-[64px]">
      <div className="text-center">
        <TypographyH2>About Us</TypographyH2>
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {pageData.map((d, i) => {
            return (
              <AboutSectionCard
                title={d.title}
                description={d.description}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default page;
