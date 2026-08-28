import { ArrowRight, CheckCircle, Search, FileEdit, Send, Award } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Discovery & Name Search",
      description: "We learn about your startup, check CAC name availability, and map out the registration and brand deliverables you need.",
      details: ["Free name search", "Service recommendation", "Timeline & quote"]
    },
    {
      step: "02",
      title: "Document & Design Prep",
      description: "Our CAC-certified agents prepare your filing documents while our brand team begins your identity design.",
      details: ["CAC forms completion", "Logo concepts & mood board", "Brand direction approval"]
    },
    {
      step: "03",
      title: "Filing & Build",
      description: "We submit your application to the Corporate Affairs Commission and build out your brand assets in parallel.",
      details: ["Direct CAC submission", "Social profile setup", "Website development"]
    },
    {
      step: "04",
      title: "Launch Handover",
      description: "Receive your incorporation documents, brand kit, and a launch-ready digital presence — all in one tidy package.",
      details: ["Certificate of incorporation", "Brand guidelines & assets", "Ongoing support"]
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            The TidyBiz Launch Process
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We've streamlined CAC registration and brand setup into one simple, transparent workflow.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-8 top-24 w-0.5 h-16 bg-primary/20"></div>
              )}
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">{step.description}</p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="text-primary flex-shrink-0" size={20} />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-slate-100">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500 uppercase tracking-wide">Step {step.step}</span>
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          {[Search, FileEdit, Send, Award][index] && (
                            <>
                              {index === 0 && <Search className="text-primary" size={18} />}
                              {index === 1 && <FileEdit className="text-primary" size={18} />}
                              {index === 2 && <Send className="text-primary" size={18} />}
                              {index === 3 && <Award className="text-primary" size={18} />}
                            </>
                          )}
                        </div>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-slate-600">
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
          <a href="#contact" className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors inline-flex items-center group font-bold">
            Start Your Tidy Launch
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
