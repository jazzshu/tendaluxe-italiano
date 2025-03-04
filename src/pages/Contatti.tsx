
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contatti = () => {
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
            Contattaci
          </h1>
          <p className="text-muted-foreground text-lg">
            Siamo a tua disposizione per qualsiasi informazione o per richiedere un preventivo gratuito.
            Non esitare a contattarci!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-display font-medium mb-6">
              Informazioni di Contatto
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Telefono</h3>
                  <p className="text-muted-foreground">+39 012 345 6789</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">info@crystaltende.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Indirizzo</h3>
                  <p className="text-muted-foreground">Via Roma 123, 20100 Milano, Italia</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Orari di Apertura</h3>
                  <p className="text-muted-foreground">Lunedì - Venerdì: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Sabato: 9:00 - 12:30</p>
                  <p className="text-muted-foreground">Domenica: Chiuso</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-medium mb-4">Seguici sui Social</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-2xl font-display font-medium mb-6">
              Scrivici
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Nome e Cognome</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Telefono</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Oggetto</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Messaggio</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 mr-2"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  Acconsento al trattamento dei miei dati personali in conformità con la Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-md font-medium transition-all hover:bg-primary/90 w-full"
              >
                Invia Messaggio
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl font-display font-medium mb-6 text-center">
            Dove Siamo
          </h2>
          <div className="h-[400px] rounded-lg overflow-hidden border border-border">
            <iframe
              title="Mappa della nostra sede"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.228861864976!2d9.186383715616437!3d45.46432127910077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a3921dc0c1%3A0xb3f1a90ffda91da9!2sVia%20Roma%2C%20Milano%20MI!5e0!3m2!1sit!2sit!4v1621505721846!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contatti;
