
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className="overflow-hidden relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" 
      id="hero" 
      style={{
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div 
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-3 sm:mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white mr-2 text-xs">AI</span>
              <span>Data-Driven Solutions</span>
            </div>
            
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight opacity-0 animate-fade-in text-gray-900" 
              style={{ animationDelay: "0.3s" }}
            >
              Activate Your 1P Data.<br className="hidden sm:inline" />
              <span className="text-blue-600">Drive Personalization.</span><br className="hidden sm:inline" />
              <span className="text-purple-600">Increase Revenue</span>
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-700 font-normal text-base sm:text-lg text-left"
            >
              AI-based Productized Solution that blends a scalable product with domain expertise for eCommerce and digital marketing
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <button 
                className="flex items-center justify-center group w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Product Demo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button 
                className="flex items-center justify-center group w-full sm:w-auto text-center bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-6 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-200"
              >
                Talk to an Expert
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            {!showVideo ? (
              <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-white">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 p-8 flex items-center justify-center">
                    {/* AI Pipeline Illustration */}
                    <div className="w-full max-w-md space-y-6">
                      {/* Data Sources */}
                      <div className="flex justify-center space-x-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                          <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                        </div>
                        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                          <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                        </div>
                        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                          <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                        </div>
                      </div>
                      
                      {/* Flow Arrows */}
                      <div className="flex justify-center">
                        <ArrowRight className="w-8 h-8 text-gray-400" />
                      </div>
                      
                      {/* AI Processing */}
                      <div className="flex justify-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-lg">AI</span>
                        </div>
                      </div>
                      
                      {/* Output Arrows */}
                      <div className="flex justify-center space-x-8">
                        <ArrowRight className="w-6 h-6 text-gray-400 rotate-45" />
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                        <ArrowRight className="w-6 h-6 text-gray-400 -rotate-45" />
                      </div>
                      
                      {/* Touchpoints */}
                      <div className="flex justify-center space-x-4">
                        <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">📧</span>
                        </div>
                        <div className="w-10 h-10 bg-red-400 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">📱</span>
                        </div>
                        <div className="w-10 h-10 bg-teal-400 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">💻</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer" onClick={() => setShowVideo(true)}>
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-105 transition-all">
                      <Play className="w-6 h-6 text-blue-600 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative z-10 animate-fade-in">
                <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                  <div className="aspect-video bg-black flex items-center justify-center">
                    <p className="text-white text-center">
                      Video player placeholder<br />
                      <span className="text-sm text-gray-400">60-second explainer video would be embedded here</span>
                    </p>
                  </div>
                  <button 
                    onClick={() => setShowVideo(false)}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
