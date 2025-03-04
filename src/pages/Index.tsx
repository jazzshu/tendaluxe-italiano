
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Sun, Award } from 'lucide-react';
import Hero from '../components/Hero';

const Index = () => {
  const features = [
    {
      icon: <Sun className="h-8 w-8 text-primary" />,
      title: 'Protezione Solare',
      description: 'Le nostre tende offrono una perfetta protezione dai raggi UV, mantenendo la tua casa fresca e confortevole anche nelle giornate più calde.'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Materiali Premium',
      description: 'Utilizziamo solo materiali di alta qualità, resistenti agli agenti atmosferici e al passare del tempo, garantendo durabilità e prestazioni.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Design Italiano',
      description: 'Ogni nostra tenda riflette la tradizione italiana del design, combinando funzionalità ed estetica per valorizzare il tuo spazio esterno.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
              Perché Scegliere Crystal Tende
            </h2>
            <p className="text-muted-foreground">
              Dal 1980 progettiamo e installiamo tende da sole di alta qualità, combinando estetica e funzionalità per migliorare il tuo spazio esterno.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-sm border border-border/50 flex flex-col items-center text-center"
              >
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a"
                alt="Il nostro showroom"
                className="rounded-lg shadow-md object-cover w-full h-[500px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-display font-medium">
                La Nostra Storia
              </h2>
              <p className="text-muted-foreground">
                Da oltre 40 anni, Crystal Tende è sinonimo di qualità e innovazione nel settore delle tende da sole. La nostra azienda a conduzione familiare ha iniziato come piccolo laboratorio artigianale e si è evoluta fino a diventare un punto di riferimento nel settore.
              </p>
              <p className="text-muted-foreground">
                Ogni progetto viene seguito con passione dal primo contatto all'installazione finale, garantendo soluzioni su misura che soddisfano le esigenze specifiche di ogni cliente.
              </p>
              <div className="pt-4">
                <Link
                  to="/chi-siamo"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  Scopri di più sulla nostra azienda
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Trasforma il Tuo Spazio Esterno
            </h2>
            <p className="text-white/90 mb-8">
              Contattaci oggi per una consulenza gratuita e scopri come le nostre tende da sole possono migliorare il comfort e l'estetica della tua casa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contatti"
                className="px-6 py-3 bg-white text-primary rounded-md font-medium transition-all hover:bg-white/90"
              >
                Richiedi un Preventivo
              </Link>
              <Link
                to="/prodotti"
                className="px-6 py-3 bg-transparent text-white border border-white rounded-md font-medium transition-all hover:bg-white/10"
              >
                Esplora i Prodotti
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
