import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

interface ContactProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ selectedService, onServiceChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: selectedService || 'Website Development',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync selectedService prop with local state
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'service') {
      onServiceChange(value);
    }
  };

  const constructEmailBody = () => {
    return `Hello JustPromot Team,

I would like to make an enquiry regarding digital services for my business.

Details:
• Name: ${formData.name || 'Not specified'}
• Business Name: ${formData.businessName || 'Not specified'}
• Phone: ${formData.phone || 'Not specified'}
• Email: ${formData.email || 'Not specified'}
• Service Required: ${formData.service}

Message:
${formData.message || 'I am interested in discussing your digital solutions for my business.'}

Looking forward to your response.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `New Enquiry: ${formData.service} - ${formData.businessName || formData.name}`
    );
    const body = encodeURIComponent(constructEmailBody());
    const mailtoUrl = `mailto:justpromot@gmail.com?subject=${subject}&body=${body}`;

    // Open default mail client
    window.location.href = mailtoUrl;

    // Show persistent confirmation state
    setSubmitted(true);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(constructEmailBody());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi JustPromot, I would like to inquire about ${formData.service}. My name is ${formData.name || 'a prospective client'}.`
    );
    return `https://wa.me/9182555869?text=${text}`;
  };

  const getGmailWebUrl = () => {
    const subject = encodeURIComponent(
      `New Enquiry: ${formData.service} - ${formData.businessName || formData.name}`
    );
    const body = encodeURIComponent(constructEmailBody());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=justpromot@gmail.com&su=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-neutral-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Overview */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 rounded-full">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4 leading-tight">
                Let's Build Your Digital Presence
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
                Have a business idea, need a website, or want to improve your online presence? Let's talk.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href="mailto:justpromot@gmail.com"
                className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Direct Email</div>
                  <div className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    justpromot@gmail.com
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Click to send an email</div>
                </div>
              </a>

              <a
                href="tel:+9182555869"
                className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Phone & WhatsApp</div>
                  <div className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    +91 82555 86589
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Mon to Sat · Direct Support</div>
                </div>
              </a>
            </div>

            {/* Practical Service Commitment */}
            <div className="p-5 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 text-xs text-neutral-400 space-y-2">
              <div className="font-semibold text-neutral-200 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>What Happens When You Reach Out?</span>
              </div>
              <p className="leading-relaxed">
                We review your current online footprint, understand your commercial goals, and recommend
                a practical plan without technical jargon or hard sales pressure.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send an Enquiry
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Fill in your project details below. Clicking "Send Enquiry" prepares a direct email to our team.
              </p>

              {submitted ? (
                <div className="space-y-6">
                  <div className="p-6 bg-emerald-950/60 border border-emerald-800 rounded-2xl text-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      Enquiry Prepared!
                    </h4>
                    <p className="text-xs text-neutral-300 mt-2 max-w-md mx-auto leading-relaxed">
                      Your default email application should have opened with your enquiry details addressed to{' '}
                      <span className="text-emerald-400 font-mono">justpromot@gmail.com</span>.
                    </p>
                  </div>

                  {/* Backup / Direct Options */}
                  <div className="space-y-3">
                    <div className="text-xs text-neutral-400 text-center font-medium">
                      If your email app didn't open automatically, use any of these direct methods:
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <a
                        href={getGmailWebUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl text-center text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-red-400" />
                        <span>Open in Gmail</span>
                      </a>

                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-700/80 rounded-xl text-center text-xs font-semibold text-emerald-200 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Send WhatsApp</span>
                      </a>

                      <button
                        onClick={handleCopyText}
                        className="p-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl text-center text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{copied ? 'Copied Details!' : 'Copy Text'}</span>
                      </button>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full text-xs text-neutral-400 hover:text-white pt-2 underline text-center block"
                    >
                      Edit details or submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Sharma"
                        className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-neutral-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Business Name
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Royal Interiors"
                        className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-neutral-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@business.com"
                        className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-neutral-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Phone Number <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-neutral-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Service Required <span className="text-emerald-400">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Google Business Profile">Google Business Profile</option>
                      <option value="Reel Services">Reel Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us briefly about your business goals, current website status, or requirements..."
                      className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-neutral-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Enquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center">
                    Note: Submitting will generate an email directly addressed to justpromot@gmail.com.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
