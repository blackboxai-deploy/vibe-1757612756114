"use client";

import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechInnovate Solutions",
    content: "SocialPro transformed our social media presence completely. Our engagement increased by 340% and we generated over $450K in revenue directly from social campaigns.",
    rating: 5,
    initials: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CEO & Founder", 
    company: "GrowthLab Startup",
    content: "Working with this team was a game-changer. The results speak for themselves: 280% increase in engagement and 12.5K new qualified followers.",
    rating: 5,
    initials: "MC"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "Brand Manager",
    company: "StyleForward Fashion", 
    content: "The influencer collaboration strategy exceeded all our expectations. We saw a 520% boost in engagement and gained 22.8K followers in just 3 months.",
    rating: 5,
    initials: "ER"
  }
];

export default function TestimonialsLight() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by businesses that have transformed their social media presence with proven results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-700 text-sm leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Let's discuss how we can transform your social media presence and drive real results.
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent("Hi! I've seen your client testimonials and I'm interested in transforming my business's social media presence. Can we schedule a consultation?");
                window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}