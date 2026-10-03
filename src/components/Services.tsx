import React from 'react';
import {
  Globe,
  MapPin,
  Video,
  Check,
  ArrowRight,
  Sparkles,
  Layers,
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceAndContact: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceAndContact }) => {
  const services = [
    {
      number: '01',
      title: 'WEBSITE DEVELOPMENT',
      serviceKey: 'Website Development',
      icon: Globe,
      accentColor: 'text-blue-600',
      accentBg: 'bg-blue-500/10',
      description:
        'Modern, responsive and business-focused websites designed to establish credibility and help businesses connect with their customers online.',
      features: [
        'Responsive design',
        'Mobile-friendly experience',
        'Modern UI',
        'Business-focused structure',
        'Contact and lead generation',
        'Clean and fast website experience',
      ],
      ctaText: 'Build My Website',
    },
    {
      number: '02',
      title: 'GOOGLE BUSINESS PROFILE',
      serviceKey: 'Google Business Profile',
      icon: MapPin,
      accentColor: 'text-emerald-600',
      accentBg: 'bg-emerald-500/10',
      description:
        'Improve your local online presence and help customers discover your business through a properly optimized Google Business Profile.',
      features: [
        'Google Business Profile setup',
        'Profile optimization',
        'Business information management',
        'Photos and updates',
        'Local visibility improvement',
        'Review and profile guidance',
      ],
      ctaText: 'Improve My Google Presence',
    },
    {
      number: '03',
      title: 'REEL SERVICES',
      serviceKey: 'Reel Services',
      icon: Video,
      accentColor: 'text-rose-600',
      accentBg: 'bg-rose-500/10',
      description:
        'Create engaging short-form videos designed to showcase your business, products, services and brand across social platforms.',
      features: [
        'Business reels',
        'Promotional reels',
        'Short-form video content',
        'Social media-ready videos',
        'Engaging visual storytelling',
      ],
      ctaText: 'Create My Reels',
    },
  ];

  return (
    <section id="services" className="py-14 sm:py-20 bg-neutral-100/60 border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 mt-3">
            Digital Services That Drive Real Results
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
            We focus on essential, high-impact digital solutions that help local and growing businesses
            stand out, attract inquiries, and build lasting credibility.
          </p>
        </div>

        {/* 3 Premium Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.number}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      SERVICE {svc.number}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl ${svc.accentBg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <Icon className={`w-6 h-6 ${svc.accentColor}`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-neutral-950 mb-3">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-neutral-100 mb-8">
                    <div className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                      Key Deliverables
                    </div>
                    {svc.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service CTA Button */}
                <button
                  onClick={() => onSelectServiceAndContact(svc.serviceKey)}
                  className="w-full py-3 px-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>{svc.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Small "More Digital Solutions Coming Soon" section */}
        <div className="mt-14 max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/90 text-center shadow-xs">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full mb-2">
            <Layers className="w-3.5 h-3.5 text-neutral-600" />
            <span>Future Roadmap</span>
          </div>
          <h3 className="text-lg font-bold text-neutral-950">
            More Digital Solutions Coming Soon
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-xl mx-auto leading-relaxed">
            We're continuously expanding our services to help businesses build, promote and grow their digital presence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
