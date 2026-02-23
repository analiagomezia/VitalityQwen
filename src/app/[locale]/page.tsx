import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default async function Home({
    params: paramsPromise
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await paramsPromise;
    return (
        <main className="bg-gray-900 min-h-screen">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <PortfolioSection />
            <ServicesSection />
            <ContactSection />
            <Footer />
            <FloatingWhatsApp />
        </main>
    );
}
