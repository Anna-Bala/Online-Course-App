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
    <section className="mt-[50px]">
      <Typography className="mb-1" color={typographyColors.grey15} variant={typographyVariants.h3}>
        {title}
      </Typography>
      <Typography className={classNames({ "mb-5": !bigMarginBelow, "mb-10": bigMarginBelow })} color={typographyColors.grey35} variant={typographyVariants.body}>
        {description}
      </Typography>
      {href && (
        <LinkButton className="mb-10 w-max" href={href} variant={linkButtonVariants.secondary}>
          View All
        </LinkButton>
      )}
      <div className="flex flex-col gap-5">{children}</div>
    </section>
  );
}
