import classNames from "classnames";

import { CheckMarkIcon } from "@/icons";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";
import useGetWindowSize from "@/hooks/useGetWindowSize";

type Props = {
  feature: string;
  isUnavailable: boolean;
};

export default function PricingPlanFeature({ feature, isUnavailable }: Props) {
  const { is2Xl } = useGetWindowSize();

  return (
    <div className="flex gap-2 p-3 bg-absolute-white border border-white-95 rounded-md w-full" key={feature}>
      <div className={classNames("p-1 rounded h-max", { "bg-orange-95": !isUnavailable, "bg-absolute-white border border-white-95": isUnavailable })}>
        <CheckMarkIcon size={is2Xl ? 20 : 16} />
      </div>
      <Typography color={typographyColors.grey30} variant={typographyVariants.body}>
        {feature}
      </Typography>
    </div>
  );
}
