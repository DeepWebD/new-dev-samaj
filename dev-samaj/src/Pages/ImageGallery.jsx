import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "photo gallery image 01",
    title: "Mountain Lake at Sunset",
  },
  {
    url: "https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg",
    alt: "photo gallery image 07",
    title: "Misty Forest Path",
  },
  {
    url: "https://images.unsplash.com/photo-1689217634234-38efb49cb664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    alt: "photo gallery image 08",
    title: "Desert Dunes",
  },
  {
    url: "https://images.unsplash.com/photo-1520350094754-f0fdcac35c1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    alt: "photo gallery image 09",
    title: "Mountain Peak",
  },
  {
    url: "https://cdn.devdojo.com/images/june2023/mountains-10.jpeg",
    alt: "photo gallery image 10",
    title: "Snowy Mountains",
  },
  {
    url: "https://cdn.devdojo.com/images/june2023/mountains-06.jpeg",
    alt: "photo gallery image 06",
    title: "Mountain Valley",
  },
  {
    url: "https://images.pexels.com/photos/1891234/pexels-photo-1891234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "photo gallery image 07",
    title: "Coastal Sunset",
  },
  {
    url: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    alt: "photo gallery image 08",
    title: "Forest Lake",
  },
  {
    url: "https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "photo gallery image 09",
    title: "Mountain Stream",
  },
  {
    url: "https://images.unsplash.com/photo-1541795083-1b160cf4f3d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    alt: "photo gallery image 10",
    title: "Alpine Meadow",
  },
];

function ImageGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleKeyDown = useCallback(
    (e) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex(
          (prev) => (prev - 1 + images.length) % images.length
        );
      }
    },
    [lightboxOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="min-h-screen bg-[snow] overflow-x-hidden">
      <section className="mt-40 px-4 py-4 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              Captured Moments
            </span>
          </h1>
        </div>
      </section>

      <section className="w-full h-full select-none">
        <div className="max-w-6xl mx-auto duration-1000 delay-300 p-5">
          <ul className="grid grid-cols-2 gap-5 lg:grid-cols-5">
            {images.map((image, index) => (
              <li
                key={index}
                className="relative group cursor-zoom-in"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.url}
                  className="object-cover select-none w-full h-auto bg-gray-200 rounded aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                  alt={image.alt}
                />
                <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded pointer-events-none">
                  <h3 className="text-white text-center font-medium px-4 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {lightboxOpen && (
          <div
            className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 select-none cursor-zoom-out"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative flex flex-col items-center justify-center w-11/12 xl:w-4/5 h-11/12">
              <button
                onClick={prevImage}
                className="absolute left-0 flex items-center justify-center text-white translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <img
                className="object-contain object-center w-full h-full select-none cursor-zoom-out"
                src={images[currentImageIndex].url}
                alt={images[currentImageIndex].alt}
              />

              <button
                onClick={nextImage}
                className="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default ImageGallery;
