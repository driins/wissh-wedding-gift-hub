import { Card, CardContent } from '@/components/ui/card';
import { Heart, Search, Gift, CreditCard, Truck, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Heart,
      title: 'Daftar & Buat Wishlist',
      description: 'Pasangan mendaftar dan membuat wishlist dari katalog vendor partner kami',
      color: 'text-primary'
    },
    {
      icon: Search,
      title: 'Pilih Hadiah Impian',
      description: 'Jelajahi ribuan produk berkualitas dari brand ternama dan vendor terpercaya',
      color: 'text-rose-gold'
    },
    {
      icon: Gift,
      title: 'Bagikan ke Tamu',
      description: 'Kirim link wishlist ke tamu undangan melalui berbagai platform komunikasi',
      color: 'text-sage'
    },
    {
      icon: CreditCard,
      title: 'Tamu Pilih & Bayar',
      description: 'Tamu memilih hadiah dan melakukan pembayaran aman melalui platform WISSH',
      color: 'text-primary'
    },
    {
      icon: Truck,
      title: 'Pengiriman Langsung',
      description: 'Vendor mengirim hadiah langsung ke alamat pasangan pengantin',
      color: 'text-rose-gold'
    },
    {
      icon: Star,
      title: 'Bahagia Selamanya',
      description: 'Pasangan menerima hadiah impian dan tamu merasa puas memberi hadiah tepat',
      color: 'text-sage'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Cara Kerja <span className="text-gradient">WISSH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proses yang mudah dan transparan untuk memberikan pengalaman gifting pernikahan yang tak terlupakan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="card-elegant group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-cream mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                
                <div className="mb-2 text-sm font-semibold text-muted-foreground">
                  Langkah {index + 1}
                </div>
                
                <h3 className="text-xl font-serif font-semibold mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-rose-gold to-sage transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-hero text-white font-bold text-xl mb-4">
                1
              </div>
              <h4 className="font-serif font-semibold mb-2">Untuk Pasangan</h4>
              <p className="text-sm text-muted-foreground">
                Buat wishlist dari katalog lengkap vendor partner
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-accent text-primary font-bold text-xl mb-4">
                2
              </div>
              <h4 className="font-serif font-semibold mb-2">Untuk Tamu</h4>
              <p className="text-sm text-muted-foreground">
                Pilih hadiah dari wishlist dan bayar dengan mudah
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose-gold text-white font-bold text-xl mb-4">
                3
              </div>
              <h4 className="font-serif font-semibold mb-2">Untuk Vendor</h4>
              <p className="text-sm text-muted-foreground">
                Jangkauan lebih luas dengan komisi yang menguntungkan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;