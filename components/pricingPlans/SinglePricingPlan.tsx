import { CheckMarkIcon, CrossIcon } from "@/icons";
import LinkButton, { linkButtonVariants } from "@/components/LinkButton";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

type Props = {
  isMonthly: boolean;
  pricingPlan: {
    availableFeatures: string[];
    isFree: boolean;
    monthyPrice: number;
    unavailableFeatures: string[];
    yearlyPrice: number;
  };
};

export default function SinglePricingPlan({ isMonthly, pricingPlan }: Props) {
  return (
    <section className="px-5 pt-[30px] pb-5 bg-white-99 border border-white-95 rounded-xl">
      <Typography
        className="text-[16px] !font-medium text-center py-2 px-[22px] mb-[30px] bg-orange-97 border border-orange-90 rounded"
        color={typographyColors.grey15}
        variant={typographyVariants.body}
      >
        {pricingPlan.isFree ? "Free Plan" : "Pro Plan"}
      </Typography>

      <div className="flex items-baseline justify-center mb-[30px]">
        <Typography className="text-right font-bold text-[50px] leading-9" color={typographyColors.grey15} htmlTag="span" variant={typographyVariants.body}>
          &#36;{isMonthly ? pricingPlan.monthyPrice : pricingPlan.yearlyPrice}
        </Typography>
        <Typography className="!font-medium" color={typographyColors.grey30} htmlTag="span" variant={typographyVariants.body}>
          {isMonthly ? "/month" : "/year"}
        </Typography>
      </div>

      <div className="flex gap-y-5 flex-col items-center p-5 bg-absolute-white border border-white-95 rounded-t-[10px]">
        <Typography className="!font-medium text-[18px]" color={typographyColors.grey15} variant={typographyVariants.body}>
          Available Features
        </Typography>

        {pricingPlan.availableFeatures.map((feature) => (
          <div className="flex gap-2 p-3 bg-absolute-white border border-white-95 rounded-md w-full">
            <div className="p-1 rounded bg-orange-95 h-max">
              <CheckMarkIcon size={16} />
            </div>
            <Typography color={typographyColors.grey30} variant={typographyVariants.body}>
              {feature}
            </Typography>
          </div>
        ))}

        {pricingPlan.unavailableFeatures.map((feature) => (
          <div className="flex gap-2 p-3 bg-absolute-white border border-white-95 rounded-md w-full">
            <div className="p-1 rounded bg-absolute-white border border-white-95 h-max">
              <CrossIcon size={16} />
            </div>
            <Typography color={typographyColors.grey30} variant={typographyVariants.body}>
              {feature}
            </Typography>
          </div>
        ))}
      </div>
      <LinkButton className="rounded-b-lg rounded-t-none px-6 py-[18px]" href="/login" variant={linkButtonVariants.primary}>
        Get Started
      </LinkButton>
    </section>
  );
}
