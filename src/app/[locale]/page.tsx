import BusinessSolution from "@/components/UI/business-solution/business-solution";
import CardDesign from "@/components/UI/card-design/card-design";
import ContactUs from "@/components/UI/contact-us/contact-us";
import Customers from "@/components/UI/customers/customers";
import Feature from "@/components/UI/feature/feature";
import HomeBanner from "@/components/UI/home-banner/home-beanner";
import Invitation from "@/components/UI/invitation/invitation";
import Pricing from "@/components/UI/pricing/pricing";
import PurchaseBanner from "@/components/UI/purchase-banner/purchase-banner";
export default function Home() {
  return (
    <div>
      <HomeBanner />
      <Invitation />
      <CardDesign />
      <Feature />
      <PurchaseBanner />
      <Customers />
      <Pricing />
      <BusinessSolution />
      <ContactUs />
    </div>
  );
}
