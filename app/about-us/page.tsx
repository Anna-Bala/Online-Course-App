import { achievements, goals } from "./aboutUsData";
import PageHeader from "@/components/PageHeader";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

type Item = {
  description: string;
  Icon: ({ fill, size }: { fill?: string; size: number }) => JSX.Element;
  title: string;
};

export default function AboutUs() {
  function renderSection({ info, items, title }: { info: string; items: Item[]; title: string }) {
    return (
      <section>
        <Typography className="!font-medium mb-[6px] !text-2xl lg:!text-3xl 2xl:!text-5xl" color={typographyColors.grey20} variant={typographyVariants.h3}>
          {title}
        </Typography>
        <Typography className="mb-[50px] lg:mb-[60px] 2xl:mb-[80px]" color={typographyColors.grey35} variant={typographyVariants.body}>
          {info}
        </Typography>
        <div className="flex flex-col w-full gap-5 lg:flex-row lg:flex-wrap 2xl:gap-[30px]">
          {items.map(({ description, Icon, title }: Item) => (
            <div className="p-[30px] bg-absolute-white rounded-[10px] lg:w-5/12 lg:flex-grow lg:p-10 2xl:p-[50px] 2xl:rounded-xl" key={title}>
              <div className="p-[14px] bg-orange-97 border border-orange-90 w-max rounded-md">
                <Icon size={28} />
              </div>
              <Typography className="mt-6 mb-[6px] lg:mb-[10px] 2xl:mt-[30px] 2xl:mb-[14px]" color={typographyColors.grey15} variant={typographyVariants.subtitle}>
                {title}
              </Typography>
              <Typography color={typographyColors.grey35} variant={typographyVariants.body}>
                {description}
              </Typography>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center px-4 lg:px-5 2xl:px-[30px]">
      <PageHeader
        title="About Skillbridge"
        titleClassName="lg:mt-[19.5px] 2xl:mt-[18px]"
        info="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
      />
      <div className="flex flex-col w-full gap-[50px] lg:px-[60px] lg:gap-[100px] 2xl:px-[132px] 2xl:gap-[177px]">
        {renderSection({
          info: "Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements",
          items: achievements,
          title: "Achievements",
        })}
        {renderSection({
          info: "At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to",
          items: goals,
          title: "Our Goals",
        })}
      </div>
    </main>
  );
}
