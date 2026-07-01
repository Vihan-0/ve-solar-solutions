import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://vesolar.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "VE Solar Solutions | Best Solar Company in Lucknow | Since 2003",
    template: "%s | VE Solar Solutions Lucknow",
  },
  description:
    "VE Solar Solutions — Lucknow's most trusted solar panel installer since 2003. UPNEDA registered, government subsidy assistance, EMI options, premium brands (Adani, Tata, Waaree, Microtek, V-Guard). Serving Aliganj, Gomti Nagar, Indira Nagar & all of Lucknow.",
  keywords: [
    "solar panel Lucknow",
    "solar installation Lucknow",
    "best solar company Lucknow",
    "solar panel installer Lucknow",
    "rooftop solar Lucknow",
    "solar subsidy Lucknow",
    "solar panel price Lucknow",
    "UPNEDA solar installer",
    "solar system Lucknow",
    "solar panel installer near me",
    "Aliganj solar installer",
    "Gomti Nagar solar",
    "Indira Nagar solar",
    "solar energy Lucknow",
    "VE Solar Solutions",
    "VN Enterprise solar",
    "residential solar Lucknow",
    "solar rooftop installation UP",
    "PM Surya Ghar subsidy Lucknow",
    "net metering Lucknow",
    "solar panel company UP",
    "Adani solar dealer Lucknow",
    "Tata solar dealer Lucknow",
    "Waaree solar Lucknow",
    "Microtek solar Lucknow",
    "solar panel installation cost Lucknow",
  ],
  authors: [{ name: "VE Solar Solutions" }],
  creator: "VE Solar Solutions",
  publisher: "VE Solar Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "VE Solar Solutions",
    title: "VE Solar Solutions | Best Solar Company in Lucknow | Since 2003",
    description:
      "Lucknow's most trusted solar installer since 2003. UPNEDA registered. Premium brands, subsidy assistance, EMI options. Free consultation on WhatsApp.",
    images: [
      {
        url: "/imageshero/hero-solar.png",
        width: 1200,
        height: 630,
        alt: "VE Solar Solutions — Solar Installation in Lucknow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VE Solar Solutions | Best Solar Company in Lucknow",
    description:
      "Trusted solar installer in Lucknow since 2003. UPNEDA registered, subsidy assistance, EMI options.",
    images: ["/imageshero/hero-solar.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "Solar Energy",
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "VE Solar Solutions",
      alternateName: "VN Enterprise Solar",
      description:
        "Lucknow's most trusted solar panel installer since 2003. UPNEDA registered company offering residential and commercial solar rooftop installations with government subsidy assistance.",
      url: SITE_URL,
      telephone: "+916390718627",
      email: "contact@vesolar.in",
      foundingDate: "2003",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/imageslogo/SOLAR%20(1)%20(1).jpg`,
      },
      image: `${SITE_URL}/imageshero/hero-solar.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "24, UGF, Shreenath Complex, Near Engineering College Chauraha, Sector E",
        addressLocality: "Aliganj",
        addressRegion: "Uttar Pradesh",
        postalCode: "226020",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.8767",
        longitude: "80.9462",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Lucknow",
          "@id": "https://www.wikidata.org/wiki/Q200199",
        },
        { "@type": "Neighborhood", name: "Aliganj" },
        { "@type": "Neighborhood", name: "Gomti Nagar" },
        { "@type": "Neighborhood", name: "Indira Nagar" },
        { "@type": "Neighborhood", name: "Hazratganj" },
        { "@type": "Neighborhood", name: "Rajajipuram" },
        { "@type": "Neighborhood", name: "Vikas Nagar" },
      ],
      hasMap: "https://maps.google.com/?q=Aliganj+Lucknow",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        reviewCount: "100",
        bestRating: "5",
      },
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, EMI",
      sameAs: [],
      knowsAbout: [
        "Solar Panel Installation",
        "Rooftop Solar Systems",
        "Government Solar Subsidy",
        "PM Surya Ghar Yojana",
        "UPNEDA Registration",
        "Net Metering",
        "Solar EMI Financing",
      ],
      brand: [
        { "@type": "Brand", name: "Adani Solar" },
        { "@type": "Brand", name: "Tata Power Solar" },
        { "@type": "Brand", name: "Waaree Energies" },
        { "@type": "Brand", name: "Microtek Solar" },
        { "@type": "Brand", name: "V-Guard Solar" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "VE Solar Solutions",
      description: "Best solar panel installer in Lucknow",
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much government subsidy do I get for solar panels in Lucknow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Under PM Surya Ghar Muft Bijli Yojana, you can get ₹30,000 subsidy for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW+ systems. VE Solar handles all documentation and subsidy paperwork on your behalf.",
          },
        },
        {
          "@type": "Question",
          name: "How long does solar installation take in Lucknow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typically 1–3 days for installation. Net metering registration with the electricity board takes 2–4 weeks. VE Solar manages the entire process end to end.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cost of solar panel installation in Lucknow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 3 kW system typically costs ₹1.5–2 lakh before subsidy. After PM Surya Ghar subsidy, your effective cost can be under ₹1 lakh. VE Solar offers EMI options to make it even more affordable. Contact us for a free customized quote.",
          },
        },
        {
          "@type": "Question",
          name: "Is VE Solar UPNEDA registered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, VE Solar Solutions is UPNEDA (Uttar Pradesh New and Renewable Energy Development Agency) registered, making us an authorized and government-recognized solar installer in Lucknow.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Lucknow" />
        <meta name="geo.position" content="26.8767;80.9462" />
        <meta name="ICBM" content="26.8767, 80.9462" />
        <meta name="theme-color" content="#0a1628" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
