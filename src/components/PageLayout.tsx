import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen pt-16 lg:pt-[4.5rem]">
        {children}
      </main>
      <Footer />
    </>
  );
}
