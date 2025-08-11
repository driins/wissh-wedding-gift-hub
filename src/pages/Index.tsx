import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import ForCouples from '@/components/ForCouples';
import ForGuests from '@/components/ForGuests';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <ForCouples />
      <ForGuests />
      <Footer />
    </div>
  );
};

export default Index;
