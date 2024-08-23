import FAQ from "@/components/faq/FAQ";
import PageHeader from "@/components/PageHeader";
import PricingPlans from "@/components/pricingPlans/PricingPlans";

export default function Pricing() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 lg:px-5 2xl:px-[30px]">
      <PageHeader
        title="Our Pricings"
        info="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
      />
      <div className="flex flex-col w-full lg:px-[60px] 2xl:px-[132px]">
        <PricingPlans />
        <FAQ />
      </div>
    </main>
  );
}
