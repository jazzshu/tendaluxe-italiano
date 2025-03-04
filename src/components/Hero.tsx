
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro79.jpeg',
      title: 'Eleganza e Funzionalità',
      subtitle: 'Tende da sole di alta qualità per il tuo spazio esterno'
    },
    {
      image: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro129.jpeg',
      title: 'Design Italiano',
      subtitle: 'Soluzioni personalizzate per ogni esigenza'
    },
    {
      image: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro77.jpeg',
      title: 'Esperienza e Innovazione',
      subtitle: 'Dal 2004 al servizio della tua casa'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out 
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-in-out transform w-full
                ${index === currentSlide 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-8'}`}
              style={{ transitionDelay: index === currentSlide ? '400ms' : '0ms' }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
                {slide.subtitle}
              </p>
            </div>
          ))}

          <div className="mt-32 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/prodotti"
              className="px-6 py-3 bg-white text-primary rounded-md font-medium transition-all hover:bg-primary hover:text-white flex items-center group"
            >
              Scopri i Prodotti
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contatti"
              className="px-6 py-3 bg-transparent text-white border border-white rounded-md font-medium transition-all hover:bg-white/10"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                ${index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/70'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
