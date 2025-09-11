"use client";

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ 
  size = 'medium', 
  showText = true, 
  variant = 'light',
  className = '' 
}: LogoProps) {
  
  // Size configurations
  const sizeConfig = {
    small: {
      image: 'w-6 h-6',
      text: 'text-lg',
      spacing: 'space-x-2'
    },
    medium: {
      image: 'w-10 h-10',
      text: 'text-2xl',
      spacing: 'space-x-3'
    },
    large: {
      image: 'w-16 h-16',
      text: 'text-4xl',
      spacing: 'space-x-4'
    }
  };

  // Your custom logo from ImgBB - direct URL
  const logoUrl = "https://i.ibb.co/tpBtWvS5/Whats-App-G-rsel-2025-09-10-saat-14-20-49-1c85b04b.jpg";
  
  // Fallback URLs in case of loading issues
  const logoUrls = [
    "https://i.ibb.co/tpBtWvS5/Whats-App-G-rsel-2025-09-10-saat-14-20-49-1c85b04b.jpg",
    "https://placehold.co/80x80/3b82f6/ffffff?text=SP"
  ];
  
  // Alternative: You can use a local logo from the public folder
  // const logoUrl = "/logo.png";
  
  // Text color variants
  const textColor = variant === 'light' 
    ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
    : 'text-white';

  return (
    <div className={`flex items-center ${sizeConfig[size].spacing} ${className}`}>
      {/* Logo Image */}
      <img 
        src={logoUrl}
        alt="SocialPro Logo" 
        className={`${sizeConfig[size].image} object-contain`}
        style={{ maxWidth: '100%', height: 'auto' }}
        onError={(e) => {
          // Simple fallback to placeholder if logo fails to load
          (e.target as HTMLImageElement).src = "https://placehold.co/80x80/3b82f6/ffffff?text=SP";
        }}
      />
      
      {/* Company Name */}
      {showText && (
        <div className={`${sizeConfig[size].text} font-bold ${textColor}`}>
          SocialPro
        </div>
      )}
    </div>
  );
}