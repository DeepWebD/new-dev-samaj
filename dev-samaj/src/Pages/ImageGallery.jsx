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
  const [columns, setColumns] = useState(getInitialColumns());

  function getInitialColumns() {
    if (typeof window === "undefined") return 5;
    if (window.innerWidth < 640) return 2;
    if (window.innerWidth < 768) return 3;
    if (window.innerWidth < 1024) return 4;
    return 5;
  }

  useEffect(() => {
    function handleResize() {
      setColumns(getInitialColumns());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Distribute images into columns
  const distributeImages = () => {
    const cols = Array.from({ length: columns }, () => []);
    images.forEach((image, index) => {
      cols[index % columns].push(image);
    });
    return cols;
  };

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

  const imageColumns = distributeImages();

  return (
    <main className="min-h-screen  mt-[100px]">
      <section className="sticky top-0 z-10 ">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-extrabold leading-none tracking-normal text-gray-900 md:text-3xl text-center">
            <span className="block w-full text-secondary">
              Captured Moments
            </span>
          </h1>
        </div>
      </section>

      <section className="w-full px-4 py-6">
        <div className="max-w-[2000px] mx-auto">
          <div className="flex gap-3">
            {imageColumns.map((column, colIndex) => (
              <div key={colIndex} className="flex-1 flex flex-col gap-3">
                {column.map((image, imgIndex) => {
                  const globalIndex = colIndex + imgIndex * columns;
                  return (
                    <div
                      key={globalIndex}
                      className="relative group cursor-zoom-in break-inside-avoid"
                      onClick={() => openLightbox(globalIndex)}
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-sm font-medium">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[99] flex items-center justify-center bg-black/90 backdrop-blur-sm select-none cursor-zoom-out"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative flex flex-col items-center justify-center w-11/12 xl:w-4/5 h-11/12">
            <button
              onClick={prevImage}
              className="absolute left-0 flex items-center justify-center text-white translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              className="object-contain object-center w-full h-full select-none cursor-zoom-out rounded-lg"
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].alt}
            />

            <button
              onClick={nextImage}
              className="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default ImageGallery;
