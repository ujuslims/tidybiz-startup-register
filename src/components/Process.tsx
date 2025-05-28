
import { ArrowRight, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Choose Your Structure",
      description: "Select the best business entity type for your startup's needs and goals.",
      details: ["Free consultation", "Entity comparison", "Tax implications review"]
    },
    {
      step: "02",
      title: "Prepare Documents",
      description: "We handle all the paperwork and legal documentation required for registration.",
      details: ["Articles of incorporation", "Operating agreements", "Bylaws preparation"]
    },
    {
      step: "03",
      title: "File with State",
      description: "Submit your application to the appropriate state authorities with expedited processing.",
      details: ["State filing", "EIN application", "Compliance setup"]
    },
    {
      step: "04",
      title: "Get Your Documents",
      description: "Receive all official documents and start operating your business legally.",
      details: ["Official certificates", "Digital copies", "Ongoing support"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple 4-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've streamlined business registration to make it as easy as possible for busy entrepreneurs.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-16 bg-blue-200"></div>
              )}
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 uppercase tracking-wide">Step {step.step}</span>
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="text-green-600" size={16} />
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                          style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-600">
                        Progress: {Math.round(((index + 1) / steps.length) * 100)}% Complete
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center group">
            Start Your Registration Today
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
