import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

type Props = {
  info: string;
  title: string;
  titleClassName?: string;
};

export default function PageHeader({ info, title, titleClassName = "" }: Props) {
  return (
    <header className="flex flex-col w-full gap-y-4 pb-[30px] mb-[50px] border-b border-white-90 lg:flex-row lg:px-[60px] lg:pb-10 lg:gap-x-[80px] lg:mb-[80px] 2xl:px-[132px] 2xl:pb-[50px] 2xl:gap-x-[100px] 2xl:mb-[100px]">
      <Typography className={`lg:w-1/2 ${titleClassName}`} color={typographyColors.grey15} variant={typographyVariants.h3}>
        {title}
      </Typography>
      <Typography className="lg:w-1/2" color={typographyColors.grey35} variant={typographyVariants.body}>
        {info}
      </Typography>
    </header>
  );
}
