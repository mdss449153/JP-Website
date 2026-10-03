import React from 'react';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        'JustPromot understood what we needed and created a clean website that presents our business professionally.',
      author: 'Rahul K.',
      role: 'Business Owner',
      service: 'Website Development',
    },
    {
      quote:
        'Everything was explained clearly and the website looked much more professional than our previous online presence.',
      author: 'Priya S.',
      role: 'Entrepreneur',
      service: 'Google Business Profile',
    },
    {
      quote:
        'The reel content helped us present our business in a more engaging way.',
      author: 'Arjun M.',
      role: 'Business Owner',
      service: 'Reel Services',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
            What People Say
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-2">
            Feedback from business owners on our digital solutions and collaboration.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-3xl p-7 border border-neutral-200/90 shadow-xs flex flex-col justify-between relative hover:border-neutral-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-300 stroke-[1.5]" />
                </div>

                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-200/70">
                <div className="font-bold text-sm text-neutral-950">{item.author}</div>
                <div className="text-xs text-neutral-500 flex items-center justify-between mt-0.5">
                  <span>{item.role}</span>
                  <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                    {item.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
