
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

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section 
      className="overflow-hidden relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800" 
      id="hero" 
      style={{
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px',
        backgroundImage: `linear-gradient(135deg, rgba(147, 51, 234, 0.9) 0%, rgba(126, 34, 206, 0.8) 50%, rgba(107, 33, 168, 0.9) 100%), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6052&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-3 sm:mb-6 opacity-0 animate-fade-in" style={{
              animationDelay: "0.1s"
            }}>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-purple-600 mr-2 text-xs font-bold">AI</span>
              <span>Data-Driven Solutions</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight opacity-0 animate-fade-in text-white" style={{
              animationDelay: "0.3s"
            }}>
              Activate Your 1P Data.<br className="hidden sm:inline" />
              <span className="text-blue-200">Drive Personalization.</span><br className="hidden sm:inline" />
            </h1>
            
            <p style={{
              animationDelay: "0.5s"
            }} className="mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-white/90 font-normal text-base sm:text-lg text-left">
              AI-based Productized Solution that blends a scalable product with domain expertise for eCommerce and digital marketing
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{
              animationDelay: "0.7s"
            }}>
              <button className="flex items-center justify-center group w-full sm:w-auto text-center bg-white hover:bg-gray-100 text-purple-700 font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Product Demo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="flex items-center justify-center group w-full sm:w-auto text-center bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-6 rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-200 backdrop-blur-sm">
                Talk to an Expert
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            {!showVideo ? (
              <div className="relative z-10 animate-fade-in" style={{
                animationDelay: "0.9s"
              }}>
                <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                  <img 
                    ref={imageRef} 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="AI Technology and Data Processing" 
                    className="w-full h-auto aspect-video object-cover" 
                  />
                  
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
                  <button onClick={() => setShowVideo(false)} className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white">
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
