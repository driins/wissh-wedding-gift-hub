import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Heart, Gift, Share2, BarChart3 } from 'lucide-react';
import weddingGiftsImage from '@/assets/wedding-gifts.jpg';

const ForCouples = () => {
  const benefits = [
    'Katalog lengkap dari 50+ vendor terpercaya',
    'Setup wishlist hanya dalam 5 menit',
    'Link wishlist yang dapat dibagikan ke semua tamu',
    'Notifikasi real-time setiap ada hadiah baru',
    'Dashboard untuk tracking semua hadiah',
    'Customer support 24/7'
  ];

  const features = [
    {
      icon: Heart,
      title: 'Wishlist Personal',
      description: 'Buat wishlist yang mencerminkan kepribadian dan kebutuhan Anda sebagai pasangan'
    },
    {
      icon: Gift,
      title: 'Hadiah Berkualitas',
      description: 'Pilihan hadiah premium dari brand ternama dengan garansi kualitas'
    },
    {
      icon: Share2,
      title: 'Mudah Dibagikan',
      description: 'Link wishlist dapat dibagikan melalui WhatsApp, email, atau undangan digital'
    },
    {
      icon: BarChart3,
      title: 'Analytics Detail',
      description: 'Lihat statistik lengkap wishlist dan hadiah yang telah dipilih tamu'
    }
  ];

  return (
    <section id="for-couples" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Untuk <span className="text-gradient">Pasangan Pengantin</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Wujudkan impian pernikahan Anda dengan hadiah-hadiah yang benar-benar Anda inginkan. 
                WISSH memudahkan Anda mendapatkan hadiah yang perfect dari orang-orang terkasih.
              </p>
            </div>

            {/* Benefits Checklist */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-rose-gold flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Daftar Early Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-outline-rose">
                Lihat Contoh Wishlist
              </Button>
            </div>
          </div>

          {/* Image and Features */}
          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={weddingGiftsImage}
                alt="Hadiah pernikahan berkualitas"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="card-elegant group hover:scale-105 transition-transform">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-cream mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-serif font-semibold mb-2 text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="card-elegant max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="h-5 w-5 text-rose-gold fill-current mx-1" />
                ))}
              </div>
              <blockquote className="text-xl font-serif italic mb-6">
                "WISSH membuat proses gifting pernikahan kami jadi sangat mudah. Tamu-tamu senang karena bisa pilih hadiah yang benar-benar kami butuhkan, dan kami dapat hadiah impian!"
              </blockquote>
              <div>
                <div className="font-semibold">Sarah & Andi</div>
                <div className="text-sm text-muted-foreground">Pengantin Mei 2024</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ForCouples;