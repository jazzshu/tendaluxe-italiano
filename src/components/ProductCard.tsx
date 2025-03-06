
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  delay?: number;
  productCount?: number;
}

const ProductCard = ({ id, title, description, image, delay = 0, productCount }: ProductCardProps) => {
  // Generate the correct link URL
  const getLinkUrl = () => {
    // Special case for "bioclimatiche" category
    if (id === 'bioclimatiche') {
      return '/prodotti/bioclimatiche/r601-pergoklima';
    }
    // Default behavior for other categories
    return `/prodotti/${id}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: delay * 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-all duration-300"
    >
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{description}</p>
        
        {productCount !== undefined && (
          <p className="text-xs text-muted-foreground mb-3">
            {productCount} {productCount === 1 ? 'prodotto disponibile' : 'prodotti disponibili'}
          </p>
        )}
        
        <Link
          to={getLinkUrl()}
          className="inline-flex items-center text-sm font-medium text-primary group-hover:underline"
        >
          Scopri di più 
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
