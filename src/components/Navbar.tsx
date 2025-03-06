
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Prodotti', path: '/prodotti' },
    { name: 'Installazioni', path: '/installazioni' },
    { name: 'Contatti', path: '/contatti' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center"
          >
            <span className="text-xl md:text-2xl font-display font-semibold tracking-tight">
              Crystal<span className="font-light">Tende</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-primary after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300
                  ${location.pathname === link.path 
                    ? 'text-primary after:scale-x-100' 
                    : 'text-muted-foreground'}
                `}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0', height: '100%' }}
      >
        <div className="container h-full flex flex-col">
          <div className="flex justify-between items-center pt-4 px-4">
            <Link 
              to="/" 
              className="flex items-center"
              onClick={toggleMenu}
            >
              <span className="text-xl font-display font-semibold tracking-tight">
                Crystal<span className="font-light">Tende</span>
              </span>
            </Link>
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-primary" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 items-center justify-center h-full">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={toggleMenu}
                className={`text-lg font-medium tracking-wide transition-colors hover:text-primary ${
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
