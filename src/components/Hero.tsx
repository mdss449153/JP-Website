import React from 'react';
import {
  Globe,
  MapPin,
  Video,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Sparkles,
  PhoneCall,
  Search,
} from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-white">
      {/* Background Subtle Geometric Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Status / Scope Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-800 bg-neutral-100 border border-neutral-200/80 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Modern Digital Services for Growing Businesses</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.12]">
              Build Your Presence.{' '}
              <span className="text-neutral-900 block sm:inline">Promote Your Business.</span>{' '}
              <span className="text-blue-600 block">Grow Online.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-2xl leading-relaxed">
              JustPromot helps businesses build a stronger digital presence through professional
              websites, Google Business Profile services and engaging short-form video content.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-7 py-3.5 bg-white hover:bg-neutral-50 text-neutral-800 hover:text-neutral-950 font-semibold text-sm sm:text-base rounded-xl border border-neutral-300 transition-all flex items-center justify-center cursor-pointer shadow-xs"
              >
                Explore Services
              </button>
            </div>

            {/* Quiet Trust Elements */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Responsive Web Design</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Google Verified Setup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>High-Impact Reels</span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Visual Representation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              {/* Outer decorative card frame */}
              <div className="relative bg-neutral-900 rounded-3xl p-5 sm:p-7 shadow-2xl border border-neutral-800 text-white space-y-4">
                {/* 1. Website Development Visual (Top Browser Mockup) */}
                <div className="bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden shadow-inner">
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-neutral-900 border-b border-neutral-800 text-[11px] text-neutral-400">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-neutral-950 rounded border border-neutral-800 text-[10px] text-neutral-300 font-mono">
                      <Globe className="w-3 h-3 text-blue-400" />
                      <span>https://yourbusiness.com</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">200 OK</span>
                  </div>

                  {/* Browser Content */}
                  <div className="p-4 bg-gradient-to-b from-neutral-900 to-neutral-950">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center font-bold text-xs text-white">
                          JP
                        </div>
                        <span className="text-xs font-bold text-white">Your Business Online</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/80 font-medium">
                        Fast & Responsive
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="h-2 w-3/4 bg-neutral-700 rounded-full"></div>
                      <div className="h-2 w-1/2 bg-neutral-800 rounded-full"></div>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <div className="px-3 py-1 bg-emerald-500 text-neutral-950 font-bold text-[11px] rounded-md flex items-center gap-1">
                        <span>Book Service</span>
                      </div>
                      <div className="px-2.5 py-1 bg-neutral-800 text-neutral-300 text-[11px] rounded-md">
                        View Catalog
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2 & 3: Two Column Composition - Google Profile & Reel Video */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Google Business Profile Card */}
                  <div className="bg-neutral-950 p-3.5 rounded-2xl border border-neutral-800 relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Verified
                      </span>
                    </div>

                    <div className="text-xs font-bold text-white">Google Business Profile</div>
                    <p className="text-[11px] text-neutral-400 mt-0.5">Local Search & Maps</p>

                    <div className="mt-2.5 flex items-center gap-1 text-[11px] text-amber-400 font-medium">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-white font-bold ml-1">5.0</span>
                      <span className="text-neutral-400">(Local Reviews)</span>
                    </div>

                    <div className="mt-2 text-[10px] text-neutral-300 bg-neutral-900 px-2 py-1 rounded flex items-center gap-1.5">
                      <Search className="w-3 h-3 text-neutral-400" />
                      <span>Found in "Near Me" Searches</span>
                    </div>
                  </div>

                  {/* Reel / Short-Form Video Card */}
                  <div className="bg-neutral-950 p-3.5 rounded-2xl border border-neutral-800 relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-7 h-7 rounded-lg bg-rose-500/10 flex items-center justify-center">
                        <Video className="w-4 h-4 text-rose-400" />
                      </div>
                      <span className="text-[10px] text-neutral-400 font-mono">9:16 Short</span>
                    </div>

                    <div className="text-xs font-bold text-white">Short-Form Reels</div>
                    <p className="text-[11px] text-neutral-400 mt-0.5">Engaging Video Content</p>

                    {/* Simulated Reel Preview */}
                    <div className="mt-2.5 h-14 bg-gradient-to-r from-blue-900/60 to-purple-900/60 rounded-xl border border-neutral-800 flex items-center justify-between px-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                          <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                        </div>
                        <div className="text-[10px]">
                          <div className="font-bold text-white">Brand Story</div>
                          <div className="text-neutral-300 text-[9px]">Viral Reach</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">
                        14.2k views
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4. Digital Growth Metric Bar */}
                <div className="bg-gradient-to-r from-neutral-950 to-neutral-900 p-3.5 rounded-2xl border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Consistent Digital Growth</div>
                      <div className="text-[11px] text-neutral-400">
                        Inquiries, Phone Calls & Footfall
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-emerald-400">+140%</span>
                    <span className="block text-[10px] text-neutral-400">Visibility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Small Value Highlights Below the Hero */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-neutral-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-100/70 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-white text-neutral-950 flex items-center justify-center font-bold mb-3 shadow-xs">
                <Globe className="w-4 h-4 text-blue-600" />
              </div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-950">
                Professional Websites
              </h2>
              <p className="text-xs text-neutral-600 mt-1">
                Fast, responsive, business-focused website design.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-100/70 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-white text-neutral-950 flex items-center justify-center font-bold mb-3 shadow-xs">
                <MapPin className="w-4 h-4 text-emerald-600" />
              </div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-950">
                Google Business Visibility
              </h2>
              <p className="text-xs text-neutral-600 mt-1">
                Local maps setup, verified rankings, customer reviews.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-100/70 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-white text-neutral-950 flex items-center justify-center font-bold mb-3 shadow-xs">
                <Video className="w-4 h-4 text-rose-600" />
              </div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-950">
                Engaging Reels
              </h2>
              <p className="text-xs text-neutral-600 mt-1">
                Short-form videos that capture attention on social.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-100/70 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-white text-neutral-950 flex items-center justify-center font-bold mb-3 shadow-xs">
                <TrendingUp className="w-4 h-4 text-amber-600" />
              </div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-950">
                Business-Focused Solutions
              </h2>
              <p className="text-xs text-neutral-600 mt-1">
                Practical digital execution tailored to real customer needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
