import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
})

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState('');

  const images = Array.from({ length: 24 }, (_, i) => `/bg${i + 1}.jpg`);

  const openLightbox = (src: string, title: string) => {
    setSelectedImage(src);
    setSelectedTitle(title);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedTitle('');
    document.body.style.overflow = 'visible';
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-red-400 text-sm tracking-[0.3em] uppercase">Galerie Complète</p>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">Notre Production</h1>
          <p className="text-gray-400 mt-6 text-lg">Découvrez toutes nos réalisations en polypropylène tissé</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <div 
              key={i}
              className="aspect-video bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-xl"
              onClick={() => openLightbox(src, `Production ${i + 1}`)}
            >
              <img 
                src={src} 
                alt="" 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-[3000] flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button 
              onClick={closeLightbox} 
              className="absolute -top-12 right-4 text-white text-6xl hover:text-red-500 transition-colors"
            >
              ✕
            </button>
            <img src={selectedImage} alt="" className="max-h-[85vh] w-full object-contain rounded-3xl" />
          </div>
        </div>
      )}
    </div>
  );
}