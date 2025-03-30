
export interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  materials?: string[];
  colors?: string[];
  images: string[];
  categoryId: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'tende-da-esterno',
    title: 'Tende da Esterno',
    description: 'Le nostre tende da esterno combinano design italiano e materiali di alta qualità per offrire protezione dal sole e valorizzare il tuo spazio esterno.',
    image: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro98.jpeg',
    products: [
      {
        id: 'tenda-a-bracci',
        title: 'Tenda a Bracci Estensibili',
        description: 'Le tende a bracci estensibili sono ideali per terrazze e giardini. Offrono una copertura ampia e sono facili da utilizzare.',
        features: [
          'Resistente ai raggi UV',
          'Tessuti impermeabili',
          'Facile installazione',
          'Design elegante e moderno'
        ],
        materials: ['Alluminio', 'Acrilico', 'PVC'],
        colors: ['A scelta da campionario'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro101.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/tende_a_bracci1.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/tende_a_bracci2.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/tende_a_bracci3.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/tende_a_bracci4.jpg'
        ],
        categoryId: 'tende-da-esterno'
      },
      {
        id: 'tende-a-caduta',
        title: 'Tende a Caduta',
        description: 'Le tende a caduta sono ideali per terrazze e giardini. Offrono una copertura ampia e sono facili da utilizzare.',
        features: [
          'Regolazione dell\'inclinazione',
          'Motorizzazione opzionale',
          'Tessuti di alta qualità'
        ],
        materials: ['Alluminio', 'Acciaio inox', 'Acrilico', 'PVC'],
        colors: ['A scelta da campionario'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/tende_a_caduta1.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/tende_a_caduta2.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/tende_a_caduta3.jpg'
        ],
        categoryId: 'tende-da-esterno'
      },
      {
        id: 'tenda-a-cappottina',
        title: 'Tenda a Cappottina',
        description: 'Le tende a cappottina aggiungono un tocco di eleganza alla facciata. Perfette per negozi e ristoranti.',
        features: [
          'Design elegante',
          'Protezione ottimale',
          'Personalizzabile con logo',
          'Resistente alle intemperie'
        ],
        materials: ['Alluminio', 'Acrilico impermeabile'],
        colors: ['Rosso', 'Verde', 'Blu', 'Arancione', 'A righe'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro200.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro23.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro142.jpg'
        ],
        categoryId: 'tende-da-esterno'
      }
    ]
  },
  {
    id: 'pergole',
    title: 'Pergole',
    description: 'Strutture eleganti e resistenti che creano un\'area ombreggiata ideale per pranzi all\'aperto, relax e intrattenimento nel tuo giardino o terrazzo.',
    image: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro77.jpeg',
    products: [
      {
        id: 'piantane-anteriori',
        title: 'Piantane Anteriori',
        description: 'Le piantane anteriori permettono di regolare la quantità di luce e aria. Ideale per creare un ambiente confortevole in ogni stagione.',
        features: [
          'Telo in PVC triplo strato',
          'Resistente al vento',
          'Illuminazione LED integrata (opzionale)',
          'Sensori climatici'
        ],
        materials: ['Alluminio', 'Acciaio inox'],
        colors: ['Bianco', 'Grigio', 'Bronzo', 'Perla'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/piantane_anteriori2.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/piantane_anteriori1.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/piantane_anteriori3.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/piantane_anteriori5.jpg'
        ],
        categoryId: 'pergole'
      },
      {
        id: 'piane-e-autoportanti',
        title: 'Piane e Autoportanti',
        description: 'Le pergole piane e autoportanti addossata si installa direttamente sulla facciata dell\'edificio, ottimizzando lo spazio disponibile.',
        features: [
          'Installazione a parete',
          'Design compatto',
          'Resistente alle intemperie',
          'Copertura impermeabile'
        ],
        materials: ['Alluminio', 'PVC', 'Policarbonato'],
        colors: ['Bianco', 'Avorio', 'Grigio', 'Effetto legno'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/piane_autoportanti1.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/piane_autoportanti2.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/piane_autoportanti6.jpeg'
        ],
        categoryId: 'pergole'
      },
      {
        id: 'senza-piantane',
        title: 'Pergola Senza Piantane',
        description: 'La pergola senza piantane è una struttura indipendente che può essere posizionata ovunque nel giardino o terrazzo.',
        features: [
          'Struttura indipendente',
          'Flessibilità di posizionamento',
          'Possibilità di chiusure laterali',
          'Resistente a vento forte'
        ],
        materials: ['Alluminio rinforzato', 'Acciaio'],
        colors: ['Bianco', 'Grigio', 'Nero', 'Marrone'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/senza_piantane1.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/senza_piantane2.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/senza_piantane3.jpg'
        ],
        categoryId: 'pergole'
      }
    ]
  },
  {
    id: 'bioclimatiche',
    title: 'Bioclimatiche',
    description: 'Soluzioni versatili che si estendono facilmente per creare ombra sul tuo terrazzo o giardino, disponibili con diversi tipi di tessuto e colorazioni.',
    image: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro87.jpeg',
    products: [
      {
        id: 'alluminio',
        title: 'Alluminio',
        description: 'Le bioclimatiche sono un classico per la protezione dal sole di terrazze e balconi.',
        features: [
          'Interamente in alluminio',
          'Facilità di utilizzo',
          'Comando a motore',
          'Tessuti resistenti ai raggi UV',
          'Modulo Max da 6m x 8m'
        ],
        materials: ['Alluminio'],
        colors: ['Bianco', 'Crema', 'Grigio', 'A righe'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro87.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/lavoro85.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/lavoro65.jpeg'
        ],
        categoryId: 'alluminio'
      },
      {
        id: 'acrilico',
        title: 'Acrilico',
        description: 'La tenda a bracci cassonata protegge il tessuto quando la tenda è chiusa, garantendo una maggiore durata.',
        features: [
          'Cassonetto protettivo',
          'Maggiore resistenza alle intemperie',
          'Design elegante',
          'Motorizzazione disponibile'
        ],
        materials: ['Acrilico impermeabile'],
        colors: ['Bianco', 'Avorio', 'Grigio', 'Blu'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/lavoro65.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/lavoro176.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/lavoro129.jpeg'
        ],
        categoryId: 'tende-a-bracci'
      },
      {
        id: 'personalizzato',
        title: 'Personalizzato',
        description: 'La tenda a bracci con volant frontale offre una protezione aggiuntiva dal sole basso e un tocco estetico distintivo.',
        features: [
          'Volant decorativo',
          'Protezione dal sole basso',
          'Design personalizzabile',
          'Facile manutenzione'
        ],
        materials: ['Personalizzato'],
        colors: ['Bianco', 'Verde', 'Bordeaux', 'A righe', 'Fantasia'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/lavoro111.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro49.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/lavoro65.jpeg'
        ],
        categoryId: 'tende-a-bracci'
      }
    ]
  },
  {
    id: 'tende-ermetiche',
    title: 'Tende Ermetiche',
    description: 'Perfette per proteggere da sole e sguardi indiscreti, queste tende verticali sono ideali per balconi, finestre e verande.',
    image: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/texout1.jpg',
    products: [
      {
        id: 'tenda-ermitiche-cristal',
        title: 'Tenda Ermetica Cristal',
        description: 'La tenda ermetica con PVC cristal trasparente permette di godere della vista esterna mantenendo protezione da vento e pioggia.',
        features: [
          'PVC cristal trasparente',
          'Chiusura ermetica',
          'Resistente agli agenti atmosferici',
          'Ideale per la stagione fredda'
        ],
        colors: ['Cristal Trasparente', 'Cristal Fume\' Grigio Texout', 'Cristal Fume\' Bronze'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/ermetica1.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/texout1.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/texout2.jpg'
        ],
        categoryId: 'tende-ermetiche'
      },
      {
        id: 'doppie-tende',
        title: 'Doppie Tende',
        description: 'Le Doppie Tende hanno un cassonetto dotato di doppio tubo avvolgitore capace di contenere due tipologie di tessuto: Cristal/Acrilico, Cristal/Soltis ecc.',
        features: [
          'Motorizzazione integrata',
          'Controllo via smartphone',
          'Sensori vento e pioggia',
        ],
        materials: ['Alluminio rinforzato', 'Tessuti tecnici impermeabili'],
        colors: ['A scelta da campionario'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/zip1.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/zip2.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/zip3.jpg'
        ],
        categoryId: 'tende-ermetiche'
      }
    ]
  },
  {
    id: 'vetrate',
    title: 'Vetrate',
    description: 'Vetrate che offrono la massima protezione da sole, pioggia e vento. Ideali per verande e spazi chiusi.',
    image: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/vetratescorrevoli2.jpg',
    products: [
      {
        id: 'vetrate-scorrevoli',
        title: 'Vetrate Scorrevoli',
        description: 'Le vetrate scorrevoli in vetro temperato da 10mm',
        features: [
          'Larghezza singola anta min 600mm/Max 1300mm, Altezza Max 3000mm ',
          'Scorrimento su tre tipologie di guide inferiori in alluminio verniciato in polvere',
          'Portata 130kg',
          'Isolamento termico e acustico (g 0,81 e Rw 33dB)'
        ],
        materials: ['Alluminio', 'PVC cristal'],
        colors: ['Trasparente con profili bianchi', 'Trasparente con profili grigi'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/vetratescorrevoli1.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/vetratescorrevoli2.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/vetratescorrevoli3.jpg'
        ],
        categoryId: 'vetrate'
      },
      {
        id: 'vetrate-impacchettabili',
        title: 'Vetrate Impacchettabili',
        description: 'Le vetrate impacchettabili sono in vetro temperato da 10mm',
        features: [
          'Larghezza singola anta min 600mm Max 1300mm, Altezza Max 3000m',
          'Scorrimento su due tipologie di guide inferiori in alluminio verniciato a polvere',
          'Ribassata antinciampo o a incasso',
          'Portata 50kg ad anta',
          'Isolamento termico e acustico (g 0,81 e Rw 33dB)'
        ],
        materials: ['Alluminio rinforzato', 'Tessuti tecnici impermeabili'],
        colors: ['Bianco', 'Grigio', 'Beige'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/impacchettabile2.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/impacchettabile1.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/impacchettabile3.jpg'
        ],
        categoryId: 'vetrate'
      },
    ]
  },
  {
    id: 'zanzariere',
    title: 'Zanzariere',
    description: 'Vetrate che offrono la massima protezione da sole, pioggia e vento. Ideali per verande e spazi chiusi.',
    image: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/zanzariera.jpg',
    products: [
      {
        id: 'suncover',
        title: 'Zanzariere Suncover',
        description: 'Le Zanzariere Suncover',
        features: [
        ],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/zanzariera2.jpg',
        ],
        categoryId: 'suncover'
      },
      {
        id: 'tende-da-interno-suncover',
        title: 'Tende da Interno',
        description: 'Le zanzariere da interno impacchettabili sono in vetro temperato da 10mm',
        features: [
        ],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/prodotti-disponibili/zanzariera3.jpg',
        ],
        categoryId: 'tende-da-interno'
      },
    ]
  },
];

export const getProductsByCategoryId = (categoryId: string): Product[] => {
  const category = productCategories.find(cat => cat.id === categoryId);
  return category ? category.products : [];
};

export const getProductById = (productId: string, categoryId: string): Product | undefined => {
  const category = productCategories.find(cat => cat.id === categoryId);
  if (!category) return undefined;
  return category.products.find(product => product.id === productId);
};

export const getCategoryById = (categoryId: string): ProductCategory | undefined => {
  return productCategories.find(cat => cat.id === categoryId);
};
