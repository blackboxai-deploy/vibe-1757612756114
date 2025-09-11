"use client";

import { useEffect, useState, useRef } from "react";

// Component for the standalone animated showcase with scroll-driven animation
export default function AnimatedShowcaseStandalone() {
  // State to track if the component is visible in viewport
  const [isVisible, setIsVisible] = useState(false);
  // Ref to target the section for intersection observer
  const sectionRef = useRef<HTMLElement>(null);

  // Data for the showcase items
  const showcaseData = [
    {
      id: 1,
      title: "Tech Innovation",
      slogan: "Digital transformation made simple",
      imageUrl: "https://placehold.co/280x240/e3f2fd/1976d2?text=Tech+Innovation",
      category: "Technology"
    },
    {
      id: 2,
      title: "E-commerce Growth",
      slogan: "Sales that speak for themselves",
      imageUrl: "https://placehold.co/280x240/f3e5f5/7b1fa2?text=E-commerce+Growth",
      category: "Retail"
    },
    {
      id: 3,
      title: "Food & Dining",
      slogan: "Flavor is now lighter",
      imageUrl: "https://placehold.co/280x240/fff3e0/f57c00?text=Food+%26+Dining",
      category: "Restaurant"
    },
    {
      id: 4,
      title: "Healthcare Excellence", 
      slogan: "Pure in every service",
      imageUrl: "https://placehold.co/280x240/e8f5e8/388e3c?text=Healthcare+Excellence",
      category: "Healthcare"
    }
  ];

  // Double the data for seamless infinite scroll
  const duplicatedData = [...showcaseData, ...showcaseData];

  // Intersection Observer to detect when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% visible
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

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden min-h-screen"
    >
      {/* Section Title */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover how we've transformed brands across industries with data-driven social media strategies.
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className={`relative h-96 transition-all duration-1000 ease-out delay-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>
        
        {/* Sliding Track */}
        <div className="carousel-track">
          {duplicatedData.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={`image-card tilt-${(index % 4) + 1}`}
            >
              {/* Image Wrapper */}
              <div className="image-wrapper">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="showcase-image"
                  loading="lazy"
                />
              </div>
              
              {/* Slogan */}
              <div className="slogan">
                <h3 className="slogan-title">{item.title}</h3>
                <p className="slogan-text">"{item.slogan}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        /* Carousel track styling and animation */
        .carousel-track {
          display: flex;
          height: 100%;
          width: max-content;
          gap: 60px;
          align-items: center;
          animation: slideRightToLeft 25s linear infinite;
        }

        /* Individual image card styling */
        .image-card {
          position: relative;
          width: 280px;
          height: 340px;
          flex-shrink: 0;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        /* Tilting effects for each card */
        .tilt-1 { transform: rotate(-8deg); }
        .tilt-2 { transform: rotate(5deg); }
        .tilt-3 { transform: rotate(-12deg); }
        .tilt-4 { transform: rotate(8deg); }

        /* Hover effect - straighten and scale */
        .image-card:hover {
          transform: rotate(0deg) scale(1.05);
          z-index: 5;
        }

        /* Image container with styling */
        .image-wrapper {
          width: 100%;
          height: 240px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        /* Image styling */
        .showcase-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        /* Image zoom on hover */
        .image-card:hover .showcase-image {
          transform: scale(1.1);
        }

        /* Slogan positioning */
        .slogan {
          position: absolute;
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          width: 100%;
        }

        /* Slogan title styling */
        .slogan-title {
          font-size: 1.4rem;
          color: #2c3e50;
          font-weight: 600;
          margin-bottom: 8px;
          text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
        }

        /* Slogan text styling */
        .slogan-text {
          font-size: 0.9rem;
          color: #7f8c8d;
          font-style: italic;
        }

        /* Slide animation from right to left */
        @keyframes slideRightToLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        /* Pause animation on hover */
        .carousel-track:hover {
          animation-play-state: paused;
        }

        /* Responsive design for tablets */
        @media (max-width: 1024px) {
          .image-card {
            width: 240px;
            height: 300px;
          }
          
          .image-wrapper {
            height: 200px;
          }
          
          .carousel-track {
            gap: 40px;
          }
          
          .slogan-title {
            font-size: 1.2rem;
          }
        }

        /* Responsive design for mobile */
        @media (max-width: 768px) {
          .carousel-track {
            gap: 30px;
          }
          
          .image-card {
            width: 200px;
            height: 260px;
          }
          
          .image-wrapper {
            height: 160px;
          }
          
          .slogan {
            bottom: -50px;
          }
          
          .slogan-title {
            font-size: 1.1rem;
          }
          
          .slogan-text {
            font-size: 0.8rem;
          }
        }

        /* Extra small mobile devices */
        @media (max-width: 480px) {
          .image-card {
            width: 160px;
            height: 220px;
          }
          
          .image-wrapper {
            height: 130px;
          }
          
          .carousel-track {
            gap: 20px;
          }
          
          .slogan {
            bottom: -40px;
          }
          
          .slogan-title {
            font-size: 1rem;
          }
          
          .slogan-text {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
}