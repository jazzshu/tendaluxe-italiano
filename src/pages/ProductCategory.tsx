
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getCategoryById, getProductsByCategoryId } from '../data/products';
import { Badge } from '@/components/ui/badge';

const ProductCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getCategoryById(categoryId || '');
  const products = getProductsByCategoryId(categoryId || '');

  if (!category) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-medium mb-4">Categoria non trovata</h2>
          <Link
            to="/prodotti"
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna ai prodotti
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/prodotti"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Torna alle categorie
          </Link>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl md:text-4xl font-display font-medium mb-4"
              >
                {category.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-muted-foreground mb-6"
              >
                {category.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <Badge variant="outline" className="mb-4">
                  {products.length} {products.length === 1 ? 'prodotto disponibile' : 'prodotti disponibili'}
                </Badge>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="rounded-lg overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {products.length > 0 ? (
          <>
            <h2 className="text-2xl font-display font-medium mb-8">Tutti i nostri modelli</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-all duration-300"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-medium mb-2">{product.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                    <Link
                      to={`/prodotti/${category.id}/${product.id}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Scopri di più
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-muted/30 rounded-lg p-8 text-center"
          >
            <h2 className="text-xl font-medium mb-2">Prossimamente</h2>
            <p className="text-muted-foreground mb-6">
              Stiamo preparando nuovi prodotti per questa categoria. 
              Contattaci per informazioni personalizzate.
            </p>
            <Link
              to="/contatti"
              className="inline-flex px-4 py-2 bg-primary text-white rounded-md font-medium"
            >
              Contattaci
            </Link>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-secondary rounded-lg p-8 md:p-10 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-display font-medium mb-4">
            Hai bisogno di assistenza?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I nostri esperti sono a tua disposizione per aiutarti a scegliere la soluzione 
            più adatta alle tue esigenze.
          </p>
          <Link
            to="/contatti"
            className="inline-flex px-6 py-3 bg-primary text-white rounded-md font-medium transition-all hover:bg-primary/90"
          >
            Contattaci ora
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCategory;
