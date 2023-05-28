import { ArrowRightIcon, Scale } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import ape from "../../public/boredApeCollection.webp";
import Image from "next/image";
import { TypographyH4 } from "./Typography";
import { motion } from "framer-motion";

type Props = {};

const ProductCategoryCard: React.FC<Props> = (props): React.ReactElement => {
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Card style={{ overflow: "hidden", cursor: "pointer" }}>
        <CardContent style={{ padding: 0 }}>
          <div className="w-full  relative h-[200px]">
            <Image
              className="rounded-t-lg"
              src={ape}
              alt="product"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-5">
            <div className="py-2">
              <TypographyH4>Stylish Shoes</TypographyH4>
            </div>
            <a className="flex gap-2 items-center cursor-pointer">
              <span>View</span>
              <ArrowRightIcon width={15} />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCategoryCard;
