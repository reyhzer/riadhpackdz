import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-DjegUyKg.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function IconBag() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "👜" });
}
function IconWheat() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🌾" });
}
function IconFood() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🌾" });
}
function IconValve() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🔧" });
}
function IconCustom() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🖨️" });
}
function IconScale() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚖️" });
}
function IconWhatsApp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-7 h-7 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" }) });
}
function RockstarSliderSection() {
  const images = Array.from({
    length: 24
  }, (_, i) => `/bg${i + 1}.jpg`);
  const loopImages = [...images, ...images];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-16 bg-black overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 w-max animate-scroll", children: loopImages.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group w-[140px] h-[180px] md:w-[190px] md:h-[240px] flex-shrink-0 rounded-lg overflow-hidden relative transform transition duration-300 group-hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" })
      ] }, `r1-${i}`)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 w-max animate-scroll-reverse opacity-90", children: loopImages.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group w-[120px] h-[160px] md:w-[170px] md:h-[210px] flex-shrink-0 rounded-lg overflow-hidden relative transform transition duration-300 group-hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" })
      ] }, `r2-${i}`)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-center max-w-xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 text-xs md:text-sm tracking-[0.3em] uppercase mb-2", children: "Galerie" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white text-2xl md:text-4xl font-bold mb-4", children: "Notre Production" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 mb-6 text-sm md:text-base", children: "Découvrez tous nos produits et réalisations industrielles." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/gallery", className: "inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition", children: "Voir toute la galerie →" })
    ] })
  ] });
}
function RiadhPackHome() {
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const [selectedImage, setSelectedImage] = reactExports.useState(null);
  const [selectedTitle, setSelectedTitle] = reactExports.useState("");
  const openLightbox = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedTitle("");
    document.body.style.overflow = "visible";
  };
  const navLinks = [{
    href: "#accueil",
    label: "Accueil"
  }, {
    href: "#produits",
    label: "Produits"
  }, {
    href: "#apropos",
    label: "À propos"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  const products = [{
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconBag, {}),
    title: "Sacs tissés en polypropylène",
    desc: "Sacs standard haute résistance pour charges lourdes.",
    use: "Tous secteurs industriels",
    image: "/SAC_PP.png"
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconWheat, {}),
    title: "Rouleaux de polypropylène tissé",
    desc: "Pour graines, engrais, compost. Résistants aux UV et humidité.",
    use: "Agriculture & Élevage",
    image: "/ROUL.JPG"
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconFood, {}),
    title: "Sacs tissés laminés en Polypropylène",
    desc: "Pour farine, sucre, semoule. Conformes aux normes alimentaires.",
    use: "Agroalimentaire",
    image: "/SAC_ALIM.png"
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconValve, {}),
    title: "Sacs à valve",
    desc: "Pour ciment, chaux, plâtre et poudres industrielles.",
    use: "BTP & Industrie",
    image: "/SAC_VALVE.png"
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconCustom, {}),
    title: "Sacs personnalisés",
    desc: "Impression flexo jusqu'à 6 couleurs avec votre logo.",
    use: "Marques & Exportateurs",
    image: "/SAC_CUSTOM.png"
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconScale, {}),
    title: "Commandes en gros",
    desc: "Grande capacité de production pour volumes importants.",
    use: "Grossistes & Industriels",
    image: "/COM_GROS.png"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-black text-white", style: {
    fontFamily: "Open Sans, sans-serif"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-0 left-0 right-0 z-[1000] bg-black/95 backdrop-blur-lg border-b border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 flex items-center justify-between h-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#accueil", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo_riadhpack.png", alt: "Riadh Pack", className: "h-16" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-10", children: [
          navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: link.href, className: "text-white/80 hover:text-white text-sm font-semibold tracking-widest uppercase", children: link.label }, link.href)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl text-xs font-bold uppercase", children: "DEMANDER UN DEVIS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "md:hidden text-white text-3xl", onClick: () => setMenuOpen(!menuOpen), children: menuOpen ? "✕" : "☰" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 transition-all duration-300 overflow-hidden z-[999] ${menuOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6", children: [
        navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: link.href, onClick: () => setMenuOpen(false), className: "text-lg text-white", children: link.label }, link.href)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", onClick: () => setMenuOpen(false), className: "bg-red-600 px-6 py-3 rounded-xl font-bold", children: "DEMANDER UN DEVIS" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "accueil", className: "relative flex items-center justify-center min-h-screen pt-20 z-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("video", { autoPlay: true, muted: true, loop: true, playsInline: true, className: "w-full h-full object-cover pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "/video.mp4", type: "video/mp4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90 pointer-events-none" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 text-sm tracking-[3px] uppercase mb-6 font-semibold", children: "FABRICANT ALGÉRIEN • DEPUIS 2025" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-white text-5xl md:text-7xl font-bold mb-6 leading-tight", children: [
          "EMBALLAGE INDUSTRIEL",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "D'EXCELLENCE"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto", children: [
          "Sacs en polypropylène tissé de haute qualité pour l'agriculture, l'agroalimentaire et l'industrie.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Production locale à Relizane."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "bg-white text-black px-10 py-4 font-bold rounded-xl hover:bg-gray-100 transition-all", children: "OBTENIR UN DEVIS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/213560042526", className: "border border-white px-10 py-4 rounded-xl hover:bg-white/10 transition-all", children: "WhatsApp" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "apropos", className: "relative py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "slideshow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/bg1.jpg", alt: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/bg2.jpg", alt: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/bg3.jpg", alt: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/bg4.jpg", alt: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/bg5.jpg", alt: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/bg6.jpg", alt: "" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/70" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-20 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 text-sm tracking-[0.2em] uppercase font-semibold mb-4", children: "À PROPOS DE RIADH PACK" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-white text-5xl md:text-6xl font-bold leading-none", children: [
              "Un fabricant algérien",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "de confiance"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg text-white/90 text-lg leading-relaxed space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Riadh Pack est spécialisée dans la fabrication de sacs en polypropylène tissé pour les secteurs agricole, alimentaire et industriel." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Implantés à Relizane dans la zone industrielle Belhacel, nous combinons technologie moderne et savoir-faire local pour offrir des solutions de haute qualité à des prix compétitifs." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/riadh pack 1.png", alt: "Riadh Pack Usine", className: "w-full h-full object-cover" }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "produits", className: "py-24 bg-[#0A0A0A]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 text-sm tracking-widest uppercase mb-3", children: "NOTRE GAMME" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white text-5xl font-bold", children: "Nos Produits" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: products.map((product, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72 bg-zinc-950 flex items-center justify-center p-8 overflow-hidden cursor-pointer", onClick: () => openLightbox(product.image, product.title), children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image, alt: product.title, className: "w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-3xl", children: product.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-2xl font-bold leading-tight", children: product.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 leading-relaxed text-[17px] mb-6", children: product.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 text-sm font-semibold tracking-widest uppercase", children: product.use })
        ] })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RockstarSliderSection, {}),
    selectedImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/95 z-[2000] flex items-center justify-center p-4", onClick: closeLightbox, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-5xl w-full", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: closeLightbox, className: "absolute -top-12 right-4 text-white text-5xl hover:text-red-500 transition-colors", children: "✕" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selectedImage, alt: selectedTitle, className: "max-h-[88vh] w-full object-contain rounded-2xl shadow-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-white mt-6 text-2xl font-medium", children: selectedTitle })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-28 bg-[#0A0A0A]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 text-sm tracking-widest uppercase mb-3", children: "CONTACTEZ-NOUS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white text-5xl font-bold mb-4", children: "Demandez un devis" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 max-w-2xl mx-auto", children: "Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-black text-white pt-16 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo_riadhpack.png", alt: "Riadh Pack", className: "h-12 w-auto" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold tracking-wider", children: [
              "RIADH ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-light text-gray-400", children: "PACK" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400", children: "Fabricant algérien de sacs en polypropylène tissé de haute qualité." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold uppercase tracking-widest text-sm mb-4", children: "Liens Rapides" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-gray-400", children: navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "hover:text-white", children: l.label }) }, l.href)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold uppercase tracking-widest text-sm mb-4", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+213560042526", className: "hover:text-white", children: "+213 560 04 25 26" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "commercial@riadhpack.com",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Zone Industrielle Belhacel, Relizane"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-gray-500 text-xs mt-16", children: "© 2026 Riadh Pack - Tous droits réservés" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/213560042526", target: "_blank", rel: "noopener noreferrer", className: "fixed bottom-6 right-6 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconWhatsApp, {}) })
  ] });
}
function ContactForm() {
  const [fields, setFields] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
    setError("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(fields)
      });
      const result = await response.json();
      if (response.ok && result.success) setSubmitted(true);
      else setError(result.error || "Une erreur est survenue.");
    } catch {
      setError("Impossible d'envoyer le message.");
    } finally {
      setLoading(false);
    }
  };
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 3, stroke: "white", className: "w-9 h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-2 text-white", children: "Message envoyé avec succès !" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400", children: "Merci ! Nous vous contacterons rapidement." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold text-gray-300 mb-2", children: "Nom complet *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", name: "name", required: true, value: fields.name, onChange: handleChange, className: "w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white focus:border-red-600 outline-none", placeholder: "Ex: Sara Lopez" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold text-gray-300 mb-2", children: "Numéro de téléphone *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", name: "phone", required: true, value: fields.phone, onChange: handleChange, className: "w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white focus:border-red-600 outline-none", placeholder: "+213 560 04 25 26" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold text-gray-300 mb-2", children: "Adresse email *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", name: "email", required: true, value: fields.email, onChange: handleChange, className: "w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white focus:border-red-600 outline-none" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold text-gray-300 mb-2", children: "Votre besoin / Demande *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", required: true, rows: 6, value: fields.message, onChange: handleChange, className: "w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white focus:border-red-600 outline-none resize-none", placeholder: "Décrivez votre besoin (quantité, type de sac, impression...)" })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm text-center font-medium", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl text-white font-bold tracking-widest uppercase transition-all disabled:opacity-70", children: loading ? "Envoi en cours..." : "Envoyer la demande" })
  ] });
}
export {
  RiadhPackHome as component
};
