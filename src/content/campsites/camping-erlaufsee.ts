import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-erlaufsee";

const campingErlaufsee: CampsiteConfig = {
  name: "Camping am Erlaufsee",
  shortName: "Erlaufsee",
  slug: "camping-erlaufsee",
  ort: "St. Sebastian bei Mariazell",
  region: "Steiermark",
  brandKind: "Camping",
  see: "Erlaufsee",
  regionLong: "Mariazellerland · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Wald, Bergluft und der Erlaufsee, 100 Meter weiter",
  claimEmphasis: "der Erlaufsee",
  emailDetail: "die frische Gebirgsluft direkt am Erlaufsee",
  intro:
    "Ein kleiner, ruhiger Campingplatz, eingebettet in den Wald und nur 100 Meter vom Erlaufsee entfernt — mit frischer Gebirgsluft, klarem Bergsee und dem Wallfahrtsort Mariazell gleich um die Ecke.",

  logo: { src: `${IMG}/gallery-eb86a2dc71.webp`, alt: "Camping am Erlaufsee Logo" },

  statement: {
    text: "Hundert Meter trennen dein Vorzelt vom Ufer des Erlaufsees — den Rest macht die Bergluft.",
    emphasis: "Hundert Meter",
  },

  pillars: [
    {
      title: "Der Erlaufsee, 100 Meter weiter",
      text: "Baden, Schwimmen, Fischen, Tauchen oder Surfen — und am Ufer wartet der Bootsverleih für eine Runde übers Wasser.",
      image: { src: `${IMG}/activity-ccaba3fbdb.webp`, alt: "Tretboot-Fahrt auf dem Erlaufsee" },
    },
    {
      title: "Stille unter alten Bäumen",
      text: "Ein kleiner, ruhiger Platz, eingebettet in den Wald — viel Schatten, viel Raum und Zeit zum Auftanken.",
      image: { src: `${IMG}/hero-f97a32ef57.webp`, alt: "Stellplätze unter hohen Bäumen am Camping Erlaufsee" },
    },
    {
      title: "Frische Gebirgsluft",
      text: "Eingebettet in die Natur rund um Mariazell — belebendes Klima, Bergwiesen und das Alpenpanorama vor der Tür.",
      image: { src: `${IMG}/hero-061b4410cb.webp`, alt: "Blühende Bergwiese rund um den Erlaufsee" },
    },
  ],

  usps: [
    "100 m zum Erlaufsee",
    "Warmwasserduschen",
    "Bootsverleih am See",
    "Strom am Stellplatz",
    "Frische Gebirgsluft",
  ],

  trust: {
    heading: "Warum es am Erlaufsee so ruhig bleibt",
    headingEmphasis: "so ruhig",
    intro:
      "Ein überschaubarer Platz für alle, die echte Ruhe suchen: frische Bergluft, klares Wasser und kurze Wege. Vom Stellplatz zum See sind es nur 100 Meter, in den Markt Mariazell wenige Minuten.",
  },

  awards: [],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/hero-0e8340f6d4.webp`, alt: "Der Erlaufsee mit Alpenpanorama bei Mariazell" },
  },

  camping: {
    heading: "Der Platz und sein Zentralgebäude",
    intro:
      "Ein kleiner Naturcampingplatz mit allem Nötigen: ebene Stellplätze mit Strom und ein Zentralgebäude mit Warmwasserduschen, Waschräumen, Aufenthaltsraum, Kühlschrank und Waschmaschine.",
    features: [
      {
        title: "Stellplätze im Grünen",
        text: "Ebene, schattige Plätze unter alten Bäumen, mit Stromanschluss — für Wohnwagen, Wohnmobil und Zelt.",
        image: { src: `${IMG}/gallery-3fc153ac24.webp`, alt: "Schattige Stellplätze unter Bäumen am Camping Erlaufsee" },
      },
      {
        title: "Das Zentralgebäude",
        text: "Warmwasserduschen, Waschräume, WC, Aufenthaltsraum, Kühlschrank, Waschmaschine und Tischtennis — alles zentral am Platz.",
        image: { src: `${IMG}/gallery-80ed264ba6.webp`, alt: "Zentralgebäude mit Büro am Camping Erlaufsee" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Erlaufsee",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Mariazeller Straße (B20) nach Mariazell, dann Richtung St. Sebastian zum Erlaufsee — Erlaufseestraße 69, ausgeschildert.",
      },
      {
        title: "Mit der Bahn",
        text: "Mit der Mariazellerbahn von St. Pölten nach Mariazell, von dort sind es wenige Minuten an den Erlaufsee.",
      },
      {
        title: "Check-in & Saison",
        text: "Check-in 15–18 Uhr, Check-out 8–11 Uhr. Geöffnet von Anfang Mai bis Ende September.",
      },
    ],
  },

  // galerie: ausgelassen — nach hero/pillars/camping bleiben keine 4 ungenutzten,
  // provenienz-sicheren Fotos übrig (jedes Bild nur EINMAL). Sektion blendet sich ehrlich aus.
  galerie: {
    heading: "",
    headingEmphasis: "",
    intro: "",
    tag: "",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Erlaufsee",
    headingEmphasis: "am Erlaufsee",
    intro:
      "Wähle Zeitraum und Personen — die Verwaltung meldet sich persönlich mit deiner Verfügbarkeit. Geöffnet von Mai bis September.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Preise angegeben (bitte bestätigen) · Basis 2 Personen · zzgl. Ortstaxe",
    highlight: {
      title: "100 m zum Wasser",
      text: "Vom Stellplatz sind es nur hundert Meter bis zum Ufer des Erlaufsees.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 32, perExtraGuest: 8 },
      { id: "zelt", label: "Zeltplatz", perNight: 24, perExtraGuest: 8 },
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
    { label: "Der Platz", href: "#camping" },
    { label: "Anreise", href: "#anreise" },
    { label: "Preise", href: "#booking" },
  ],
};

export default campingErlaufsee;
