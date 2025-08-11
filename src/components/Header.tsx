import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <h1 className="text-2xl font-serif font-bold text-gradient">WISSH</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              Cara Kerja
            </a>
            <a href="#for-couples" className="text-foreground hover:text-primary transition-colors">
              Untuk Pasangan
            </a>
            <a href="#for-guests" className="text-foreground hover:text-primary transition-colors">
              Untuk Tamu
            </a>
            <a href="#vendors" className="text-foreground hover:text-primary transition-colors">
              Vendor
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Kontak
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="btn-outline-rose">
              Masuk
            </Button>
            <Button className="btn-hero">
              Mulai Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-soft">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <a
                href="#how-it-works"
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cara Kerja
              </a>
              <a
                href="#for-couples"
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Untuk Pasangan
              </a>
              <a
                href="#for-guests"
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Untuk Tamu
              </a>
              <a
                href="#vendors"
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Vendor
              </a>
              <a
                href="#contact"
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </a>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" className="btn-outline-rose">
                  Masuk
                </Button>
                <Button className="btn-hero">
                  Mulai Sekarang
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;