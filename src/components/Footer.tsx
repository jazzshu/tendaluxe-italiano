
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-12 pb-8 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="space-y-4">
            <h3 className="text-lg font-display font-medium tracking-tight">
              Crystal<span className="font-light">Tende</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Dal 2004 progettiamo e installiamo tende da sole di alta qualità, combinando estetica e funzionalità per migliorare il tuo spazio esterno.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-primary" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-medium">Link Rapidi</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/chi-siamo" className="text-sm text-muted-foreground hover:text-primary transition-colors">Chi Siamo</Link>
              <Link to="/prodotti" className="text-sm text-muted-foreground hover:text-primary transition-colors">Prodotti</Link>
              <Link to="/installazioni" className="text-sm text-muted-foreground hover:text-primary transition-colors">Installazioni</Link>
              <Link to="/contatti" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contatti</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-medium">Contatti</h3>
            <div className="space-y-3">
              <a href="tel:+390123456789" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 mr-2 text-primary" /> +39 348 055 2778
              </a>
              <a href="mailto:info@crystaltende.com" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4 mr-2 text-primary" /> info@crystaltende.com
              </a>
              <div className="flex items-start text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" /> 
                <span>Via Calvart 123, 40010 Bologna BO, Italia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-muted/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CrystalTende. Tutti i diritti riservati.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Termini di Servizio</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
