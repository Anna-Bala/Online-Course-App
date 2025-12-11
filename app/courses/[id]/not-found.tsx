import LinkButton, { linkButtonVariants } from "@/components/LinkButton";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

export default function CourseDetailsNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 lg:px-5 2xl:px-[30px]">
      <div className="flex flex-col items-center gap-5 w-full lg:gap-10 2xl:gap-[50px]">
        <div>
          <Typography color={typographyColors.orange50} htmlTag="span" variant={typographyVariants.h2}>
            Sorry
          </Typography>
          <Typography color={typographyColors.grey10} htmlTag="span" variant={typographyVariants.h2}>
            ,&nbsp;we couldn&apos;t find the course
          </Typography>
        </div>
        <LinkButton className="w-max" href="/" variant={linkButtonVariants.primary}>
          Go back to home page
        </LinkButton>
      </div>
    </main>
  );
}
