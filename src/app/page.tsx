"use client";
import {
  TypographyExtraLarge,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyLarge,
} from "../../components/custom/Typography";
import { motion } from "framer-motion";
import modal1 from "../../public/model4-removebg-preview.png";
import modal2 from "../../public/model3-removebg-preview.png";
import Image from "next/image";
import ProductCategoryCard from "../../components/custom/ProductCategoryCard";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      {/* hero section */}
      <section className="flex relative  mt-[128px] w-full justify-center flex-col md:flex-row">
        <div className="relative border-red-50 flex-1 flex flex-col text-center max-w-[700px] gap-4">
          <TypographyExtraLarge>
            <svg
              width="131"
              height="71"
              viewBox="0 0 131 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[-77px]"
            >
              <motion.path
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    duration: 2,
                    ease: "easeInOut",
                  },
                }}
                d="M121.838 36.8871C122.88 37.2529 124.021 36.7045 124.387 35.6623L130.348 18.6778C130.714 17.6356 130.165 16.4941 129.123 16.1284C128.081 15.7626 126.939 16.311 126.573 17.3532L121.275 32.4505L106.178 27.1522C105.136 26.7865 103.994 27.3349 103.628 28.3771C103.263 29.4194 103.811 30.5608 104.853 30.9266L121.838 36.8871ZM0.499999 70.5C5.39802 70.5 10.2707 68.3257 15.0227 65.0337C19.7922 61.7295 24.6387 57.1591 29.5154 52.0624C34.3931 46.9645 39.3911 41.2427 44.4144 35.6364C49.4579 30.0074 54.5461 24.4725 59.6823 19.6448C70.0741 9.87716 80.1557 3.50647 89.9533 4.46701C99.6072 5.41346 110.015 13.6313 120.697 35.8661L124.303 34.1339C113.485 11.6186 102.205 1.64901 90.3436 0.486096C78.6256 -0.662724 67.3635 6.93534 56.9427 16.7302C51.6726 21.6838 46.4874 27.3285 41.4353 32.9671C36.3628 38.6284 31.4428 44.2621 26.6252 49.297C21.8066 54.3331 17.1804 58.6728 12.7449 61.7456C8.29176 64.8306 4.22698 66.5 0.500001 66.5L0.499999 70.5Z"
                fill="black"
                stroke={"black"}
              />
            </svg>
            <motion.p
              initial={{ x: -50, opacity: 0, dur: 2 }}
              animate={{ x: 0, opacity: 1 }}
            >
              Where style meets convenience
            </motion.p>
            <svg
              width="80"
              height="105"
              viewBox="0 0 80 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-[-77px] md:bottom-0 right-0"
            >
              <motion.path
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    duration: 2,
                    ease: "easeInOut",
                  },
                }}
                d="M0.772835 12.4208C-0.0993666 13.0985 -0.257006 14.355 0.420738 15.2272L11.4652 29.4405C12.143 30.3128 13.3994 30.4704 14.2716 29.7926C15.1438 29.1149 15.3015 27.8584 14.6237 26.9862L4.80643 14.3521L17.4405 4.53481C18.3127 3.85707 18.4704 2.60059 17.7926 1.72839C17.1149 0.856183 15.8584 0.698544 14.9862 1.37629L0.772835 12.4208ZM79.8844 101.206C66.5406 94.6273 57.5668 88.6356 51.751 83.1956C45.9442 77.7641 43.38 72.974 42.6416 68.7783C41.9056 64.596 42.9312 60.7068 44.8946 56.9594C46.8782 53.1734 49.7403 49.6734 52.5434 46.2719C55.2514 42.9858 58.0453 39.6412 59.4054 36.4379C60.1071 34.7852 60.4996 33.0182 60.2265 31.2025C59.949 29.3572 59.0177 27.6851 57.4682 26.1871C54.4807 23.2988 48.9798 20.8548 40.3068 18.5958C31.5444 16.3136 19.2186 14.1446 2.24897 12.0156L1.75103 15.9845C18.6564 18.1054 30.7837 20.2489 39.2986 22.4667C47.903 24.7078 52.5037 26.9512 54.688 29.0629C55.7245 30.0649 56.1467 30.9709 56.271 31.7974C56.3998 32.6537 56.2425 33.6523 55.7235 34.8746C54.6422 37.4213 52.3111 40.2641 49.4566 43.728C46.6972 47.0765 43.5593 50.889 41.3515 55.103C39.1234 59.3556 37.7663 64.1539 38.7021 69.4716C39.6356 74.7759 42.7979 80.2983 49.0185 86.1168C55.23 91.9269 64.5844 98.1226 78.1156 104.794L79.8844 101.206Z"
                fill="black"
              />
            </svg>
          </TypographyExtraLarge>
          <TypographyLarge>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 100,
                transition: {
                  delay: 1,
                  ease: "easeOut",
                },
              }}
            >
              Your one-stop destination for all things fabulous.
            </motion.p>
          </TypographyLarge>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between py-[128px] gap-8 flex-col md:flex-row">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-[250px] h-[250px] relative overflow-hidden bg-primaryYellow"
            style={{
              borderRadius: "45% 55% 46% 54% / 53% 45% 55% 47% ",
              transformOrigin: "20% 30%",
            }}
          >
            <Image
              src={modal1}
              alt="banner1"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bold text-3xl text-center"
          >
            <TypographyH2>Affordable Prices. Exceptional Value.</TypographyH2>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-[250px] h-[250px] relative overflow-hidden bg-primaryPurple"
            style={{ borderRadius: "45% 55% 46% 54% / 53% 45% 55% 47%" }}
          >
            <Image
              src={modal2}
              alt="banner2"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-[64px]">
        <TypographyH2>Categories</TypographyH2>
        <br />
        {/* categories */}
        <div className="grid grid-col-1 md:grid-cols-3  gap-20">
          <ProductCategoryCard />
          <ProductCategoryCard />
          <ProductCategoryCard />
          <ProductCategoryCard />
        </div>
      </section>
    </main>
  );
}
