import React from 'react';
import {
  Globe,
  MapPin,
  Video,
  Target,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      number: '01',
      title: 'SIMPLE SOLUTIONS',
      description: 'Clear and practical digital solutions built around your business needs.',
      icon: Target,
    },
    {
      number: '02',
      title: 'PROFESSIONAL EXECUTION',
      description: 'Focused on quality, usability and a professional online presentation.',
      icon: ShieldCheck,
    },
    {
      number: '03',
      title: 'BUILT TO GROW',
      description: 'Solutions that can evolve as your business and digital needs grow.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Brand Story & Mission */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              About JustPromot
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 leading-tight">
              Helping Businesses Build a Stronger Digital Presence
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              <p className="font-medium text-neutral-900">
                JustPromot is a growing digital services brand focused on helping businesses establish
                and strengthen their online presence.
              </p>
              <p>
                In today's connected market, prospective customers search on Google, explore websites,
                and watch short videos before deciding where to spend their money. Many hard-working local
                businesses either lack a clean web address, have outdated map listings, or struggle to
                produce engaging social video.
              </p>
              <p>
                That is why JustPromot currently concentrates its expertise on three essential pillars:
              </p>
            </div>

            {/* Current Focus Pillars */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-900">Website Development</span>
                  <span className="text-xs text-neutral-500 block">Clean, responsive and fast modern business web pages.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-900">Google Business Profile Services</span>
                  <span className="text-xs text-neutral-500 block">Accurate local presence on Google Maps and search.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-900">Short-Form Video / Reel Services</span>
                  <span className="text-xs text-neutral-500 block">Engaging visual reels tailored for social platforms.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Three Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-xl relative">
              <div className="mb-8 pb-6 border-b border-neutral-800">
                <div>
                  <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                    Our Guiding Philosophy
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Principles Behind Every Project
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                {values.map((val) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={val.number}
                      className="p-5 rounded-2xl bg-neutral-950/70 border border-neutral-800/90 hover:border-neutral-700 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/60">
                          {val.number}
                        </span>
                        <h4 className="text-sm font-bold text-white tracking-wide">
                          {val.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-1">
                        {val.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center gap-3 text-xs text-neutral-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Honest advisory, realistic timelines, and transparent collaboration.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
