import { Building2, FileText, Shield, Users, Clock, Banknote, Palette, BookOpen, Share2, Globe, Presentation, Camera } from 'lucide-react';

const Services = () => {
  const registrationServices = [
    {
      icon: Building2,
      title: "Business Name Registration",
      description: "Register your business name with CAC and secure your brand identity in Nigeria.",
      price: "Starting at ₦25,000",
      features: ["Name availability search", "CAC Form A completion", "Business name certificate", "1-year validity"]
    },
    {
      icon: FileText,
      title: "Limited Company Registration",
      description: "Full incorporation of private limited company with CAC including all required documents.",
      price: "Starting at ₦75,000",
      features: ["Memorandum & Articles", "CAC Form CAC 1.1", "Certificate of incorporation", "Tax identification"]
    },
    {
      icon: Shield,
      title: "Trademark Registration",
      description: "Protect your brand and intellectual property with Nigerian trademark registration.",
      price: "Starting at ₦120,000",
      features: ["Trademark search", "Application filing", "Publication in journal", "Registration certificate"]
    },
    {
      icon: Users,
      title: "Partnership Registration",
      description: "Register business partnerships and limited liability partnerships with CAC.",
      price: "Starting at ₦40,000",
      features: ["Partnership deed", "CAC registration", "Partner agreements", "Compliance setup"]
    },
    {
      icon: Clock,
      title: "Express Registration",
      description: "Fast-track your business registration with our express service in 24-48 hours.",
      price: "Add ₦30,000",
      features: ["Priority processing", "Dedicated agent", "Same-day submission", "Real-time updates"]
    },
    {
      icon: Banknote,
      title: "Post-Incorporation Services",
      description: "Complete your business setup with bank account opening and tax registration.",
      price: "Starting at ₦50,000",
      features: ["Bank account assistance", "FIRS tax registration", "VAT registration", "Compliance calendar"]
    }
  ];

  const brandServices = [
    {
      icon: Palette,
      title: "Logo & Visual Identity",
      description: "A distinctive logo and visual system that makes your startup instantly recognisable.",
      price: "Starting at ₦80,000",
      features: ["3 logo concepts", "Colour & typography system", "Business card design", "Social media avatars"]
    },
    {
      icon: BookOpen,
      title: "Brand Guidelines",
      description: "A documented brand playbook your team and partners can use to stay consistent.",
      price: "Starting at ₦60,000",
      features: ["Logo usage rules", "Colour codes & fonts", "Tone of voice", "Application examples"]
    },
    {
      icon: Share2,
      title: "Social Media Setup",
      description: "Launch-ready social profiles with bios, headers, and a content starter pack.",
      price: "Starting at ₦45,000",
      features: ["Instagram, X, LinkedIn setup", "Profile & cover designs", "Bio & hashtag strategy", "5 launch posts"]
    },
    {
      icon: Globe,
      title: "Website & Landing Pages",
      description: "A professional website or landing page that converts visitors into customers.",
      price: "Starting at ₦150,000",
      features: ["Custom design", "Mobile responsive", "Contact/lead forms", "Domain & hosting guidance"]
    },
    {
      icon: Presentation,
      title: "Pitch Deck Design",
      description: "Investor-ready presentations that communicate your vision with clarity.",
      price: "Starting at ₦70,000",
      features: ["10-15 slides", "Visual storytelling", "Financial charts styling", "On-brand templates"]
    },
    {
      icon: Camera,
      title: "Brand Photography Direction",
      description: "A shot list and visual direction guide for your founding team and product shots.",
      price: "Starting at ₦35,000",
      features: ["Mood board", "Shot list", "Photographer brief", "Editing style guide"]
    }
  ];

  const ServiceCard = ({ service }: { service: typeof registrationServices[0] }) => (
    <div className="group bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
            <service.icon className="text-primary group-hover:text-white transition-colors" size={24} />
          </div>
          <span className="text-primary font-semibold text-sm">{service.price}</span>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
        </div>

        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-slate-600">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>

        <a href="#contact" className="block w-full text-center bg-slate-100 text-slate-900 py-3 rounded-xl hover:bg-primary hover:text-white transition-colors font-medium">
          Get Started
        </a>
      </div>
    </div>
  );

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Two Pillars, One Tidy Launch
          </h2>
          <p className="text-lg text-slate-600">
            We've combined legal compliance with creative strategy to give your startup the best possible start in Nigeria.
          </p>
        </div>

        {/* Registration Services */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Building2 className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Register Your Business</h3>
              <p className="text-slate-600">Official CAC filings and compliance, handled end-to-end.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {registrationServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Brand Services */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Palette className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Build Your Brand</h3>
              <p className="text-slate-600">Identity, socials, and web presence for a launch that looks as good as it is legal.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
