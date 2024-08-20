import classNames from "classnames";

import type { ReactNode } from "react";

import LinkButton, { linkButtonVariants } from "@/components/LinkButton";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

type Props = {
  children: ReactNode;
  className?: string;
  description: string;
  href?: string;
  linkTitle?: string;
  title: string;
};

export default function HomePageSection({ children, className, description, href, linkTitle, title }: Props) {
  return (
    <section className="mt-[50px]">
      <Typography className="mb-1" color={typographyColors.grey15} variant={typographyVariants.h3}>
        {title}
      </Typography>
      <Typography className={classNames({ "mb-5": !!href, "mb-10": !href })} color={typographyColors.grey35} variant={typographyVariants.body}>
        {description}
      </Typography>
      {href && (
        <LinkButton className="mb-10" href={href} variant={linkButtonVariants.secondary}>
          {linkTitle}
        </LinkButton>
      )}
      <div className="flex flex-col gap-5">{children}</div>
    </section>
  );
}
