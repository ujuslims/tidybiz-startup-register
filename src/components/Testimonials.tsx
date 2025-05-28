
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Solutions",
      role: "Founder & CEO",
      rating: 5,
      text: "StartupRegister made launching my tech startup incredibly smooth. They handled everything while I focused on building my product. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b890?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      company: "GreenSpace Co.",
      role: "Co-founder",
      rating: 5,
      text: "The speed and professionalism were outstanding. Got our LLC registered in 24 hours with all documents perfectly prepared. Worth every penny.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Johnson",
      company: "Design Studio Pro",
      role: "Creative Director",
      rating: 5,
      text: "As a first-time entrepreneur, I was overwhelmed by the legal requirements. Their team guided me through everything with patience and expertise.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Park",
      company: "FinTech Innovations",
      role: "Founder",
      rating: 5,
      text: "Exceptional service from start to finish. They understood the complexity of our fintech startup and provided tailored solutions that saved us months.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      company: "Health & Wellness Inc.",
      role: "CEO",
      rating: 5,
      text: "Professional, efficient, and transparent pricing. They delivered exactly what they promised and kept us informed throughout the entire process.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Alex Kumar",
      company: "AI Dynamics",
      role: "CTO & Co-founder",
      rating: 5,
      text: "StartupRegister's expertise in tech startups is evident. They anticipated our needs and provided strategic advice beyond just registration.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by 1,000+ Startups
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what successful entrepreneurs are saying about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 relative hover:shadow-lg transition-shadow duration-300">
              <Quote className="absolute top-4 right-4 text-blue-200" size={32} />
              
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-gray-600 mb-6">
              Ready to start your entrepreneurial journey? Let us handle the legal complexities while you focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started Now
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
