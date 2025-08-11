import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-gold fill-current" />
              <h3 className="text-2xl font-serif font-bold">WISSH</h3>
            </div>
            <p className="text-background/80 leading-relaxed">
              Platform digital terpercaya untuk gifting pernikahan yang menghubungkan pasangan pengantin 
              dengan tamu undangan untuk hadiah yang sempurna.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-background/60 hover:text-rose-gold hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/60 hover:text-rose-gold hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/60 hover:text-rose-gold hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Menu Utama</h4>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-background/80 hover:text-rose-gold transition-colors">
                  Cara Kerja
                </a>
              </li>
              <li>
                <a href="#for-couples" className="text-background/80 hover:text-rose-gold transition-colors">
                  Untuk Pasangan
                </a>
              </li>
              <li>
                <a href="#for-guests" className="text-background/80 hover:text-rose-gold transition-colors">
                  Untuk Tamu
                </a>
              </li>
              <li>
                <a href="#vendors" className="text-background/80 hover:text-rose-gold transition-colors">
                  Vendor Partner
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Bantuan</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/80 hover:text-rose-gold transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-rose-gold transition-colors">
                  Panduan Penggunaan
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-rose-gold transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-rose-gold transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="text-lg font-serif font-semibold mb-6">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-rose-gold" />
                <span className="text-background/80">hello@wissh.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-rose-gold" />
                <span className="text-background/80">+62 812-3456-7890</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-rose-gold mt-1 flex-shrink-0" />
                <span className="text-background/80">
                  Jakarta Selatan, DKI Jakarta, Indonesia
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">Jam Operasional</h5>
              <p className="text-sm text-background/80">
                Senin - Jumat: 09:00 - 18:00<br />
                Sabtu: 09:00 - 15:00<br />
                Minggu: Libur
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 WISSH. Semua hak cipta dilindungi.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-background/60">Powered by</span>
              <span className="text-rose-gold font-semibold">WISSH Technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;