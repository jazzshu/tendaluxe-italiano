
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-medium mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-display mb-4">Pagina Non Trovata</h2>
          <p className="text-muted-foreground mb-8">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md font-medium transition-all hover:bg-primary/90"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna alla Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
