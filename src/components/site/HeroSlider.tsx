import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  type: 'video' | 'image';
  src: string;
  fallbackImage: string;
  title: string;
  subtitle?: string;
}

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides: Slide[] = [
    {
      id: 1,
      type: 'video',
      src: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4',
      fallbackImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80',
      title: 'Travel Beyond the Destination. Experience the Extraordinary.',
      subtitle: 'We curate world-class events and personalized VIP concierge services that redefine luxury.'
    },
    {
      id: 2,
      type: 'video',
      src: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4',
      fallbackImage: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=2000&q=80',
      title: 'Explore Exotic Destinations',
      subtitle: 'Discover breathtaking locations handpicked by our travel experts for unforgettable experiences.'
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [autoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden group">
      {/* Slides Container */}
      <div className="relative w-full h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'video' ? (
              <>
                <img
                  src={slide.fallbackImage}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <video
                  autoPlay={index === currentSlide}
                  muted
                  loop
                  playsInline
                  poster={slide.fallbackImage}
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              </>
            ) : (
              <img
                src={slide.src}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 text-white min-h-screen flex flex-col justify-center pointer-events-none">
        <div className="text-xs tracking-[0.3em] uppercase text-white/80 animate-fadeInUp">
          CONCIERGE • TRAVEL • HOSPITALITY
        </div>
        <h1 className="mt-6 text-6xl md:text-8xl font-semibold max-w-4xl leading-[0.95] animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {slides[currentSlide].title}
        </h1>
        <p className="mt-6 max-w-lg text-white/80 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          {slides[currentSlide].subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-4 animate-fadeInUp pointer-events-auto" style={{ animationDelay: '0.6s' }}>
          <Link to="/contact" className="btn-lime">
            Get Started
          </Link>
          <Link to="/services" className="btn-outline-light">
            Our Services
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition duration-300 ${
              index === currentSlide
                ? 'bg-lime w-8'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-6 z-20 text-white text-sm font-medium">
        <span className="text-lime">{String(currentSlide + 1).padStart(2, '0')}</span>
        {' / '}
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}
