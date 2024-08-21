import classNames from "classnames";

import type { ReactNode } from "react";

import LinkButton, { linkButtonVariants } from "@/components/LinkButton";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

type Props = {
  bigMarginBelow?: boolean;
  children: ReactNode;
  className?: string;
  description: string;
  href?: string;
  title: string;
};

export default function HomePageSection({ bigMarginBelow = false, children, description, href, title }: Props) {
  return (
    <section className="mt-[50px] lg:mt-[100px]">
      <Typography className="mb-1 lg:w-9/12" color={typographyColors.grey15} variant={typographyVariants.h3}>
        {title}
      </Typography>
      <div className={classNames("flex flex-wrap lg:justify-between lg:items-end", { "mb-5 lg:mb-[60px]": !bigMarginBelow, "mb-10 lg:mb-[60px]": bigMarginBelow })}>
        <Typography className="w-full lg:w-9/12" color={typographyColors.grey35} variant={typographyVariants.body}>
          {description}
        </Typography>
        {href && (
          <LinkButton className="mb-10 lg:mb-0 mt-5 lg:mt-0 w-max" href={href} variant={linkButtonVariants.secondary}>
            View All
          </LinkButton>
        )}
      </div>
      <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap">{children}</div>
    </section>
  );
}
