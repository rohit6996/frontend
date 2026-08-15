import React from 'react';
import { Route, Bus, Train, Footprints, MapPin, Leaf } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, accentColor }) => {
  const getAccentStyles = () => {
    switch (accentColor) {
      case 'blue':
        return {
          iconBg: 'bg-nagpur-blue-light',
          iconText: 'text-nagpur-blue-primary',
          hoverBorder: 'hover:border-nagpur-blue-primary'
        };
      case 'purple':
        return {
          iconBg: 'bg-purple-50',
          iconText: 'text-purple-600',
          hoverBorder: 'hover:border-purple-600'
        };
      case 'green':
        return {
          iconBg: 'bg-nagpur-green-light',
          iconText: 'text-nagpur-green-primary',
          hoverBorder: 'hover:border-nagpur-green-primary'
        };
      case 'orange':
        return {
          iconBg: 'bg-orange-50',
          iconText: 'text-nagpur-orange',
          hoverBorder: 'hover:border-nagpur-orange'
        };
      default:
        return {
          iconBg: 'bg-gray-50',
          iconText: 'text-gray-600',
          hoverBorder: 'hover:border-gray-300'
        };
    }
  };

  const styles = getAccentStyles();

  return (
    <div className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md ${styles.hoverBorder}`}>
      <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${styles.iconBg}`}>
        <Icon className={`h-7 w-7 ${styles.iconText}`} />
      </div>
      <h3 className="text-xl font-bold text-nagpur-navy mb-3">{title}</h3>
      <p className="text-nagpur-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const Features = () => {
  const featuresList = [
    {
      icon: Route,
      title: "Multimodal Routing",
      description: "Combine multiple transportation modes to plan efficient end-to-end journeys.",
      accentColor: "blue"
    },
    {
      icon: Bus,
      title: "Bus Connectivity",
      description: "Discover convenient bus connections and integrate public transport into your journey.",
      accentColor: "blue"
    },
    {
      icon: Train,
      title: "Metro Connectivity",
      description: "Connect metro travel with other transportation options for seamless city mobility.",
      accentColor: "purple"
    },
    {
      icon: Footprints,
      title: "Last-Mile Navigation",
      description: "Make the first and final part of your journey easier with smart last-mile guidance.",
      accentColor: "green"
    },
    {
      icon: MapPin,
      title: "Nearby Transit",
      description: "Find nearby bus stops, metro stations, and other transit options.",
      accentColor: "orange"
    },
    {
      icon: Leaf,
      title: "Carbon Savings",
      description: "Compare travel choices and understand the potential carbon savings of sustainable transportation.",
      accentColor: "green"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-nagpur-navy mb-6">
            Everything You Need for a Smarter Journey
          </h2>
          <p className="text-lg text-nagpur-text-secondary">
            Connect different modes of transportation and make better travel decisions across Nagpur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              accentColor={feature.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
