import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

type Props = {
  benefit: {
    id: string;
    description: string;
    title: string;
  };
  index: number;
};

export default function Benefit({ benefit, index }: Props) {
  const { id, title, description } = benefit;

  return (
    <div className="p-[30px] bg-absolute-white rounded-[10px] lg:w-[30%] lg:flex-grow" key={id}>
      <Typography className="text-right !font-bold !text-[50px] !leading-9 mb-[30px] 2xl:!text-[80px] 2xl:!leading-[60px]" color={typographyColors.grey15} variant={typographyVariants.body}>
        {`0${++index}`}
      </Typography>
      <Typography className="mb-[10px]" color={typographyColors.grey15} variant={typographyVariants.subtitle}>
        {title}
      </Typography>
      <Typography color={typographyColors.grey30} variant={typographyVariants.body}>
        {description}
      </Typography>
    </div>
  );
}
