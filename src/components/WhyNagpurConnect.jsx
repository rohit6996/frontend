import React from 'react';
import { Network, Link2, Map as MapIcon, LineChart } from 'lucide-react';

const WhyNagpurConnect = () => {
  const points = [
    {
      icon: Network,
      title: "Seamless Multimodal Journeys",
      description: "We don't just show one way to get there. We connect buses, metro, and walking routes to create the optimal journey from door to door."
    },
    {
      icon: Link2,
      title: "First & Last-Mile Connectivity",
      description: "The hardest part of public transport is reaching the station. Our smart routing focuses heavily on making the first and final miles convenient."
    },
    {
      icon: MapIcon,
      title: "Smart Urban Mobility",
      description: "Built specifically for Nagpur's growing infrastructure, adapting to new transit corridors and urban developments in real-time."
    },
    {
      icon: LineChart,
      title: "Data-Driven Route Comparison",
      description: "Make informed decisions by comparing routes not just on time, but on cost, convenience, and environmental impact."
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-nagpur-navy mb-6">
              Why Eco Move Nagpur?
            </h2>
            <p className="text-lg text-nagpur-text-secondary mb-8">
              We are rethinking how people move across the city. By integrating all available transportation networks, we make public transit as convenient as private vehicles.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-nagpur-blue-light flex items-center justify-center">
                      <point.icon className="h-6 w-6 text-nagpur-blue-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-nagpur-navy mb-2">{point.title}</h3>
                    <p className="text-nagpur-text-secondary leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyNagpurConnect;
