import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Gift, Users } from 'lucide-react';
import heroImage from '@/assets/hero-wedding-couple.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-8xl text-primary">
          <Heart className="fill-current" />
        </div>
        <div className="absolute bottom-32 right-16 text-6xl text-rose-gold">
          <Gift className="fill-current" />
        </div>
        <div className="absolute top-1/2 right-10 text-4xl text-sage">
          <Users className="fill-current" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
                Wujudkan{' '}
                <span className="text-gradient">Impian</span>
                <br />
                Hadiah Pernikahan
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Platform digital terpercaya yang menghubungkan pasangan pengantin dengan tamu undangan 
                untuk memberikan hadiah pernikahan yang sempurna dari vendor pilihan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Buat Wishlist Gratis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-outline-rose">
                Lihat Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">1000+</div>
                <div className="text-sm text-muted-foreground">Pasangan Bahagia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">50+</div>
                <div className="text-sm text-muted-foreground">Vendor Partner</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">5000+</div>
                <div className="text-sm text-muted-foreground">Hadiah Terpilih</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Pasangan bahagia melihat wishlist pernikahan"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 card-elegant p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <Gift className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Sarah & Andi</div>
                  <div className="text-xs text-muted-foreground">15 hadiah dipilih</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 card-elegant p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-rose-gold fill-current" />
                <div>
                  <div className="font-semibold text-sm">99% Puas</div>
                  <div className="text-xs text-muted-foreground">Rating tamu undangan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;