"use client";
import React, { ReactElement, useEffect } from "react";
import { databases } from "../../../../database/client";
import ProductCard from "../../../../components/custom/ProductCard";
import {
  TypographyH2,
  TypographyH4,
} from "../../../../components/custom/Typography";
import { ChevronRight } from "lucide-react";

type Props = {
  params: {
    type: string;
  };
};

const Store: React.FC<Props> = ({ params }): ReactElement => {
  //   useEffect(() => {
  //     databases
  //       .listDocuments(
  //         process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
  //         process.env.NEXT_PUBLIC_APPWRITE_PRODUCTS_COLLECTION_ID!
  //       )
  //       .then((d) => {
  //         console.log(d);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }, []);

  return (
    <main className="min-h-screen w-full relative mb-20">
      <br />
      <TypographyH4>
        <div className="flex items-center gap-4">
          <p>Store</p>
          <ChevronRight fontWeight={30} />
          <p className="text-gray-400 font-semibold">Category</p>
          <ChevronRight />
          <p className="text-gray-400 capitalize font-semibold">
            {params.type}
          </p>
        </div>
      </TypographyH4>
      <br />
      <br />
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
};

export default Store;
