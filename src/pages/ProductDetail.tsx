
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Sun, Wind, Shield, Palette } from 'lucide-react';
import { getProductById, getCategoryById } from '../data/products';
import { Badge } from '@/components/ui/badge';

const ProductDetail = () => {
  const { categoryId, productId } = useParams<{ categoryId: string; productId: string }>();
  const product = getProductById(productId || '', categoryId || '');
  const category = getCategoryById(categoryId || '');
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product || !category) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-medium mb-4">Prodotto non trovato</h2>
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

  // Determine the back link - special case for tende-a-bracci
  const getBackLink = () => {
    if (categoryId === 'bioclimatiche') {
      return '/prodotti';
    }
    return `/prodotti/${categoryId}`;
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to={getBackLink()}
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            {categoryId === 'bioclimatiche' ? 'Torna alle categorie' : `Torna a ${category.title}`}
          </Link>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <div className="order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Badge variant="outline" className="mb-3">
                  {category.title}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-display font-medium mb-4">
                  {product.title}
                </h1>
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-lg font-medium mb-3 flex items-center">
                  <Sun className="mr-2 h-5 w-5 text-primary" />
                  Caratteristiche principali
                </h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {product.materials && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-6"
                >
                  <h2 className="text-lg font-medium mb-3 flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-primary" />
                    Materiali disponibili
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((material) => (
                      <Badge key={material} variant="secondary">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}

              {product.colors && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="text-lg font-medium mb-3 flex items-center">
                    <Palette className="mr-2 h-5 w-5 text-primary" />
                    Colori disponibili
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <Badge key={color} variant="outline">
                        {color}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <div className="order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="rounded-lg overflow-hidden bg-muted/10 border h-[300px] sm:h-[400px]"
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {product.images.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex mt-4 space-x-3 overflow-x-auto pb-2"
                >
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer rounded-md overflow-hidden border-2 transition-all w-20 h-20 flex-shrink-0
                        ${selectedImage === index ? 'border-primary' : 'border-transparent'}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={image}
                        alt={`${product.title} - immagine ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-secondary rounded-lg p-8 md:p-10 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-display font-medium mb-4">
                Interessato a questo prodotto?
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Contattaci oggi stesso per un preventivo personalizzato o per richiedere informazioni specifiche su questo modello.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/contatti"
                className="inline-flex px-6 py-3 bg-primary text-white rounded-md font-medium transition-all hover:bg-primary/90"
              >
                Richiedi informazioni
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
