/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import OurWork from './components/OurWork';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DemoViewerModal from './components/DemoViewerModal';
import { DemoProject } from './data/projects';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState('Website Development');
  const [activeDemoProject, setActiveDemoProject] = useState<DemoProject | null>(null);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  // Pre-select service and scroll to contact
  const handleSelectServiceAndContact = (serviceName: string) => {
    setSelectedService(serviceName);
    handleNavigate('contact');
  };

  // Open demo modal
  const handleOpenDemo = (project: DemoProject) => {
    setActiveDemoProject(project);
  };

  // Intersection observer to track current visible section
  useEffect(() => {
    const sections = ['home', 'services', 'about', 'our-work', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. HOME / HERO */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. SERVICES */}
        <Services onSelectServiceAndContact={handleSelectServiceAndContact} />

        {/* 3. ABOUT */}
        <About />

        {/* 4. OUR WORK / DEMO PROJECTS */}
        <OurWork
          onOpenDemo={handleOpenDemo}
          onSelectServiceAndContact={handleSelectServiceAndContact}
        />

        {/* 5. SAMPLE TESTIMONIALS */}
        <Testimonials />

        {/* 6. CONTACT */}
        <Contact
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectServiceAndContact={handleSelectServiceAndContact}
      />

      {/* Interactive Demo Website Viewer Modal */}
      <DemoViewerModal
        project={activeDemoProject}
        onClose={() => setActiveDemoProject(null)}
        onSelectServiceAndContact={handleSelectServiceAndContact}
      />

      {/* Floating Action Button for Instant WhatsApp / Call on Mobile */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-2.5 sm:hidden">
        <a
          href="https://wa.me/9182555869?text=Hi%20JustPromot,%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-emerald-500 text-neutral-950 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-6 h-6 fill-neutral-950" />
        </a>
        <a
          href="tel:+9182555869"
          aria-label="Direct Phone Call"
          className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform border border-neutral-700"
        >
          <Phone className="w-5 h-5 text-emerald-400" />
        </a>
      </div>
    </div>
  );
}
