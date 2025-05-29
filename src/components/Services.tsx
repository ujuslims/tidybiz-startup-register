
import { Building2, FileText, Shield, Users, Clock, Banknote } from 'lucide-react';

const Services = () => {
  const services = [
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

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Complete CAC Registration Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to legally establish your business in Nigeria through the Corporate Affairs Commission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <service.icon className="text-green-600 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <span className="text-green-600 font-semibold">{service.price}</span>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gray-50 text-gray-700 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
