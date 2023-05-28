import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import exmp from "../../public/boredApeCollection.webp";
import {
  TypographyH4,
  TypographyLarge,
  TypographyLead,
  TypographyMuted,
  TypographyMutedH3,
  TypographySmall,
} from "./Typography";
import { Button } from "../ui/button";
import { AiOutlineShoppingCart } from "react-icons/ai";

type Props = {};

const ProductCard: React.FC<Props> = (props): React.ReactElement => {
  return (
    <div>
      <Card className="overflow-hidden cursor-pointer">
        <div className="relative w-full aspect-square overflow-hidden mb-2">
          <Image src={exmp} alt="product" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="px-5 pb-5">
          <div className="pb-5">
            <TypographySmall>Apple Watch Series 7 GPS</TypographySmall>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <Button className="text-xl flex gap-2 items-center">
              <AiOutlineShoppingCart />
              <TypographySmall>Add</TypographySmall>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
