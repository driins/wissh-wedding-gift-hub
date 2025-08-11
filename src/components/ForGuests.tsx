import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, CreditCard, Truck, Shield, Gift, Star } from 'lucide-react';
import mobileAppImage from '@/assets/mobile-app.jpg';

const ForGuests = () => {
  const steps = [
    {
      icon: Gift,
      title: 'Akses Wishlist',
      description: 'Buka link wishlist yang dibagikan pasangan pengantin'
    },
    {
      icon: Star,
      title: 'Pilih Hadiah',
      description: 'Lihat berbagai pilihan hadiah dan pilih yang sesuai budget'
    },
    {
      icon: CreditCard,
      title: 'Bayar Aman',
      description: 'Lakukan pembayaran dengan berbagai metode yang tersedia'
    },
    {
      icon: Truck,
      title: 'Kirim Otomatis',
      description: 'Hadiah akan dikirim langsung ke alamat pasangan pengantin'
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: 'Hemat Waktu',
      description: 'Tidak perlu bingung pilih hadiah atau keliling toko',
      color: 'text-primary'
    },
    {
      icon: Shield,
      title: 'Terpercaya',
      description: 'Pembayaran aman dengan jaminan sampai tujuan',
      color: 'text-rose-gold'
    },
    {
      icon: CreditCard,
      title: 'Fleksibel',
      description: 'Berbagai metode pembayaran sesuai preferensi',
      color: 'text-sage'
    }
  ];

  return (
    <section id="for-guests" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Untuk <span className="text-gradient">Tamu Undangan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Berikan hadiah yang benar-benar diinginkan pasangan pengantin dengan cara yang mudah dan aman
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Mobile App Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant max-w-md mx-auto">
              <img
                src={mobileAppImage}
                alt="Aplikasi mobile WISSH"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Benefits */}
            <div className="absolute -top-4 -right-4 card-elegant p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-semibold text-sm">2 Menit</div>
                  <div className="text-xs text-muted-foreground">Rata-rata waktu pembelian</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 card-elegant p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-rose-gold" />
                <div>
                  <div className="font-semibold text-sm">100% Aman</div>
                  <div className="text-xs text-muted-foreground">Garansi uang kembali</div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            <h3 className="text-3xl font-serif font-bold mb-8">
              Cara Memberikan Hadiah
            </h3>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-rose-gold flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <step.icon className="h-5 w-5 text-primary" />
                      <h4 className="font-serif font-semibold">{step.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="btn-hero">
              Coba Sekarang
            </Button>
          </div>
        </div>

        {/* Advantages */}
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="card-elegant group hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-cream mb-6 group-hover:scale-110 transition-transform">
                  <advantage.icon className={`h-8 w-8 ${advantage.color}`} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guest Testimonial */}
        <div className="mt-20">
          <Card className="card-elegant max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-rose-gold fill-current mx-1" />
                ))}
              </div>
              <blockquote className="text-xl font-serif italic mb-6">
                "Sangat membantu! Saya tidak perlu bingung mau kasih hadiah apa. Tinggal pilih dari wishlist, bayar, dan hadiah langsung sampai ke alamat mereka. Praktis banget!"
              </blockquote>
              <div>
                <div className="font-semibold">Maya Sari</div>
                <div className="text-sm text-muted-foreground">Tamu Undangan</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ForGuests;