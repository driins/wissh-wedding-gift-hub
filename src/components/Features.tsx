import { Card, CardContent } from '@/components/ui/card';
import { Shield, Smartphone, HeartHandshake, TrendingUp, Users, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Pembayaran Aman',
      description: 'Transaksi terlindungi dengan enkripsi tingkat bank dan jaminan uang kembali',
      gradient: 'from-primary to-rose-gold'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Akses mudah dari smartphone untuk pengalaman yang optimal di mana saja',
      gradient: 'from-rose-gold to-sage'
    },
    {
      icon: HeartHandshake,
      title: 'Vendor Terpercaya',
      description: 'Partnership dengan brand ternama dan vendor berkualitas tinggi',
      gradient: 'from-sage to-primary'
    },
    {
      icon: TrendingUp,
      title: 'Analitik Lengkap',
      description: 'Dashboard komprehensif untuk melacak wishlist dan hadiah yang diterima',
      gradient: 'from-primary to-blush'
    },
    {
      icon: Users,
      title: 'Komunitas Aktif',
      description: 'Bergabung dengan ribuan pasangan yang telah merasakan pengalaman WISSH',
      gradient: 'from-blush to-rose-gold'
    },
    {
      icon: Zap,
      title: 'Proses Instan',
      description: 'Setup wishlist dalam hitungan menit dengan panduan step-by-step',
      gradient: 'from-rose-gold to-primary'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Mengapa Memilih <span className="text-gradient">WISSH</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Platform yang dirancang khusus untuk memberikan pengalaman gifting pernikahan yang sempurna
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-elegant group hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-serif font-semibold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-serif font-semibold mb-8">Dipercaya Oleh</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-lg font-semibold">Brand A</div>
            <div className="text-lg font-semibold">Brand B</div>
            <div className="text-lg font-semibold">Brand C</div>
            <div className="text-lg font-semibold">Brand D</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;