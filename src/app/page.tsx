import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesPreview from "@/components/home/ServicesPreview";
import IndustriesServed from "@/components/home/IndustriesServed";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import Approach from "@/components/Approach";
import HseSummary from "@/components/HseSummary";
import TeamGrid from "@/components/TeamGrid";
import Partners from "@/components/Partners";
import CtaSection from "@/components/CtaSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutPreview />
        <WhyChooseUs />
        <ServicesPreview />
        <IndustriesServed />
        <ProjectsPreview />
        <Approach />
        <HseSummary />

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Our Team"
              title="Leadership & Expertise"
              description="PRO-INTEQ is led by an experienced management team and supported by multidisciplinary engineering professionals across our core sectors."
            />
            <TeamGrid />
          </div>
        </section>

        <Partners />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
