
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { productCategories } from '../data/products';

const Prodotti = () => {
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
          {productCategories.map((category, index) => (
            <ProductCard
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              image={category.image}
              delay={index}
              productCount={category.products.length}
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
