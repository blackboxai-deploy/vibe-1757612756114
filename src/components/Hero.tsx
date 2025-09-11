"use client";

import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

export default function Hero() {
  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about your social media consulting services. Can we discuss my needs?");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
      {/* Simplified Background Elements */}
      <div className="absolute top-20 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-100 rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Logo */}
          <div className="mb-8">
            <Logo size="large" showText={false} variant="light" className="justify-center" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            Transform Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Social Media</span>
            <br />
            Into Revenue
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Professional social media consulting that drives real results. From strategy to execution, 
            we help brands grow their online presence and convert followers into customers.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Brands Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">250%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Average Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Support Available</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToPackages}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              View Our Packages
            </Button>
            <Button 
              onClick={openWhatsApp}
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-200 hover:shadow-md"
            >
              Get Free Consultation
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-6 uppercase tracking-wide font-semibold">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">TechCorp</div>
              <div className="text-2xl font-bold text-gray-400">InnovateCo</div>
              <div className="text-2xl font-bold text-gray-400">GrowthLab</div>
              <div className="text-2xl font-bold text-gray-400">BrandForge</div>
              <div className="text-2xl font-bold text-gray-400">ScaleUp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}