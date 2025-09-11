"use client";

import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechInnovate Solutions",
    content: "SocialPro transformed our social media presence completely. Our engagement increased by 340% and we generated over $450K in revenue directly from social campaigns. Their strategic approach and attention to detail is unmatched.",
    rating: 5,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1cdb565b-c104-4a54-9d91-1afafbd2b8dc.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CEO & Founder",
    company: "GrowthLab Startup",
    content: "Working with this team was a game-changer. They didn't just manage our accounts - they became strategic partners in our growth. The results speak for themselves: 280% increase in engagement and 12.5K new qualified followers.",
    rating: 5,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7398cee8-2bf2-4a57-9d8d-278c4e7624f9.png"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "Brand Manager",
    company: "StyleForward Fashion",
    content: "The influencer collaboration strategy they developed exceeded all our expectations. We saw a 520% boost in engagement and gained 22.8K followers in just 3 months. Our brand awareness skyrocketed!",
    rating: 5,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/02508357-e49b-41a8-805a-13040de5d1a8.png"
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Operations Manager",
    company: "FoodChain Restaurants",
    content: "Managing social media for multiple restaurant locations was overwhelming until we found SocialPro. They streamlined everything, increased our local engagement by 420%, and helped us generate $680K in additional revenue.",
    rating: 5,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2daa73cd-4651-4315-a347-63407231cddb.png"
  },
  {
    id: 5,
    name: "Jennifer Kim",
    title: "Digital Marketing Lead",
    company: "HealthCare Plus",
    content: "Their expertise in healthcare marketing compliance while creating engaging content is exceptional. They helped us build a community of 6.1K engaged followers while maintaining all regulatory standards.",
    rating: 5,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4355c9c4-bf3a-4c85-8a7c-81ea7ee98a4c.png"
  },
  {
    id: 6,
    name: "Robert Wilson",
    title: "Real Estate Broker",
    company: "Premium Properties",
    content: "The targeted ad campaigns and virtual property showcases they created revolutionized our lead generation. 310% increase in engagement and $540K in closed deals directly attributed to social media efforts.",
    rating: 5,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e7be89c2-1040-474f-849e-621ba7be46b5.png"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Don't just take our word for it. Hear from the brands and businesses that have 
            transformed their social media presence with our proven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-700 text-base leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-300 transition-colors"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-blue-600 font-medium text-sm">
                      {testimonial.title}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can transform your social media presence and drive real results for your business.
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent("Hi! I've seen your client testimonials and I'm impressed with the results. I'd like to discuss how you can help transform my business's social media presence. Can we schedule a consultation?");
                window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}