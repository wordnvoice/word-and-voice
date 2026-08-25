export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://wordandvoice.in/#organization",
        name: "Word & Voice",
        url: "https://wordandvoice.in",
        logo: {
          "@type": "ImageObject",
          url: "https://wordandvoice.in/logos/logo.png",
        },
        description:
          "Word & Voice is a Christian creative platform sharing worship music, books, devotionals, creative projects and Christ-centered resources.",
        sameAs: [
          "https://www.youtube.com/@WordnVoice",
          "https://www.instagram.com/word.n.voice",
          "https://open.spotify.com/artist/0INYdICAWs39j0QzZaC72F",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://wordandvoice.in/#website",
        url: "https://wordandvoice.in",
        name: "Word & Voice",
        description:
          "Music. Books. Projects. Christ-centered creativity.",
        publisher: {
          "@id": "https://wordandvoice.in/#organization",
        },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}