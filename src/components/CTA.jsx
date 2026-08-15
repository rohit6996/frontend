import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-nagpur-blue-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-nagpur-navy mb-6">
          Ready to Plan Your Next Journey?
        </h2>
        <p className="text-xl text-nagpur-text-secondary mb-10 max-w-2xl mx-auto">
          Connect your journey across Nagpur with smarter, more sustainable transportation choices.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/app" className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4">
            Plan Your Journey <ArrowRight className="h-5 w-5" />
          </Link>
          <Link to="/signup" className="btn-secondary flex items-center justify-center text-lg px-8 py-4 bg-white">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
