import SingleQuestion from "./SingleQuestion";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";
import faqData from "./faqData";

export default function FAQ() {
  return (
    <section className="mt-[50px] p-6 bg-absolute-white rounded-xl">
      <Typography className="mb-1" color={typographyColors.grey15} variant={typographyVariants.h3}>
        Frequently Asked Questions
      </Typography>
      <Typography className="mb-10" color={typographyColors.grey20} variant={typographyVariants.body}>
        Still you have any questions? Contact our Team via&nbsp;
        <a href="mailto:support@skillbridge.com">
          <Typography variant={typographyVariants.body} htmlTag="span" color={typographyColors.grey20}>
            support@skillbridge.com
          </Typography>
        </a>
      </Typography>
      <div className="flex flex-col gap-5">
        {faqData.map((faq) => (
          <SingleQuestion faq={faq} key={faq.question} />
        ))}
      </div>
    </section>
  );
}
