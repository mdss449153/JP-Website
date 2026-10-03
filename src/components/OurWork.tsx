import React from 'react';
import { DEMO_PROJECTS, DemoProject } from '../data/projects';
import { ExternalLink, Eye, ArrowRight, Sparkles, Check } from 'lucide-react';

interface OurWorkProps {
  onOpenDemo: (project: DemoProject) => void;
  onSelectServiceAndContact: (serviceName: string) => void;
}

export const OurWork: React.FC<OurWorkProps> = ({ onOpenDemo, onSelectServiceAndContact }) => {
  return (
    <section id="our-work" className="py-14 sm:py-20 bg-neutral-100/70 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
            Selected Work
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
            Explore some sample projects created to demonstrate our website capabilities.
            These demonstrate how we architect clean visuals, responsive layouts, and conversion-focused structures for different business verticals.
          </p>
        </div>

        {/* 4 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {DEMO_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Mockup Preview Header Frame */}
                <div className="relative bg-neutral-900 overflow-hidden aspect-[16/10] border-b border-neutral-200/80">
                  <img
                    src={project.image}
                    alt={`${project.name} sample website mockup`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-5">
                    <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur px-3 py-1 rounded-md">
                      Interactive Demonstration
                    </span>
                    <button
                      onClick={() => onOpenDemo(project)}
                      className="px-3.5 py-1.5 bg-emerald-500 text-neutral-950 text-xs font-bold rounded-lg shadow-md hover:bg-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview Live</span>
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <div className="mb-2">
                    <span className="text-xs font-bold text-neutral-500 tracking-wider uppercase">
                      {project.industry}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-neutral-950 mb-2">
                    {project.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-neutral-100 text-xs text-neutral-600">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Button */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => onOpenDemo(project)}
                  className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 group/btn cursor-pointer shadow-xs"
                >
                  <span>View Website</span>
                  <ExternalLink className="w-4 h-4 text-emerald-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Footer Callout */}
        <div className="mt-14 p-6 sm:p-8 bg-neutral-900 rounded-3xl text-white border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold">
                Need a Custom Website for Your Specific Industry?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                We craft tailored layouts with mobile responsiveness, WhatsApp buttons, and fast loading.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectServiceAndContact('Website Development')}
            className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs sm:text-sm rounded-xl transition-colors shrink-0 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Discuss Your Website</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
