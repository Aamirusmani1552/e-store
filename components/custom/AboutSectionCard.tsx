import React from "react";
import { TypographyLarge, TypographyP } from "./Typography";

type Props = {
  title: string;
  description: string | number;
};

const AboutSectionCard = ({ title, description }: Props) => {
  return (
    <div>
      <TypographyLarge>{title}</TypographyLarge>
      <TypographyP>{description}</TypographyP>
    </div>
  );
};

export default AboutSectionCard;
