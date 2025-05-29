
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Register Your Business in
                <span className="text-green-600"> Nigeria</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fast, reliable, and affordable CAC company registration services for Nigerian entrepreneurs. 
                Get your business legally registered with the Corporate Affairs Commission in as little as 3-5 working days.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center group">
                Start CAC Registration
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors">
                Free Consultation
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-600">CAC certified agents</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-600">3-5 days processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-600">Nigerian compliance</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">CAC Registration Status</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    In Progress
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700">Name availability search</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <span className="text-gray-700">CAC forms prepared</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Submission to CAC</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
