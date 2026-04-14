import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-DjegUyKg.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function GalleryPage() {
  const [selectedImage, setSelectedImage] = reactExports.useState(null);
  const [selectedTitle, setSelectedTitle] = reactExports.useState("");
  const images = Array.from({
    length: 24
  }, (_, i) => `/bg${i + 1}.jpg`);
  const openLightbox = (src, title) => {
    setSelectedImage(src);
    setSelectedTitle(title);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedTitle("");
    document.body.style.overflow = "visible";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-black text-white pt-20 pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 text-sm tracking-[0.3em] uppercase", children: "Galerie Complète" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-bold mt-4", children: "Notre Production" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mt-6 text-lg", children: "Découvrez toutes nos réalisations en polypropylène tissé" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-xl", onClick: () => openLightbox(src, `Production ${i + 1}`), children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "w-full h-full object-cover", loading: "lazy" }) }, i)) })
    ] }),
    selectedImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/95 z-[3000] flex items-center justify-center p-4", onClick: closeLightbox, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-5xl w-full", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: closeLightbox, className: "absolute -top-12 right-4 text-white text-6xl hover:text-red-500 transition-colors", children: "✕" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selectedImage, alt: "", className: "max-h-[85vh] w-full object-contain rounded-3xl" })
    ] }) })
  ] });
}
export {
  GalleryPage as component
};
