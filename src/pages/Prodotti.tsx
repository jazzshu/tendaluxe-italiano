
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';

const Prodotti = () => {
  const productCategories = [
    {
      id: 'tende-da-sole',
      title: 'Tende da Sole',
      description: 'Le nostre tende da sole combinano design italiano e materiali di alta qualità per offrire protezione dal sole e valorizzare il tuo spazio esterno.',
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d'
    },
    {
      id: 'pergole',
      title: 'Pergole',
      description: 'Strutture eleganti e resistenti che creano un\'area ombreggiata ideale per pranzi all\'aperto, relax e intrattenimento nel tuo giardino o terrazzo.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027'
    },
    {
      id: 'tende-a-bracci',
      title: 'Tende a Bracci',
      description: 'Soluzioni versatili che si estendono facilmente per creare ombra sul tuo terrazzo o giardino, disponibili con diversi tipi di tessuto e colorazioni.',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a'
    },
    {
      id: 'tende-a-caduta',
      title: 'Tende a Caduta',
      description: 'Perfette per proteggere da sole e sguardi indiscreti, queste tende verticali sono ideali per balconi, finestre e verande.',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04'
    },
    {
      id: 'tende-ermetiche',
      title: 'Tende Ermetiche',
      description: 'Tende a chiusura totale che offrono la massima protezione da sole, pioggia e vento. Ideali per verande e spazi chiusi.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027'
    },
    {
      id: 'tende-motorizzate',
      title: 'Tende Motorizzate',
      description: 'Soluzioni all\'avanguardia controllabili con telecomando o smartphone per il massimo del comfort e della comodità.',
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d'
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
            I Nostri Prodotti
          </h1>
          <p className="text-muted-foreground text-lg">
            Scopri la nostra gamma di tende da sole di alta qualità, progettate per offrire 
            comfort, protezione e stile al tuo spazio esterno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              delay={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-secondary rounded-lg p-8 md:p-10 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-display font-medium mb-4">
            Cerchi una Soluzione Personalizzata?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I nostri esperti sono a tua disposizione per aiutarti a trovare la soluzione 
            perfetta per le tue esigenze. Contattaci per una consulenza gratuita.
          </p>
          <a
            href="/contatti"
            className="inline-flex px-6 py-3 bg-primary text-white rounded-md font-medium transition-all hover:bg-primary/90"
          >
            Richiedi una Consulenza
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Prodotti;
