import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Bell, Star, Users, Zap, Gift } from 'lucide-react';

const EarlyAccess = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Akses Pertama',
      description: 'Jadilah yang pertama mencoba semua fitur WISSH'
    },
    {
      icon: Star,
      title: 'Diskon 50%',
      description: 'Potongan harga khusus untuk setup wishlist pertama'
    },
    {
      icon: Gift,
      title: 'Bonus Eksklusif',
      description: 'Hadiah spesial untuk early adopters'
    },
    {
      icon: Users,
      title: 'Komunitas VIP',
      description: 'Bergabung dengan komunitas eksklusif pengguna awal'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-rose-gold/5 to-sage/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-rose-gold text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Bell className="h-4 w-4" />
              <span>LAUNCHING SOON</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Tertarik Mencoba <span className="text-gradient">WISSH</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Daftarkan diri Anda untuk mendapatkan akses awal ke platform WISSH dan nikmati 
              berbagai keuntungan eksklusif sebagai pengguna pertama.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-elegant group hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-rose-gold text-white mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="card-elegant max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Bergabunglah dengan Daftar Tunggu
              </h3>
              <p className="text-muted-foreground mb-6">
                Jadilah bagian dari revolusi digital wedding gifting di Indonesia. 
                Dapatkan notifikasi pertama saat WISSH resmi diluncurkan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero group px-8">
                  Daftar Sekarang
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="btn-outline-rose">
                  Pelajari Lebih Lanjut
                </Button>
              </div>

              {/* Social Proof */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>500+ sudah mendaftar</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-rose-gold fill-current" />
                    <span>Early access terbatas</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Urgency */}
          <div className="mt-8">
            <p className="text-sm text-muted-foreground">
              ⏰ Pendaftaran early access ditutup dalam <span className="font-semibold text-primary">7 hari</span> lagi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;