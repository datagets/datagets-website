
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HumanoidSection from "@/components/HumanoidSection";
import SpecsSection from "@/components/SpecsSection";
import DetailsSection from "@/components/DetailsSection";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import MadeByHumans from "@/components/MadeByHumans";
import Footer from "@/components/Footer";
import PersonalizationRibbon from "@/components/PersonalizationRibbon";
import CRMMarketingSection from "@/components/CRMMarketingSection";

const Index = () => {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="space-y-0">
        {/* Hero Section - Top */}
        <Hero />
        
        {/* Primary Offering - Ribbon 1: Personalization */}
        <PersonalizationRibbon />

        {/* Primary Offering - Ribbon 2: CRM Marketing 2.0 */}
        <CRMMarketingSection />

        {/* Secondary Hero/Content Block */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Transform Your Business</h2>
                <p className="text-gray-600 mb-6">
                  Leverage cutting-edge AI technology to revolutionize your data processing 
                  and customer engagement strategies.
                </p>
                <div className="flex gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="w-64 h-64 bg-teal-200 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-teal-800 font-medium">Visual Element</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Block with Side Layout */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3">
                <div className="w-48 h-48 bg-teal-300 transform rotate-45 mx-auto mb-8"></div>
              </div>
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold mb-4">Advanced Analytics</h2>
                <p className="text-gray-600 mb-6">
                  Our AI-powered analytics platform provides deep insights into your customer 
                  behavior and market trends, enabling data-driven decision making.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-orange-200 p-4 rounded-lg text-center">
                    <span className="text-orange-800 font-medium">Metric 1</span>
                  </div>
                  <div className="bg-orange-200 p-4 rounded-lg text-center">
                    <span className="text-orange-800 font-medium">Metric 2</span>
                  </div>
                  <div className="bg-orange-200 p-4 rounded-lg text-center">
                    <span className="text-orange-800 font-medium">Metric 3</span>
                  </div>
                  <div className="bg-orange-200 p-4 rounded-lg text-center">
                    <span className="text-orange-800 font-medium">Metric 4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Card Grid Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="bg-teal-100 p-6 rounded-lg">
                  <div className="w-full h-32 bg-teal-200 rounded mb-4"></div>
                  <h3 className="font-semibold text-teal-800">Solution {item}</h3>
                  <p className="text-sm text-teal-600 mt-2">
                    Brief description of the solution and its benefits.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two Column Layout */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Feature Highlight</h3>
                <p className="text-gray-600 mb-6">
                  Detailed explanation of key features and capabilities that set us apart 
                  from the competition.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Advanced AI Processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Real-time Analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Seamless Integration</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Implementation</h3>
                <p className="text-gray-600 mb-6">
                  Step-by-step process for implementing our solution in your existing 
                  infrastructure.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <span className="text-gray-700">Initial Assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-gray-700">Custom Configuration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <span className="text-gray-700">Deployment & Training</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards with Visual Elements */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-orange-50 p-8 rounded-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="bg-orange-200 p-4 rounded-lg aspect-square flex items-center justify-center">
                        <span className="text-orange-800 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h2 className="text-3xl font-bold mb-4">Comprehensive Dashboard</h2>
                  <p className="text-gray-600 mb-6">
                    Monitor all your key metrics and performance indicators in one centralized 
                    dashboard. Get real-time insights and make informed decisions quickly.
                  </p>
                  <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                    View Dashboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Keep existing sections */}
        <HumanoidSection />
        <SpecsSection />
        <DetailsSection />
        <ImageShowcaseSection />
        <Features />
        <Testimonials />
        <Newsletter />
        <MadeByHumans />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
