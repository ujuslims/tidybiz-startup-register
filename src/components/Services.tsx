
import { Building2, FileText, Shield, Users, Clock, DollarSign } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "LLC Formation",
      description: "Complete LLC setup with operating agreements and EIN registration.",
      price: "Starting at $299",
      features: ["Name reservation", "Articles of organization", "Operating agreement", "EIN registration"]
    },
    {
      icon: FileText,
      title: "Corporation Setup",
      description: "Full corporation formation with bylaws and shareholder agreements.",
      price: "Starting at $399",
      features: ["Corporate bylaws", "Stock certificates", "Board resolutions", "S-Corp election"]
    },
    {
      icon: Shield,
      title: "Trademark Registration",
      description: "Protect your brand with comprehensive trademark services.",
      price: "Starting at $599",
      features: ["Trademark search", "Application filing", "Office action responses", "Registration certificate"]
    },
    {
      icon: Users,
      title: "Partnership Formation",
      description: "Establish partnerships with clear agreements and structures.",
      price: "Starting at $249",
      features: ["Partnership agreement", "Operating terms", "Profit sharing", "Exit provisions"]
    },
    {
      icon: Clock,
      title: "Expedited Filing",
      description: "Get your business registered in 24 hours with priority processing.",
      price: "Add $199",
      features: ["24-hour processing", "Priority review", "Dedicated support", "Real-time updates"]
    },
    {
      icon: DollarSign,
      title: "Tax Strategy",
      description: "Optimize your business structure for maximum tax efficiency.",
      price: "Starting at $149",
      features: ["Entity selection", "Tax planning", "Deduction optimization", "Quarterly reviews"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Complete Business Formation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to get your startup off the ground, from initial registration to ongoing compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <service.icon className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <span className="text-blue-600 font-semibold">{service.price}</span>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gray-50 text-gray-700 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
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
