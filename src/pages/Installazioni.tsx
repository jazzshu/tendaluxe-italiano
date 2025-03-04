
import { motion } from 'framer-motion';
import InstallationGallery from '../components/InstallationGallery';

const Installazioni = () => {
  const installations = [
    {
      src: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro79.jpeg',
      alt: 'Tenda da Sole Residenziale',
      location: 'Villa Privata, Milano'
    },
    {
      src: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro106.jpeg',
      alt: 'Pergola Bioclimatica',
      location: 'Ristorante La Terrazza, Roma'
    },
    {
      src: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro109.jpeg',
      alt: 'Tenda a Bracci Estensibili',
      location: 'Appartamento Privato, Firenze'
    },
    {
      src: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro216.jpg',
      alt: 'Tenda a Caduta Verticale',
      location: 'Hotel Belvedere, Taormina'
    },
    {
      src: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro129.jpeg',
      alt: 'Tenda Ermetica',
      location: 'Bar Centrale, Napoli'
    },
    {
      src: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro132.jpeg',
      alt: 'Tenda Motorizzata',
      location: 'Villa con Piscina, Sardegna'
    },
    {
      src: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro90.jpeg',
      alt: 'Pergola Addossata',
      location: 'Agriturismo Il Casale, Toscana'
    },
    {
      src: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro198.jpg',
      alt: 'Tenda da Sole per Terrazzo',
      location: 'Attico Privato, Torino'
    },
    {
      src: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro77.jpeg',
      alt: 'Tenda a Vela',
      location: 'Stabilimento Balneare, Rimini'
    }
  ];

  const testimonials = [
    {
      quote: "Siamo estremamente soddisfatti delle tende installate da Crystal Tende. La qualità del prodotto e la professionalità del servizio sono state impeccabili.",
      author: "Marco Rossi",
      location: "Milano"
    },
    {
      quote: "L'installazione è stata rapida e pulita. Le tende hanno trasformato il nostro terrazzo in un vero e proprio spazio living aggiuntivo per la nostra casa.",
      author: "Laura Bianchi",
      location: "Roma"
    },
    {
      quote: "Un servizio eccellente dall'inizio alla fine. Il team di Crystal Tende ci ha guidato nella scelta migliore per le nostre esigenze ed il risultato è perfetto.",
      author: "Giuseppe Verdi",
      location: "Firenze"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-4">
            Le Nostre Installazioni
          </h1>
          <p className="text-muted-foreground text-lg">
            Scopri alcuni dei nostri lavori più recenti e lasciati ispirare. 
            Ogni installazione è stata realizzata su misura per soddisfare le esigenze specifiche dei nostri clienti.
          </p>
        </motion.div>

        <InstallationGallery images={installations} />

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-display font-medium mb-10 text-center">
            Cosa Dicono i Nostri Clienti
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-border/50"
              >
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary text-white rounded-lg p-8 md:p-10 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-display font-medium mb-4">
            Pronto a Trasformare il Tuo Spazio Esterno?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contattaci oggi stesso per una consulenza gratuita e scopri come possiamo aiutarti a creare
            l'ambiente esterno perfetto per la tua casa o attività.
          </p>
          <a
            href="/contatti"
            className="inline-flex px-6 py-3 bg-white text-primary rounded-md font-medium transition-all hover:bg-white/90"
          >
            Contattaci Ora
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Installazioni;
