import type { CampsiteConfig } from "../types";

/**
 * Camping am Erlaufsee — honest, source-grounded config.
 * Quelle: camping-erlaufsee.at (raw/digest). Bildlage knapp: nur wenige
 * nachweislich platzeigene Fotos ≥ 800 px → bewusst schlanker Aufbau
 * (Hero + 3 Pillars + Breather). Camping-Grid & Galerie blenden sich ehrlich aus.
 * Preise: Quelle nennt KEINE → Richtpreise (pricesArePlaceholder), offen disclosed.
 */
const IMG = "/campsites/camping-erlaufsee";

const campingErlaufsee: CampsiteConfig = {
  name: "Camping am Erlaufsee",
  shortName: "Erlaufsee",
  slug: "camping-erlaufsee",
  ort: "St. Sebastian",
  region: "Steiermark",
  heroVariant: "center",
  brandKind: "Camping",
  see: "Erlaufsee",
  regionLong: "Mariazellerland · Steiermark · Österreich",

  claim: "Bergluft, See und Stille — 100 Meter vom Erlaufsee",
  claimEmphasis: "100 Meter vom Erlaufsee",
  emailDetail: "eure ruhige Lage nur 100 Meter vom Erlaufsee",
  intro:
    "Ein kleiner, ruhiger Platz, eingebettet in die Natur — nur 100 Meter vom Erlaufsee. Frische Gebirgsluft, belebendes Klima und das Alpenpanorama rund um Mariazell: hier kommst du zum Ausspannen und Auftanken.",

  logo: { src: `${IMG}/logo.webp`, alt: "Camping am Erlaufsee – Logo" },

  statement: {
    text: "Vom Stellplatz zum Erlaufsee sind es hundert Meter — und ringsum nichts als Berge, Wald und frische Luft.",
    emphasis: "hundert Meter",
  },

  pillars: [
    {
      title: "Baden am Erlaufsee",
      text: "Der Erlaufsee liegt 100 Meter vom Platz — Schwimmen, Fischen, Tauchen oder Surfen, und für Campinggäste gibt es am See einen Bootsverleih.",
      image: { src: `${IMG}/activity-ccaba3fbdb.webp`, alt: "Tretboot auf dem Erlaufsee vor dem Bergpanorama" },
    },
    {
      title: "Kleiner, ruhiger Naturplatz",
      text: "Typisch für den überschaubaren Platz sind die besonders frische Gebirgsluft, das belebende Klima und das malerische Alpenpanorama ringsum.",
      image: { src: `${IMG}/hero-f97a32ef57.webp`, alt: "Stellplätze mit Wohnwagen und Bus unter hohen Bäumen am Camping Erlaufsee" },
    },
    {
      title: "Alles im Zentralgebäude",
      text: "Warmwasserduschen, WC, Waschräume, Aufenthaltsraum, Stromanschlüsse, Kühlschrank und Waschmaschine — Tischtennis gibt es zum Verleih.",
      image: { src: `${IMG}/gallery-80ed264ba6.webp`, alt: "Zentralgebäude mit Büro am Campingplatz Erlaufsee" },
    },
  ],

  usps: [
    "100 Meter zum Erlaufsee",
    "Frische Gebirgsluft",
    "Bootsverleih am See",
    "Warmwasserduschen",
    "Tischtennis zum Verleih",
    "Wandern & Mountainbiken",
  ],

  trust: {
    heading: "Klein, ruhig und mitten in der Bergwelt",
    headingEmphasis: "mitten in der Bergwelt",
    intro:
      "Camping am Erlaufsee ist klein und ruhig geblieben: nur 100 Meter zum See, frische Gebirgsluft und Mariazell mit seinen Wander-, Bike- und Klettertouren direkt vor der Tür.",
  },

  awards: [],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/hero-0e8340f6d4.webp`, alt: "Der Erlaufsee mit dem Alpenpanorama des Mariazellerlandes" },
  },

  breather: {
    image: { src: `${IMG}/hero-061b4410cb.webp`, alt: "Sommerliche Bergwiese rund um den Erlaufsee" },
    line: "Frische Gebirgsluft, so weit das Auge reicht.",
  },

  camping: {
    heading: "Camping am Erlaufsee",
    intro: "Ein kleiner Platz mit allem, was ein entspannter Campingtag braucht.",
    features: [],
  },

  anreise: {
    heading: "So erreichst du den Erlaufsee",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Mariazeller Straße (B20) bis Mariazell, dann der Beschilderung Richtung St. Sebastian und Erlaufsee zur Erlaufseestraße 69 folgen.",
      },
      {
        title: "Mit der Bahn",
        text: "Mit der Mariazellerbahn bis Mariazell — vom Ort sind es nur wenige Minuten hinaus zum Erlaufsee.",
      },
      {
        title: "Öffnungszeiten",
        text: "Geöffnet von Anfang Mai bis Ende September. Check-in 15–18 Uhr, Check-out 8–11 Uhr.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Erlaufsee",
    headingEmphasis: "Erlaufsee",
    intro: "Ein paar Aufnahmen vom Platz und vom See.",
    tag: "Mai bis September",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Erlaufsee",
    headingEmphasis: "am Erlaufsee",
    intro:
      "Wähle Zeitraum und Personen — deine Anfrage geht direkt an den Campingwart, er meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website von Camping am Erlaufsee sind keine Preise angegeben, bitte bei der Buchung bestätigen.",
    highlight: {
      title: "100 Meter zum See",
      text: "Vom Stellplatz sind es nur hundert Meter bis ans Ufer des Erlaufsees.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz (Wohnwagen/Wohnmobil)", perNight: 34, perExtraGuest: 8 },
      { id: "zelt", label: "Zeltplatz", perNight: 26, perExtraGuest: 8 },
    ],
  },

  kontakt: {
    coords: { lat: 47.789326, lng: 15.280588 },
    tel: "+43 664 606 44 400",
    telHref: "tel:+4366460644400",
    mail: "office@camping-erlaufsee.at",
    adresse: "Erlaufseestraße 69 · 8630 Mariazell · Steiermark",
  },

  languages: ["DE"],

  nav: [
    { label: "Erlaufsee", href: "#top" },
    { label: "Lage & Anreise", href: "#anreise" },
    { label: "Preise & Anfrage", href: "#booking" },
  ],
};

export default campingErlaufsee;
