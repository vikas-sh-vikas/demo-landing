"use client"
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
// useEffect(() => {
//     const fetchConfig = async () => {
//       try {
//         const response = await fetch('https://main.d22nxez2324jzp.amplifyapp.com/api/config/get', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({}),
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Fetched config:', data);
//       } catch (error) {
//         console.error('Error fetching config:', error);
//       }
//     };

//     fetchConfig();
//   }, []);
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
