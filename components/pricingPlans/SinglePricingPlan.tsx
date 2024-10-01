import LinkButton, { linkButtonVariants } from "@/components/LinkButton";
import PricingPlanFeature from "./PricingPlanFeature";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

import type { PricingPlan } from "@/app/api/types";

type Props = {
  isMonthly: boolean;
  pricingPlan: PricingPlan;
};

export default function SinglePricingPlan({ isMonthly, pricingPlan }: Props) {
  return (
    <section className="px-5 pt-[30px] pb-5 bg-white-99 border border-white-95 rounded-xl lg:flex-grow lg:px-6 lg:pt-10 lg:pb-6 2xl:px-[30px] 2xl:pt-[50px] 2xl:pb-[30px]">
      <Typography
        className="!text-[16px] !font-medium text-center py-2 px-[22px] mb-[30px] bg-orange-97 border border-orange-90 rounded lg:!text-[18px] lg:mb-[50px] 2xl:!text-[22px]"
        color={typographyColors.grey15}
        variant={typographyVariants.body}
      >
        {pricingPlan.isFree ? "Free Plan" : "Pro Plan"}
      </Typography>

      <div className="flex items-baseline justify-center mb-[30px] lg:mb-[50px]">
        <Typography
          className="text-right !font-bold !text-[50px] !leading-9 lg:!text-[60px] lg:!leading-10 2xl:!text-[80px] 2xl:!leading-[60px]"
          color={typographyColors.grey15}
          htmlTag="span"
          variant={typographyVariants.body}
        >
          &#36;{isMonthly ? pricingPlan.monthlyPrice : pricingPlan.yearlyPrice}
        </Typography>
        <Typography className="!font-medium 2xl:!text-[20px]" color={typographyColors.grey30} htmlTag="span" variant={typographyVariants.body}>
          {isMonthly ? "/month" : "/year"}
        </Typography>
      </div>

      <div className="flex gap-y-5 flex-col items-center p-5 bg-absolute-white border border-white-95 rounded-t-[10px] lg:p-[30px] lg:gap-y-6 2xl:p-10">
        <Typography className="!font-medium !text-[18px] 2xl:!text-[20px]" color={typographyColors.grey15} variant={typographyVariants.body}>
          Available Features
        </Typography>

        <div className="flex flex-col w-full gap-y-5 xl:px-[30px]">
          {pricingPlan.availableFeatures.map((feature) => (
            <PricingPlanFeature feature={feature} isUnavailable={false} key={feature} />
          ))}

          {pricingPlan.unavailableFeatures.map((feature) => (
            <PricingPlanFeature feature={feature} isUnavailable key={feature} />
          ))}
        </div>
      </div>
      <LinkButton className="rounded-b-lg rounded-t-none px-6 py-[18px]" href="/login" variant={linkButtonVariants.primary}>
        Get Started
      </LinkButton>
    </section>
  );
}
