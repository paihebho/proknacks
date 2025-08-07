// app/about/page.tsx

import { generateMetadata } from "@/lib/metadata";
import { AboutSection } from "@/components/AboutSection";

export const metadata = generateMetadata({
  title: "About Us - Professional Home Improvement Experts",
  description:
    "Learn about Proknacks' commitment to excellence in home improvement. Our experienced team delivers quality craftsmanship and personalized service for every project.",
  keywords: [
    "about proknacks",
    "home improvement company",
    "experienced contractors",
    "quality craftsmanship",
  ],
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-50">
      <AboutSection />
    </main>
  );
}
