import Hero from "@/components/Hero";
import PackageCard from "@/components/PackageCard";
import AnimatedShowcase from "@/components/AnimatedShowcase";
import TestimonialsLight from "@/components/TestimonialsLight";
import ContactSectionLight from "@/components/ContactSectionLight";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PackagesCTA from "@/components/PackagesCTA";

const packages = [
  {
    title: "Starter Package",
    price: "299",
    description: "Perfect for small businesses ready to establish their social media presence with professional strategy and content planning.",
    features: [
      "Social media audit and strategy development",
      "Content calendar for 1 month (20+ posts)",
      "Platform setup and optimization",
      "Basic analytics and reporting",
      "2 consultation calls per month",
      "Email support during business hours",
      "Brand guidelines and content templates"
    ],
    isPopular: false,
    whatsappMessage: "Hi! I'm interested in the Starter Package ($299/month). Can you tell me more about what's included and how we can get started with establishing my business's social media presence?"
  },
  {
    title: "Growth Package",
    price: "599",
    description: "Comprehensive social media management for growing businesses looking to scale their online presence and drive meaningful engagement.",
    features: [
      "Everything in Starter Package",
      "Full social media management (3-4 platforms)",
      "Daily content creation and posting",
      "Community management and engagement",
      "Monthly competitor analysis",
      "Advanced analytics and performance reporting",
      "4 consultation calls per month",
      "Priority support and strategy adjustments",
      "Basic paid advertising setup ($200 ad spend included)"
    ],
    isPopular: true,
    whatsappMessage: "Hi! I'm interested in the Growth Package ($599/month). This looks perfect for scaling my business. Can we discuss how your comprehensive management approach can help drive engagement and growth for my brand?"
  },
  {
    title: "Enterprise Package",
    price: "1299",
    description: "Full-service social media marketing solution for established businesses demanding premium results with dedicated account management.",
    features: [
      "Everything in Growth Package",
      "Dedicated account manager",
      "Multi-platform campaign management (5+ platforms)",
      "Advanced paid advertising management",
      "Influencer partnership coordination",
      "Video content creation (2-4 videos/month)",
      "Weekly strategy calls and reporting",
      "Crisis management and reputation monitoring",
      "Custom integrations and automation",
      "ROI tracking and business intelligence",
      "24/7 priority support"
    ],
    isPopular: false,
    whatsappMessage: "Hi! I'm interested in the Enterprise Package ($1,299/month). My business needs premium social media marketing with dedicated management. Can we schedule a consultation to discuss custom solutions and expected ROI?"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="pt-16">
        <Hero />
      </div>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Growth Path
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Select the perfect social media consulting package for your business needs. 
              Every package includes WhatsApp consultation and our proven growth strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                title={pkg.title}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                isPopular={pkg.isPopular}
                whatsappMessage={pkg.whatsappMessage}
              />
            ))}
          </div>

          {/* Additional CTA */}
          <PackagesCTA />
        </div>
      </section>

      {/* Animated Showcase Section */}
      <div id="showcase">
        <AnimatedShowcase />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsLight />
      </div>

      {/* Contact Section */}
      <ContactSectionLight />

      {/* Footer */}
      <Footer />
    </main>
  );
}