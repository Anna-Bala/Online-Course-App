import { LocationIcon, MailIcon, PhoneIcon } from "@/icons";
import { skillbridgeEmails, skillbridgeGoogleMapsUrl, skillbridgePhoneNumbers } from "@/app/constants";
import { socialLinks } from "@/app/constants";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

type RenderContactItemArguments = { href: string; Icon: ({ fill, size }: { fill?: string; size: number }) => JSX.Element; text: string };

export default function Contact() {
  function renderContactItem({ href, Icon, text }: RenderContactItemArguments) {
    return (
      <div className="flex flex-col items-center p-[30px] gap-[14px] bg-white-99 border border-white-95 rounded-md">
        <a className="p-3 w-max bg-white-97 border border-white-95 rounded-md" href={href} target="_blank">
          <Icon size={20} />
        </a>
        <Typography className="text-center" color={typographyColors.grey30} href={href} htmlTag="a" variant={typographyVariants.body}>
          {text}
        </Typography>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center px-4 lg:px-5 2xl:px-[30px]">
      <PageHeader
        title="Contact Us"
        titleClassName="lg:mt-[55px]"
        info="Welcome to SkillBridge's Contact page! Whether you have questions, need support, or want to discuss partnership opportunities, we're here to help. Reach out using the contact options below, and we'll assist you promptly. Your journey with SkillBridge matters to us, and we're dedicated to supporting your professional development. Let's connect!"
      />
      <div className="flex flex-col gap-[50px] w-full lg:px-[60px] 2xl:px-[142px] lg:gap-[80px] 2xl:gap-[100px]">
        <div className="flex flex-col bg-absolute-white rounded-xl lg:flex-row lg:justify-between">
          <ContactForm />
          <div className="flex flex-col gap-5 p-[30px] border-t border-white-97 lg:p-0 lg:border-t-0 lg:px-[60px] lg:justify-center lg:gap-6 2xl:px-[80px] 2xl:gap-[50px]">
            {renderContactItem({ href: `mailto:${skillbridgeEmails.support}`, Icon: MailIcon, text: skillbridgeEmails.support })}
            {renderContactItem({ href: `tel:${skillbridgePhoneNumbers.support.replaceAll(/\s/g, "")}`, Icon: PhoneIcon, text: skillbridgePhoneNumbers.support })}
            {renderContactItem({
              href: skillbridgeGoogleMapsUrl,
              Icon: LocationIcon,
              text: "Somewhere in the World",
            })}

            <div className="flex flex-col items-center p-[30px] gap-[14px] bg-white-99 border border-white-95 rounded-md">
              <div className="flex flex-row gap-[10px]">
                {socialLinks.map(({ Icon, link }) => (
                  <a className="p-3 w-max bg-white-97 border border-white-95 rounded-md" href={link} key={link}>
                    <Icon size={20} />
                  </a>
                ))}
              </div>
              <Typography className="text-center" variant={typographyVariants.body} color={typographyColors.grey30}>
                Social Profiles
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
