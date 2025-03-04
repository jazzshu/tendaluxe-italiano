
import { motion } from 'framer-motion';
import { Award, Clock, Users, Check } from 'lucide-react';

const ChiSiamo = () => {
  const values = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: 'Qualità',
      description: 'Utilizziamo solo materiali premium e tecnologie all\'avanguardia per garantire prodotti di lunga durata.'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Puntualità',
      description: 'Rispettiamo sempre le tempistiche concordate, dalla progettazione all\'installazione finale.'
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Servizio Clienti',
      description: 'Seguiamo ogni cliente con attenzione, offrendo consulenza personalizzata e assistenza post-vendita.'
    }
  ];

  const milestones = [
    {
      year: '1980',
      title: 'La Fondazione',
      description: 'Crystal Tende nasce come piccolo laboratorio artigianale a Milano.'
    },
    {
      year: '1995',
      title: 'Espansione',
      description: 'Ampliamento dell\'attività con l\'apertura del primo showroom e l\'introduzione di nuovi prodotti.'
    },
    {
      year: '2008',
      title: 'Innovazione Tecnologica',
      description: 'Integrazione di soluzioni motorizzate e automatizzate nella nostra gamma di prodotti.'
    },
    {
      year: '2020',
      title: 'Oggi',
      description: 'Un\'azienda leader nel settore con un team di professionisti dedicati e clienti in tutta Italia.'
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
            Chi Siamo
          </h1>
          <p className="text-muted-foreground text-lg">
            Da oltre 40 anni, Crystal Tende è sinonimo di eccellenza nel settore delle tende da sole,
            combinando tradizione artigianale e innovazione tecnologica.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-display font-medium">
              La Nostra Storia
            </h2>
            <p className="text-muted-foreground">
              Crystal Tende nasce nel 1980 come piccola impresa familiare, frutto della passione e della competenza 
              del fondatore, Antonio Ricci. Da allora, l'azienda è cresciuta mantenendo sempre il suo impegno verso la 
              qualità artigianale e l'attenzione ai dettagli.
            </p>
            <p className="text-muted-foreground">
              Negli anni, abbiamo evoluto la nostra offerta integrando tecnologie all'avanguardia e ampliando 
              la gamma di prodotti, mantenendo però sempre al centro del nostro lavoro la soddisfazione del cliente 
              e la qualità delle nostre installazioni.
            </p>
            <p className="text-muted-foreground">
              Oggi, Crystal Tende è gestita dalla seconda generazione della famiglia Ricci, che porta avanti i valori 
              fondanti dell'azienda arricchendoli con una visione moderna e innovativa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a"
              alt="Il nostro team al lavoro"
              className="rounded-lg shadow-md w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-display font-medium mb-10 text-center">
            I Nostri Valori
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-border/50 flex flex-col items-center text-center"
              >
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  {value.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-display font-medium mb-10 text-center">
            La Nostra Evoluzione
          </h2>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row"
              >
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-primary text-white text-lg font-medium py-2 px-4 rounded inline-block">
                    {milestone.year}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-medium mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-medium mb-10 text-center">
            Perché Sceglierci
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Consulenza personalizzata per trovare la soluzione più adatta alle tue esigenze</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Materiali di alta qualità selezionati dai migliori fornitori</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Installazione professionale eseguita da tecnici esperti</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Assistenza post-vendita e servizio di manutenzione</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary rounded-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Vasta gamma di prodotti per soddisfare ogni esigenza</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Soluzioni personalizzabili in termini di design, colore e funzionalità</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Preventivi trasparenti senza costi nascosti</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Garanzia estesa su tutti i nostri prodotti</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChiSiamo;
