"use client";

import { useEffect, useState, useRef } from "react";

interface ShowcaseItem {
  id: number;
  slogan: string;
  imageUrl: string;
  category: string;
}

const showcaseData: ShowcaseItem[] = [
  {
    id: 1,
    slogan: "Tech Innovation",
    imageUrl: "https://images.flux-image.com/image/aVEvNGnIoAHNkWQO1CUz0",
    category: "Technology"
  },
  {
    id: 2,
    slogan: "E-commerce Growth",
    imageUrl: "https://images.flux-image.com/image/oWm0e_Qo5jlh4-1BrAGlw",
    category: "Retail"
  },
  {
    id: 3,
    slogan: "Food & Dining",
    imageUrl: "https://images.flux-image.com/image/JmIw_r8eCCCb_mV_qHCk-",
    category: "Restaurant"
  },
  {
    id: 4,
    slogan: "Healthcare Excellence",
    imageUrl: "https://images.flux-image.com/image/Oj4VbqvvA8FP3LBw8aOgK",
    category: "Healthcare"
  },
  {
    id: 5,
    slogan: "Fashion Forward",
    imageUrl: "https://images.flux-image.com/image/zcaAXqGHLnRbDwZwOQNqV",
    category: "Fashion"
  },
  {
    id: 6,
    slogan: "Property Success",
    imageUrl: "https://images.flux-image.com/image/0jgE2SyLaU2wVIXRZGKX8",
    category: "Real Estate"
  },
  {
    id: 7,
    slogan: "Digital Marketing",
    imageUrl: "https://images.flux-image.com/image/5S6HjKLx4PQY4Kz3gQI_Y",
    category: "Marketing"
  },
  {
    id: 8,
    slogan: "Brand Strategy",
    imageUrl: "https://images.flux-image.com/image/HkTttY0xxKQ2EH5kkCBRi",
    category: "Branding"
  }
];

