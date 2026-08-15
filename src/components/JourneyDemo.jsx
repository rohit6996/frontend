import React from 'react';
import { Footprints, Bus, Train, MapPin, Clock, IndianRupee, Leaf } from 'lucide-react';

const JourneyDemo = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-nagpur-blue-light rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-nagpur-navy mb-12 text-center">
              Sample Multimodal Journey
            </h2>

            {/* Visual Route Path */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative">
              {/* Connection line */}
              <div className="absolute top-1/2 left-12 right-12 h-1 bg-blue-200 hidden md:block -translate-y-1/2 z-0"></div>
              
              <div className="flex flex-col items-center z-10 mb-8 md:mb-0">
                <div className="w-12 h-12 bg-white rounded-full border-2 border-nagpur-navy flex items-center justify-center shadow-md mb-3">
                  <MapPin className="h-6 w-6 text-nagpur-navy" />
                </div>
                <span className="font-semibold text-nagpur-navy">Origin</span>
              </div>

              <div className="flex flex-col items-center z-10 mb-8 md:mb-0">
                <div className="w-16 h-16 bg-white rounded-full border-2 border-nagpur-blue-primary flex items-center justify-center shadow-lg mb-3">
                  <Footprints className="h-7 w-7 text-nagpur-blue-primary" />
                </div>
                <span className="text-sm font-medium text-gray-600">Walking</span>
                <span className="text-xs text-gray-500">5 min</span>
              </div>

              <div className="flex flex-col items-center z-10 mb-8 md:mb-0">
                <div className="w-16 h-16 bg-white rounded-full border-2 border-nagpur-blue-primary flex items-center justify-center shadow-lg mb-3">
                  <Bus className="h-7 w-7 text-nagpur-blue-primary" />
                </div>
                <span className="text-sm font-medium text-gray-600">Bus</span>
                <span className="text-xs text-gray-500">12 min</span>
              </div>

              <div className="flex flex-col items-center z-10 mb-8 md:mb-0">
                <div className="w-16 h-16 bg-white rounded-full border-2 border-purple-600 flex items-center justify-center shadow-lg mb-3">
                  <Train className="h-7 w-7 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-600">Metro</span>
                <span className="text-xs text-gray-500">15 min</span>
              </div>

              <div className="flex flex-col items-center z-10 mb-8 md:mb-0">
                <div className="w-16 h-16 bg-white rounded-full border-2 border-nagpur-green-primary flex items-center justify-center shadow-lg mb-3">
                  <Footprints className="h-7 w-7 text-nagpur-green-primary" />
                </div>
                <span className="text-sm font-medium text-gray-600">Walking</span>
                <span className="text-xs text-gray-500">3 min</span>
              </div>

              <div className="flex flex-col items-center z-10">
                <div className="w-12 h-12 bg-white rounded-full border-2 border-nagpur-navy flex items-center justify-center shadow-md mb-3">
                  <MapPin className="h-6 w-6 text-nagpur-navy" fill="#123B5D" />
                </div>
                <span className="font-semibold text-nagpur-navy">Destination</span>
              </div>
            </div>

            {/* Journey Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-50 flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-nagpur-blue-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Travel Time</p>
                  <p className="text-xl font-bold text-nagpur-navy">35 min</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-50 flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-nagpur-blue-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Distance</p>
                  <p className="text-xl font-bold text-nagpur-navy">8.2 km</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-blue-50 flex items-center gap-4">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <IndianRupee className="h-6 w-6 text-nagpur-orange" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Est. Cost</p>
                  <p className="text-xl font-bold text-nagpur-navy">₹35</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-green-50 flex items-center gap-4">
                <div className="bg-nagpur-green-light p-3 rounded-lg">
                  <Leaf className="h-6 w-6 text-nagpur-green-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">CO₂ Impact</p>
                  <p className="text-xl font-bold text-nagpur-green-primary">-65%</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyDemo;
