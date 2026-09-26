import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
