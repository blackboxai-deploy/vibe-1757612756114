"use client";

import Logo from "@/components/Logo";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo size="medium" showText={true} variant="light" />
          </div>
=======
          <div className="hidden md:flex items-center space-x-8">
            <a href="#packages" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Packages
            </a>
            <a href="#showcase" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Portfolio
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
            <button
              onClick={() => {
                const message = encodeURIComponent("Hi! I'd like to get a free consultation about your social media consulting services.");
                window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}