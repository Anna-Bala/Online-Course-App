"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";

import { getPricingPlans } from "@/utils/getApiData";
import SinglePricingPlan from "./SinglePricingPlan";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

import type { PricingPlan } from "@/app/api/types";

export default function PricingPlans() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMonthly, setIsMonthly] = useState(true);
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[] | []>([]);

  const toggleIsMonthly = () => setIsMonthly((prevState) => !prevState);

  useEffect(() => {
    setIsLoading(true);
    getPricingPlans()
      .then((data) => setPricingPlans(data))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return null;

  return (
    <>
      <div className="p-3 bg-absolute-white rounded-lg w-max mx-auto mb-10 lg:mb-[50px]">
        <button
          className={classNames("rounded-md px-6 py-3", {
            "bg-orange-50": isMonthly,
            "bg-absolute-white": !isMonthly,
          })}
          onClick={toggleIsMonthly}
        >
          <Typography color={isMonthly ? typographyColors.white : typographyColors.grey30} variant={typographyVariants.body}>
            Monthly
          </Typography>
        </button>
        <button
          className={classNames("rounded-md px-6 py-3", {
            "bg-orange-50": !isMonthly,
            "bg-absolute-white": isMonthly,
          })}
          onClick={toggleIsMonthly}
        >
          <Typography color={!isMonthly ? typographyColors.white : typographyColors.grey30} variant={typographyVariants.body}>
            Yearly
          </Typography>
        </button>
      </div>
      <section className="flex flex-col gap-[30px] p-5 bg-absolute-white rounded-xl lg:w-full lg:flex-row lg:p-[50px] 2xl:p-[80px]">
        {pricingPlans.map((pricingPlan) => (
          <SinglePricingPlan isMonthly={isMonthly} pricingPlan={pricingPlan} key={pricingPlan.id} />
        ))}
      </section>
    </>
  );
}
