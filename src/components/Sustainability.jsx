import React from 'react';
import { Leaf, Clock, IndianRupee, Car, Bus } from 'lucide-react';

const Sustainability = () => {
  return (
    <section id="sustainability" className="py-24 bg-nagpur-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-nagpur-green-primary text-sm font-medium mb-6 shadow-sm">
              <Leaf className="h-4 w-4" />
              Eco-Friendly Travel
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-nagpur-navy mb-6">
              Travel Better. <br />
              Leave a Smaller Footprint.
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Make informed transportation choices by comparing travel time, distance, cost, and estimated carbon emissions. Every sustainable journey contributes to a greener Nagpur.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-green-100 text-center">
                <Clock className="h-8 w-8 text-nagpur-blue-primary mx-auto mb-3" />
                <h4 className="font-bold text-nagpur-navy">Travel Time</h4>
                <p className="text-sm text-gray-500">Optimize your schedule</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-green-100 text-center">
                <IndianRupee className="h-8 w-8 text-nagpur-orange mx-auto mb-3" />
                <h4 className="font-bold text-nagpur-navy">Cost</h4>
                <p className="text-sm text-gray-500">Save on daily commute</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-green-100 text-center">
                <Leaf className="h-8 w-8 text-nagpur-green-primary mx-auto mb-3" />
                <h4 className="font-bold text-nagpur-navy">CO₂ Emissions</h4>
                <p className="text-sm text-gray-500">Reduce carbon footprint</p>
              </div>
            </div>
          </div>

          {/* Visual Comparison */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
            <h3 className="text-xl font-bold text-nagpur-navy mb-6 text-center">Journey Comparison</h3>
            
            <div className="space-y-6">
              {/* Route A - Sustainable */}
              <div className="p-5 rounded-xl border-2 border-nagpur-green-primary bg-nagpur-green-light relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-nagpur-green-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Recommended
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <Bus className="h-6 w-6 text-nagpur-green-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-nagpur-navy">Bus + Metro</h4>
                      <p className="text-sm text-gray-600">Multimodal Journey</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-nagpur-navy">35 min</p>
                    <p className="text-sm text-gray-600">₹35</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Carbon Impact</span>
                  <div className="flex items-center gap-2 text-nagpur-green-primary font-bold">
                    <Leaf className="h-4 w-4" />
                    <span>Low CO₂ (0.8 kg)</span>
                  </div>
                </div>
              </div>

              {/* Route B - Private */}
              <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                      <Car className="h-6 w-6 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700">Private Vehicle</h4>
                      <p className="text-sm text-gray-500">Direct Route</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-700">25 min</p>
                    <p className="text-sm text-gray-500">₹120</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-3 flex items-center justify-between border border-gray-100">
                  <span className="text-sm font-medium text-gray-500">Carbon Impact</span>
                  <div className="flex items-center gap-2 text-red-500 font-bold">
                    <span>High CO₂ (3.2 kg)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sustainability;
