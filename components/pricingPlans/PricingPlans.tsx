"use client";

import { useState } from "react";
import classNames from "classnames";

import { pricingPlans } from "@/data";
import SinglePricingPlan from "./SinglePricingPlan";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

export default function PricingPlans() {
  const [isMonthly, setIsMonthly] = useState(true);

  const toggleIsMonthly = () => setIsMonthly((prevState) => !prevState);

  return (
    <>
      <div className="p-3 bg-absolute-white rounded-lg w-max mx-auto mb-10">
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
      <section className="flex flex-col gap-[30px] p-5 bg-absolute-white rounded-xl">
        {pricingPlans.map((pricingPlan) => (
          <SinglePricingPlan isMonthly={isMonthly} pricingPlan={pricingPlan} key={pricingPlan.id} />
        ))}
      </section>
    </>
  );
}
