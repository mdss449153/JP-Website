import React, { useState, useEffect } from 'react';
import { DemoProject } from '../data/projects';
import {
  X,
  Laptop,
  Tablet,
  Smartphone,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';

interface DemoViewerModalProps {
  project: DemoProject | null;
  onClose: () => void;
  onSelectServiceAndContact: (serviceName: string) => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const DemoViewerModal: React.FC<DemoViewerModalProps> = ({
  project,
  onClose,
  onSelectServiceAndContact,
}) => {
  const [device, setDevice] = useState<DeviceMode>('desktop');
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'contact'>('home');
  const [enquirySent, setEnquirySent] = useState(false);
  const [enquiryName, setEnquiryName] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  const handleDemoEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySent(true);
  };

  const getContainerWidth = () => {
    switch (device) {
      case 'mobile':
        return 'max-w-[400px]';
      case 'tablet':
        return 'max-w-[760px]';
      default:
        return 'w-full max-w-5xl';
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} Sample Website Demo`}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-neutral-950/80 backdrop-blur-md transition-opacity duration-300"
    >
      <div className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden text-neutral-100">
        {/* Modal Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-neutral-950 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-1 rounded">
              SAMPLE / DEMO PROJECT
            </span>
            <div className="hidden sm:block">
              <span className="text-sm font-bold text-white">{project.name}</span>
              <span className="mx-2 text-neutral-600">·</span>
              <span className="text-xs text-neutral-400">{project.industry}</span>
            </div>
          </div>

          {/* Viewport switch controls */}
          <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-lg border border-neutral-800">
            <button
              onClick={() => setDevice('desktop')}
              className={`p-1.5 rounded text-xs flex items-center gap-1.5 transition-colors ${
                device === 'desktop'
                  ? 'bg-neutral-800 text-white font-medium shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              title="Desktop View"
            >
              <Laptop className="w-4 h-4" />
              <span className="hidden md:inline">Desktop</span>
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`p-1.5 rounded text-xs flex items-center gap-1.5 transition-colors ${
                device === 'tablet'
                  ? 'bg-neutral-800 text-white font-medium shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              title="Tablet View"
            >
              <Tablet className="w-4 h-4" />
              <span className="hidden md:inline">Tablet</span>
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`p-1.5 rounded text-xs flex items-center gap-1.5 transition-colors ${
                device === 'mobile'
                  ? 'bg-neutral-800 text-white font-medium shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden md:inline">Mobile</span>
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close demo viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Browser Chrome Simulation */}
        <div className="flex items-center gap-2 px-4 py-2 bg-neutral-900/90 border-b border-neutral-800/80 text-xs text-neutral-400">
          <div className="flex gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <div className="flex-1 max-w-xl mx-auto flex items-center gap-2 px-3 py-1 bg-neutral-950 rounded-md border border-neutral-800 text-neutral-300 font-mono text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate">{project.demoUrl}</span>
          </div>
          <button
            onClick={() => setEnquirySent(false)}
            title="Reload Demo"
            className="p-1 hover:text-white text-neutral-400 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Viewport Content Area */}
        <div className="flex-1 overflow-y-auto bg-neutral-950/60 p-3 sm:p-6 flex justify-center items-start">
          <div
            className={`transition-all duration-300 bg-white text-neutral-900 rounded-xl shadow-xl overflow-hidden ${getContainerWidth()} ${
              device === 'mobile' ? 'border-4 border-neutral-800' : ''
            }`}
          >
            {/* Demo Site Header */}
            <header className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3.5 bg-white/95 backdrop-blur border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center font-bold text-white text-sm">
                  {project.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold tracking-tight text-neutral-900 leading-tight">
                    {project.name}
                  </div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">
                    {project.industry}
                  </div>
                </div>
              </div>

              {device !== 'mobile' && (
                <nav className="flex items-center gap-5 text-xs font-medium text-neutral-600">
                  <button
                    onClick={() => setActiveTab('home')}
                    className={`hover:text-neutral-900 transition-colors ${
                      activeTab === 'home' ? 'text-neutral-950 font-bold border-b-2 border-neutral-950 pb-0.5' : ''
                    }`}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => setActiveTab('services')}
                    className={`hover:text-neutral-900 transition-colors ${
                      activeTab === 'services' ? 'text-neutral-950 font-bold border-b-2 border-neutral-950 pb-0.5' : ''
                    }`}
                  >
                    Offerings
                  </button>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className={`hover:text-neutral-900 transition-colors ${
                      activeTab === 'contact' ? 'text-neutral-950 font-bold border-b-2 border-neutral-950 pb-0.5' : ''
                    }`}
                  >
                    Contact
                  </button>
                </nav>
              )}

              <button
                onClick={() => setActiveTab('contact')}
                className="px-3 py-1.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Inquire Now
              </button>
            </header>

            {/* Demo Site Content */}
            <div className="divide-y divide-neutral-100">
              {/* Demo Hero Banner */}
              <div className="relative bg-neutral-900 text-white overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} website preview`}
                  referrerPolicy="no-referrer"
                  className="w-full h-48 sm:h-72 object-cover object-center opacity-85 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent flex flex-col justify-end p-5 sm:p-8">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                    {project.livePreview.badge}
                  </div>
                  <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 max-w-xl">
                    {project.livePreview.heroTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mb-4">
                    {project.livePreview.heroSubtitle}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveTab('contact')}
                      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      Book Consultation <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs text-neutral-300 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {project.livePreview.city}
                    </span>
                  </div>
                </div>
              </div>

              {/* Demo Value Proposition & Services Grid */}
              <div className="p-5 sm:p-8 bg-neutral-50">
                <div className="mb-6">
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                    Signature Services
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-neutral-900 mt-1">
                    Specialized Solutions for Discerning Clients
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {project.livePreview.servicesOffered.map((svc, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-white border border-neutral-200 rounded-xl shadow-xs flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-neutral-900">{svc}</div>
                        <div className="text-[11px] text-neutral-500 mt-0.5">
                          Professional standard service with custom client requirements.
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote Block */}
                <div className="mt-6 p-4 rounded-xl bg-neutral-100 border border-neutral-200/80 text-xs italic text-neutral-700">
                  {project.livePreview.highlightQuote}
                </div>
              </div>

              {/* Demo Interactive Contact & Lead Capture Box */}
              <div className="p-5 sm:p-8 bg-white" id="demo-inquiry-box">
                <div className="max-w-lg mx-auto">
                  <div className="text-center mb-5">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900">
                      Connect with {project.name}
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1">
                      Experience how fast and clean this lead generation form is for prospective clients.
                    </p>
                  </div>

                  {enquirySent ? (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center font-bold mb-2">
                        ✓
                      </div>
                      <div className="text-sm font-bold text-emerald-900">
                        Demo Inquiry Simulated!
                      </div>
                      <p className="text-xs text-emerald-700 mt-1">
                        In a live JustPromot website, inquiries are delivered straight to your email or WhatsApp in seconds.
                      </p>
                      <button
                        onClick={() => setEnquirySent(false)}
                        className="mt-3 text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
                      >
                        Reset demo form
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleDemoEnquiry} className="space-y-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={enquiryName}
                          onChange={(e) => setEnquiryName(e.target.value)}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+91 90000 00000"
                            className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                            Preferred Date / Service
                          </label>
                          <input
                            type="text"
                            placeholder="Consultation"
                            className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs rounded-lg transition-colors"
                      >
                        Submit Test Inquiry
                      </button>
                    </form>
                  )}

                  <div className="flex items-center justify-between text-[11px] text-neutral-500 mt-4 pt-4 border-t border-neutral-100">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-neutral-400" />
                      {project.livePreview.phone}
                    </span>
                    <span>Demo Location: {project.livePreview.city}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Site Footer */}
            <div className="px-6 py-4 bg-neutral-950 text-neutral-400 text-[11px] flex flex-wrap items-center justify-between gap-2">
              <div>© 2026 {project.name}. Sample demonstration layout.</div>
              <div className="text-neutral-500">Built by JustPromot Website Services</div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Conversion Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-neutral-950 border-t border-neutral-800">
          <div className="flex items-center gap-2 text-xs text-neutral-300">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Impressed by this sample? We can create a tailored website for your business.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onSelectServiceAndContact('Website Development');
              }}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            >
              Build My Website Like This <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoViewerModal;
