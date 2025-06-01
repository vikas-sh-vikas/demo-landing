// /types/index.ts

/** 
 * 1) AccordionItem is used by both `features.accordion` 
 *    and `customers.accordion`. 
 */
type AccordionItem = {
  title: string;
  contentTitle: string;
  contentBody: string;
};

/** 
 * 2) TestimonialItem is used by `customers.tesimonials`. 
 */
type TestimonialItem = {
  quote: string;
  feedback: string;
  author: string;
};

/** 
 * 3) PricingCard represents each item in `pricing.pricing-card`. 
 */
type PricingCard = {
  title: string;
  "sub-title": string;
  pointers: string[];
};
