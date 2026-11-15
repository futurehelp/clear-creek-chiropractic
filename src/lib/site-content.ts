/**
 * Content for the Clear Creek Chiropractic landing page.
 *
 * Keeping copy, links, and image paths outside the JSX makes the page easier
 * to review and gives future content updates one predictable home.
 */

export type NavigationLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Treatment = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export type Location = {
  number: string;
  name: string;
  address: string;
  city: string;
  mapsQuery: string;
};

export type Review = {
  quote: string;
  author: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
};

export const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "#home" },
  { label: "Our story", href: "#story" },
  { label: "Treatments", href: "#treatments" },
  { label: "Patient reviews", href: "#reviews" },
  { label: "Questions", href: "https://clearcreekchiro.com/faq/", external: true },
  { label: "Locations", href: "#locations" },
  { label: "For attorneys", href: "#attorneys" },
];

export const treatments: Treatment[] = [
  {
    number: "01 / 06",
    title: "Chiropractic care",
    description: "A personalized approach to better everyday movement.",
    image: "/images/treatment-original.jpg",
  },
  {
    number: "02 / 06",
    title: "Spinal decompression",
    description: "Explore nonsurgical options for certain spinal concerns.",
    image: "/images/sports-original.jpg",
  },
  {
    number: "03 / 06",
    title: "Cupping therapy",
    description: "An additional approach to muscle comfort and relaxation.",
    image: "/images/treatment-original.jpg",
  },
  {
    number: "04 / 06",
    title: "Rehabilitation",
    description: "Care that supports mobility after injury or physical limitations.",
    image: "/images/sports-original.jpg",
  },
  {
    number: "05 / 06",
    title: "Sports injury care",
    description: "Focused support for getting back to the activities you love.",
    image: "/images/treatment-original.jpg",
  },
  {
    number: "06 / 06",
    title: "Muscle stimulation",
    description: "Learn how ESTIM may fit into a rehabilitation plan.",
    image: "/images/sports-original.jpg",
  },
];

export const locations: Location[] = [
  {
    number: "01",
    name: "League City",
    address: "624 W Main St, Suite 102",
    city: "League City, TX 77573",
    mapsQuery: "624 W Main St Suite 102 League City TX 77573",
  },
  {
    number: "02",
    name: "Sharpstown",
    address: "9100 Southwest Freeway, Suite 123",
    city: "Houston, TX 77074",
    mapsQuery: "9100 Southwest Freeway Suite 123 Houston TX 77074",
  },
  {
    number: "03",
    name: "Channelview",
    address: "15201 E Freeway Service Rd, Suite 110",
    city: "Channelview, TX 77530",
    mapsQuery: "15201 E Freeway Service Rd Suite 110 Channelview TX 77530",
  },
];

export const reviews: Review[] = [
  { quote: "Staff is always welcoming and super nice!!! I’ve found my chiropractor.", author: "Oscar Castro" },
  { quote: "Best and most consistent adjustments I have ever had.", author: "Blaine Harvey" },
  { quote: "I just had my first adjustment about four hours ago, and I have to say, I feel fantastic!", author: "Sonjay Thomas" },
  { quote: "Their professionalism and readiness to serve the community is amazing!", author: "Ashley Totten" },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Louie Robinson",
    role: "Doctor of Chiropractic, CES",
    image: "/images/dr-louie.jpg",
    imageAlt: "Dr. Louie Robinson",
  },
  {
    name: "Francisco Flores",
    role: "Managing Partner",
    image: "/images/francisco.png",
    imageAlt: "Francisco Flores",
  },
];
