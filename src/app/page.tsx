import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/residential/AboutSection";
import CoursesSection from "@/components/residential/CoursesSection";
import ResidentialSection from "@/components/residential/ResidentialSection";
import Achievements from "@/components/residential/Achievements";
import StaffSection from "@/components/residential/StaffSection";
import Testimonials from "@/components/residential/Testimonials";

export default function HomePage() {
  return (
    <>
      {/* <head>
        <title>Your Website Name</title>
        <meta name="description" content="Your website description" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head> */}
      <HeroSection />
      <ResidentialSection />
      <AboutSection />
      <CoursesSection />
      <Achievements />
      <StaffSection />
      <Testimonials />
    </>
  );
}
