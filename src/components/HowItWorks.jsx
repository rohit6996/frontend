import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Enter Your Destination",
      description: "Tell Eco Move Nagpur where you want to go."
    },
    {
      number: "02",
      title: "Compare Your Routes",
      description: "Explore multimodal options based on journey requirements."
    },
    {
      number: "03",
      title: "Choose a Smarter Journey",
      description: "Select a route that balances convenience, time, cost, and sustainability."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-nagpur-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-nagpur-navy mb-6">
            Plan Your Journey in 3 Simple Steps
          </h2>
          <div className="w-20 h-1 bg-nagpur-blue-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-nagpur-blue-light via-nagpur-blue-primary to-nagpur-green-light transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-nagpur-blue-light shadow-xl flex items-center justify-center mb-8 relative z-10">
                  <span className="text-3xl font-bold text-nagpur-blue-primary">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-nagpur-navy mb-4 bg-white px-4 py-1 rounded-full shadow-sm">
                  {step.title}
                </h3>
                <p className="text-nagpur-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
