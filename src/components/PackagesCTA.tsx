"use client";

export default function PackagesCTA() {
  return (
    <div className="text-center mt-16">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Not Sure Which Package Is Right for You?
        </h3>
        <p className="text-gray-600 mb-6">
          Let our experts analyze your current social media presence and recommend the best growth strategy for your business.
        </p>
        <button
          onClick={() => {
            const message = encodeURIComponent("Hi! I'd like help choosing the right social media package for my business. Can you analyze my current presence and recommend the best strategy?");
            window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
          }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
        >
          Get Free Strategy Analysis
        </button>
      </div>
    </div>
  );
}