export default function AnimatedShowcase() {
  const [scrollTransform, setScrollTransform] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [duplicatedData, setDuplicatedData] = useState<ShowcaseItem[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Double the data for scroll effect
    setDuplicatedData([...showcaseData, ...showcaseData]);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress when section is in view
        if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
          const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
          // Move from right (0) to left (negative values) as user scrolls
          const translateX = scrollProgress * -1200; // Adjust multiplier for desired speed
          setScrollTransform(translateX);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover how we've transformed brands across industries with data-driven social media strategies
            that deliver measurable results and sustainable growth.
          </p>
        </div>
      </div>

      <div className="relative h-80">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>
        
        <div 
          className="showcase-container"
          style={{
            transform: `translateX(${scrollTransform}px)`,
          }}
        >
          {duplicatedData.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={`showcase-item ${isVisible ? 'fade-in' : ''}`}
              style={{
                animationDelay: `${(index % showcaseData.length) * 0.1}s`
              }}
            >
              <div className="image-container">
                <img
                  src={item.imageUrl}
                  alt={item.slogan}
                  className="showcase-image"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <div className="slogan-text">
                    {item.slogan}
                  </div>
                  <div className="category-badge">
                    {item.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional content to encourage scrolling */}
      <div className="h-96 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Experience Scroll-Driven Animation
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            As you scroll down this page, watch how our success stories move dynamically to the left, 
            creating an engaging interactive experience that showcases our portfolio.
          </p>
          <div className="text-blue-600 animate-bounce text-2xl">↓ Keep Scrolling ↓</div>
        </div>
      </div>

      <style jsx>{`
        .showcase-container {
          display: flex;
          width: max-content;
          gap: 2rem;
          height: 100%;
          align-items: center;
          transition: transform 0.1s ease-out;
          will-change: transform;
        }

        .showcase-item {
          flex-shrink: 0;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }

        .showcase-item.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .image-container {
          position: relative;
          width: 200px;
          height: 200px;
          border-radius: 20px;
          overflow: hidden;
          transform: rotate(-8deg);
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          animation: curvedFloat 8s ease-in-out infinite;
        }

        .image-container:nth-child(odd) {
          transform: rotate(-8deg);
          animation-delay: 0s;
        }

        .image-container:nth-child(2n) {
          transform: rotate(5deg);
          animation-delay: -1s;
        }

        .image-container:nth-child(3n) {
          transform: rotate(-12deg);
          animation-delay: -2s;
        }

        .image-container:nth-child(4n) {
          transform: rotate(8deg);
          animation-delay: -3s;
        }

        .image-container:nth-child(5n) {
          transform: rotate(-6deg);
          animation-delay: -4s;
        }

        .image-container:nth-child(6n) {
          transform: rotate(10deg);
          animation-delay: -5s;
        }

        .image-container:nth-child(7n) {
          transform: rotate(-15deg);
          animation-delay: -6s;
        }

        .image-container:nth-child(8n) {
          transform: rotate(4deg);
          animation-delay: -7s;
        }

        .image-container:hover {
          transform: rotate(0deg) scale(1.05);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          animation-play-state: paused;
        }

        @keyframes curvedFloat {
          0% {
            transform: translateX(0px) translateY(0px) rotate(-8deg);
          }
          12.5% {
            transform: translateX(30px) translateY(15px) rotate(-5deg);
          }
          25% {
            transform: translateX(0px) translateY(30px) rotate(-8deg);
          }
          37.5% {
            transform: translateX(-30px) translateY(45px) rotate(-11deg);
          }
          50% {
            transform: translateX(0px) translateY(60px) rotate(-8deg);
          }
          62.5% {
            transform: translateX(25px) translateY(45px) rotate(-5deg);
          }
          75% {
            transform: translateX(0px) translateY(30px) rotate(-8deg);
          }
          87.5% {
            transform: translateX(-25px) translateY(15px) rotate(-11deg);
          }
          100% {
            transform: translateX(0px) translateY(0px) rotate(-8deg);
          }
        }

        /* Different animation for even children */
        .image-container:nth-child(2n) {
          animation-name: curvedFloatReverse;
        }

        @keyframes curvedFloatReverse {
          0% {
            transform: translateX(0px) translateY(0px) rotate(5deg);
          }
          12.5% {
            transform: translateX(-30px) translateY(15px) rotate(8deg);
          }
          25% {
            transform: translateX(0px) translateY(30px) rotate(5deg);
          }
          37.5% {
            transform: translateX(30px) translateY(45px) rotate(2deg);
          }
          50% {
            transform: translateX(0px) translateY(60px) rotate(5deg);
          }
          62.5% {
            transform: translateX(-25px) translateY(45px) rotate(8deg);
          }
          75% {
            transform: translateX(0px) translateY(30px) rotate(5deg);
          }
          87.5% {
            transform: translateX(25px) translateY(15px) rotate(2deg);
          }
          100% {
            transform: translateX(0px) translateY(0px) rotate(5deg);
          }
        }

        .showcase-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .image-container:hover .showcase-image {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-container:hover .image-overlay {
          opacity: 1;
        }

        .slogan-text {
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 0.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
          transform: translateY(10px);
          transition: transform 0.3s ease;
        }

        .image-container:hover .slogan-text {
          transform: translateY(0);
        }

        .category-badge {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transform: translateY(10px);
          transition: transform 0.3s ease;
        }

        .image-container:hover .category-badge {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .image-container {
            width: 150px;
            height: 150px;
            border-radius: 15px;
          }
          
          .showcase-container {
            gap: 1rem;
          }
          
          .slogan-text {
            font-size: 0.9rem;
          }

          @keyframes curvedFloat {
            0% {
              transform: translateX(0px) translateY(0px) rotate(-8deg);
            }
            25% {
              transform: translateX(20px) translateY(20px) rotate(-5deg);
            }
            50% {
              transform: translateX(0px) translateY(40px) rotate(-8deg);
            }
            75% {
              transform: translateX(-20px) translateY(20px) rotate(-11deg);
            }
            100% {
              transform: translateX(0px) translateY(0px) rotate(-8deg);
            }
          }

          @keyframes curvedFloatReverse {
            0% {
              transform: translateX(0px) translateY(0px) rotate(5deg);
            }
            25% {
              transform: translateX(-20px) translateY(20px) rotate(8deg);
            }
            50% {
              transform: translateX(0px) translateY(40px) rotate(5deg);
            }
            75% {
              transform: translateX(20px) translateY(20px) rotate(2deg);
            }
            100% {
              transform: translateX(0px) translateY(0px) rotate(5deg);
            }
          }
        }

        @media (max-width: 480px) {
          .image-container {
            width: 120px;
            height: 120px;
            border-radius: 12px;
          }
          
          .slogan-text {
            font-size: 0.8rem;
          }
          
          .category-badge {
            font-size: 0.65rem;
            padding: 0.2rem 0.5rem;
          }

          @keyframes curvedFloat {
            0% {
              transform: translateX(0px) translateY(0px) rotate(-8deg);
            }
            25% {
              transform: translateX(15px) translateY(15px) rotate(-5deg);
            }
            50% {
              transform: translateX(0px) translateY(30px) rotate(-8deg);
            }
            75% {
              transform: translateX(-15px) translateY(15px) rotate(-11deg);
            }
            100% {
              transform: translateX(0px) translateY(0px) rotate(-8deg);
            }
          }

          @keyframes curvedFloatReverse {
            0% {
              transform: translateX(0px) translateY(0px) rotate(5deg);
            }
            25% {
              transform: translateX(-15px) translateY(15px) rotate(8deg);
            }
            50% {
              transform: translateX(0px) translateY(30px) rotate(5deg);
            }
            75% {
              transform: translateX(15px) translateY(15px) rotate(2deg);
            }
            100% {
              transform: translateX(0px) translateY(0px) rotate(5deg);
            }
          }
        }
      `}</style>
    </section>
  );
}