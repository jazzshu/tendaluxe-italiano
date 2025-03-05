
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
        colors: ['Bianco', 'Beige', 'Grigio', 'Verde', 'Blu'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro101.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro58.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro208.jpg'
        ],
        categoryId: 'tende-da-esterno'
      },
      {
        id: 'guide-laterali',
        title: 'Guide Laterali',
        description: 'Le guide laterali sono ideali per terrazze e giardini. Offrono una copertura ampia e sono facili da utilizzare.',
        features: [
          'Estensione fino a 3 metri',
          'Regolazione dell\'inclinazione',
          'Motorizzazione opzionale',
          'Tessuti di alta qualità'
        ],
        materials: ['Alluminio', 'Acciaio inox', 'Acrilico'],
        colors: ['Bianco', 'Avorio', 'Marrone', 'Grigio', 'Blu navy'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro175.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro152.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro216.jpg'
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
    image: 'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro88.jpeg',
    products: [
      {
        id: 'piantane-anteriori',
        title: 'Piantane Anteriori',
        description: 'Le piantane anteriori permettono di regolare la quantità di luce e aria. Ideale per creare un ambiente confortevole in ogni stagione.',
        features: [
          'Lamelle orientabili',
          'Resistente a vento e neve',
          'Illuminazione LED integrata',
          'Sensori climatici'
        ],
        materials: ['Alluminio', 'Acciaio inox'],
        colors: ['Bianco', 'Grigio antracite', 'Marrone', 'Nero'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro86.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro106.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro117.jpeg'
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
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro79.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro82.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro77.jpeg'
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
        colors: ['Bianco', 'Grigio', 'Nero', 'Verde'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro90.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro138.jpg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro100.jpeg'
        ],
        categoryId: 'pergole'
      }
    ]
  },
  {
    id: 'bioclimatiche',
    title: 'Bioclimatiche',
    description: 'Soluzioni versatili che si estendono facilmente per creare ombra sul tuo terrazzo o giardino, disponibili con diversi tipi di tessuto e colorazioni.',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
    products: [
      {
        id: 'r601-pergoklima',
        title: 'R601-PERGOKLIMA',
        description: 'La tenda a bracci tradizionale è un classico per la protezione dal sole di terrazze e balconi.',
        features: [
          'Estensione fino a 3,5 metri',
          'Facilità di utilizzo',
          'Disponibile con manovella o motore',
          'Tessuti resistenti ai raggi UV'
        ],
        materials: ['Alluminio', 'Acrilico'],
        colors: ['Bianco', 'Crema', 'Grigio', 'A righe'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro87.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro85.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro82.jpeg'
        ],
        categoryId: 'tende-a-bracci'
      },
      {
        id: 'r610-pergoklima',
        title: 'R610-PERGOKLIMA',
        description: 'La tenda a bracci cassonata protegge il tessuto quando la tenda è chiusa, garantendo una maggiore durata.',
        features: [
          'Cassonetto protettivo',
          'Maggiore resistenza alle intemperie',
          'Design elegante',
          'Motorizzazione disponibile'
        ],
        materials: ['Alluminio', 'Acrilico impermeabile'],
        colors: ['Bianco', 'Avorio', 'Grigio', 'Blu'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro76.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro79.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro72.jpeg'
        ],
        categoryId: 'tende-a-bracci'
      },
      {
        id: 'r620-pergoklima',
        title: 'R620-PERGOKLIMA',
        description: 'La tenda a bracci con volant frontale offre una protezione aggiuntiva dal sole basso e un tocco estetico distintivo.',
        features: [
          'Volant decorativo',
          'Protezione dal sole basso',
          'Design personalizzabile',
          'Facile manutenzione'
        ],
        materials: ['Alluminio', 'Acrilico'],
        colors: ['Bianco', 'Verde', 'Bordeaux', 'A righe', 'Fantasia'],
        images: [
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro54.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro49.jpeg',
          'https://crystal-tende-bucket.s3.eu-central-1.amazonaws.com/lavori/lavoro31.jpeg'
        ],
        categoryId: 'tende-a-bracci'
      }
    ]
  },
  {
    id: 'tende-a-caduta',
    title: 'Tende a Caduta',
    description: 'Perfette per proteggere da sole e sguardi indiscreti, queste tende verticali sono ideali per balconi, finestre e verande.',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    products: [
      {
        id: 'tenda-a-caduta-verticale',
        title: 'Tenda a Caduta Verticale',
        description: 'La tenda a caduta verticale è ideale per proteggere dal sole e dagli sguardi, mantenendo la vista verso l\'esterno.',
        features: [
          'Scorrimento verticale',
          'Protezione UV',
          'Visibilità verso l\'esterno',
          'Facile installazione'
        ],
        materials: ['Alluminio', 'Tessuto screen'],
        colors: ['Bianco', 'Grigio', 'Sabbia', 'Nero'],
        images: [
          'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
          'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
          'https://images.unsplash.com/photo-1466721591366-2d5fba72006d'
        ],
        categoryId: 'tende-a-caduta'
      },
      {
        id: 'tenda-veranda',
        title: 'Tenda Veranda',
        description: 'La tenda veranda è perfetta per creare uno spazio protetto dal sole ma luminoso, ideale per verande e giardini d\'inverno.',
        features: [
          'Installazione su guide',
          'Adatta a superfici inclinate',
          'Resistente al vento',
          'Motorizzazione disponibile'
        ],
        materials: ['Alluminio', 'Acrilico', 'PVC cristal'],
        colors: ['Bianco', 'Avorio', 'Grigio'],
        images: [
          'https://images.unsplash.com/photo-1466721591366-2d5fba72006d',
          'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
          'https://images.unsplash.com/photo-1493962853295-0fd70327578a'
        ],
        categoryId: 'tende-a-caduta'
      },
      {
        id: 'tenda-a-caduta-con-zip',
        title: 'Tenda a Caduta con ZIP',
        description: 'La tenda a caduta con sistema ZIP garantisce la massima tenuta al vento e una chiusura ermetica su tutti i lati.',
        features: [
          'Sistema di chiusura ZIP',
          'Resistenza al vento classe 6',
          'Tenuta all\'acqua',
          'Oscuramento totale disponibile'
        ],
        materials: ['Alluminio rinforzato', 'Tessuti tecnici'],
        colors: ['Bianco', 'Grigio antracite', 'Avorio', 'Nero'],
        images: [
          'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
          'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
          'https://images.unsplash.com/photo-1466721591366-2d5fba72006d'
        ],
        categoryId: 'tende-a-caduta'
      }
    ]
  },
  {
    id: 'tende-ermetiche',
    title: 'Tende Ermetiche',
    description: 'Tende a chiusura totale che offrono la massima protezione da sole, pioggia e vento. Ideali per verande e spazi chiusi.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    products: [
      {
        id: 'tenda-ermetica-cristal',
        title: 'Tenda Ermetica Cristal',
        description: 'La tenda ermetica con PVC cristal trasparente permette di godere della vista esterna mantenendo protezione da vento e pioggia.',
        features: [
          'PVC cristal trasparente',
          'Chiusura ermetica',
          'Resistente agli agenti atmosferici',
          'Ideale per la stagione fredda'
        ],
        materials: ['Alluminio', 'PVC cristal'],
        colors: ['Trasparente con profili bianchi', 'Trasparente con profili grigi'],
        images: [
          'https://images.unsplash.com/photo-1472396961693-142e6e269027',
          'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
          'https://images.unsplash.com/photo-1721322800607-8c38375eef04'
        ],
        categoryId: 'tende-ermetiche'
      },
      {
        id: 'tenda-ermetica-motorizzata',
        title: 'Tenda Ermetica Motorizzata',
        description: 'La tenda ermetica motorizzata offre il massimo comfort con apertura e chiusura automatica tramite telecomando o smartphone.',
        features: [
          'Motorizzazione integrata',
          'Controllo via smartphone',
          'Sensori vento e pioggia',
          'Programmazione oraria'
        ],
        materials: ['Alluminio rinforzato', 'Tessuti tecnici impermeabili'],
        colors: ['Bianco', 'Grigio', 'Beige'],
        images: [
          'https://images.unsplash.com/photo-1466721591366-2d5fba72006d',
          'https://images.unsplash.com/photo-1472396961693-142e6e269027',
          'https://images.unsplash.com/photo-1493962853295-0fd70327578a'
        ],
        categoryId: 'tende-ermetiche'
      },
      {
        id: 'tenda-ermetica-invernale',
        title: 'Tenda Ermetica Invernale',
        description: 'La tenda ermetica invernale è progettata per proteggere dal freddo e creare uno spazio abitabile anche nei mesi invernali.',
        features: [
          'Isolamento termico',
          'Chiusura totale',
          'Protezione da pioggia e neve',
          'Materiali resistenti al gelo'
        ],
        materials: ['Alluminio con taglio termico', 'PVC isolante'],
        colors: ['Bianco', 'Grigio antracite'],
        images: [
          'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
          'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
          'https://images.unsplash.com/photo-1472396961693-142e6e269027'
        ],
        categoryId: 'tende-ermetiche'
      }
    ]
  },
  {
    id: 'tende-motorizzate',
    title: 'Tende Motorizzate',
    description: 'Soluzioni all\'avanguardia controllabili con telecomando o smartphone per il massimo del comfort e della comodità.',
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d',
    products: []
  }
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
