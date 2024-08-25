import { LocationIcon, MailIcon, PhoneIcon } from "@/icons";
import { socialLinks } from "@/app/constants";
import PageHeader from "@/components/PageHeader";
import TextInput from "@/components/form/TextInput";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

export default function Contact() {
  function renderContactItem({ href, Icon, text }: { href: string; Icon: ({ fill, size }: { fill?: string; size: number }) => JSX.Element; text: string }) {
    return (
      <div className="flex flex-col items-center p-[30px] gap-[14px] bg-white-99 border border-white-95 rounded-md">
        <a className="p-3 w-max bg-white-97 border border-white-95 rounded-md" href={href}>
          <Icon size={20} />
        </a>
        <Typography className="text-center" variant={typographyVariants.body} htmlTag="a" href={href} color={typographyColors.grey30}>
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
          <form className="flex flex-col gap-5 p-[30px] lg:p-[60px] lg:flex-row lg:flex-wrap lg:gap-6 lg:border-r lg:border-white-97 2xl:lg:p-[80px] 2xl:gap-[30px]">
            <TextInput className="lg:w-5/12 lg:flex-grow" label="First Name" labelClassName="mb-3 2xl:mb-4" name="firstName" placeholder="Enter First Name" />
            <TextInput className="lg:w-5/12 lg:flex-grow" label="Last Name" labelClassName="mb-3 2xl:mb-4" name="lastName" placeholder="Enter Last Name" />
            <TextInput className="lg:w-5/12 lg:flex-grow" label="Email" labelClassName="mb-3 2xl:mb-4" name="email" placeholder="Enter your Email" type="email" />
            <TextInput className="lg:w-5/12 lg:flex-grow" label="Phone" labelClassName="mb-3 2xl:mb-4" name="phone" placeholder="Enter Phone Number" type="tel" />
            <TextInput className="lg:w-full" label="Subject" labelClassName="mb-3 2xl:mb-4" name="subject" placeholder="Enter your Subject" />
            <TextInput className="lg:w-full lg:mt-4" label="Message" labelClassName="mb-3 2xl:mb-4" name="message" placeholder="Enter your Message here..." rows={5} />
            <button className="text-absolute-white text-[14px] font-medium rounded-md bg-orange-50 hover:bg-orange-70 py-[14px] px-5 mt-[10px] lg:mx-auto 2xl:mt-5 2xl:text-[18px]" type="submit">
              Send Your Message
            </button>
          </form>
          <div className="flex flex-col gap-5 p-[30px] border-t border-white-97 lg:p-0 lg:border-t-0 lg:px-[60px] lg:justify-center lg:gap-6 2xl:px-[80px] 2xl:gap-[50px]">
            {renderContactItem({ href: "mailto:support@skillbridge.com", Icon: MailIcon, text: "support@skillbridge.com" })}
            {renderContactItem({ href: "tel:+910000000000", Icon: PhoneIcon, text: "+91 00000 00000" })}
            {renderContactItem({
              href: "https://earth.google.com/web/@54.81903745,56.24340367,-7608.18697546a,22347029.54528332d,35y,39.37498015h,0t,0r/data=OgMKATA",
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
