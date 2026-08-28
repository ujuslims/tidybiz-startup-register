import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kunle Adeyemi",
      company: "PaySwift NG",
      role: "Founder & CEO",
      rating: 5,
      text: "TidyBiz handled our CAC registration and built a brand identity that made our fintech startup look credible from day one. Truly a one-stop shop.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Amaka Okonkwo",
      company: "Luxe Retail Hub",
      role: "Co-founder",
      rating: 5,
      text: "From CAC certificate to Instagram launch, everything was done in two weeks. The team understood exactly what a new retail business needs.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b890?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Babatunde Ibrahim",
      company: "GreenGrid Africa",
      role: "Managing Director",
      rating: 5,
      text: "Professional, fast, and transparent. Our limited company was incorporated and our pitch deck was investor-ready before our first meeting.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ngozi Eze",
      company: "Creative Hub Kano",
      role: "Creative Director",
      rating: 5,
      text: "As a first-time entrepreneur, I was overwhelmed by CAC requirements. TidyBiz walked me through every step and designed a brand I am proud of.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emeka Obi",
      company: "FarmLink Logistics",
      role: "Co-founder",
      rating: 5,
      text: "They didn't just register our agro-logistics company — they built our website, set up our socials, and gave us a brand guideline we still use daily.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fatima Bello",
      company: "HealthFirst NG",
      role: "CEO",
      rating: 5,
      text: "TidyBiz delivered exactly what they promised: a registered health consultancy and a clean, trustworthy brand identity. Highly recommended.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Trusted by Nigerian Startups
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            See what founders across Nigeria are saying about launching with TidyBiz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-6 relative hover:shadow-lg transition-shadow duration-300">
              <Quote className="absolute top-4 right-4 text-primary/20" size={32} />
              
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                
                <p className="text-slate-700 leading-relaxed">{testimonial.text}</p>
                
                <div className="flex items-center space-x-3 pt-4 border-t border-slate-200">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-50 rounded-2xl p-8 max-w-4xl mx-auto border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Join Our Founders
            </h3>
            <p className="text-slate-600 mb-6">
              Ready to turn your idea into an official, launch-ready Nigerian startup? Let TidyBiz handle the details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors font-bold">
                Get Started Now
              </a>
              <a href="#contact" className="border-2 border-primary text-primary px-8 py-3 rounded-xl hover:bg-primary hover:text-white transition-colors font-bold">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
