
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';



const Contatti = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Update form data on input change
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked: value
    }));
  }

  // Validate form fields
  useEffect(() => {
    const isValid = 
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.subject.trim() !== '' &&
      formData.message.trim() !== '' &&
      formData.privacy;

      setIsButtonDisabled(!isValid);
  }, [formData]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const API_GATEWAY = "https://smv4u297s3.execute-api.eu-central-1.amazonaws.com/send-email"
  
    const formData = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      email: (document.getElementById("email") as HTMLInputElement).value,
      phone: (document.getElementById("phone") as HTMLInputElement).value,
      subject: (document.getElementById("subject") as HTMLInputElement).value,
      message: (document.getElementById("message") as HTMLInputElement).value,
    }
  
    try {
      const response = await fetch(API_GATEWAY, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message || "Email inviata con successo!")
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        privacy: false
      });
    } catch (error) {
      alert("Errore nell'invio della mail");
    }
  }


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
                  <p className="text-muted-foreground">+39 348 055 2778</p>
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
                  href="https://www.instagram.com/crystal_tende/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 text-primary" />
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

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Nome e Cognome</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
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
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Oggetto</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Messaggio</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  Acconsento al trattamento dei miei dati personali in conformità con la Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`px-6 py-3 bg-primary text-white rounded-md font-medium transition-all w-full ${
                  isButtonDisabled 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-primary/90'
                }`}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.871630348982!2d11.36270397702438!3d44.59599247107303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fcd76a6ed40bf%3A0x8113bc0aea1aa02a!2sVia%20Bergonzoni%20G.%2C%204%2C%2040050%20Funo%20BO%2C%20Italia!5e1!3m2!1sit!2sch!4v1776012392121!5m2!1sit!2sch"
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
