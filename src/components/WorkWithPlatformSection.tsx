
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WorkWithPlatformSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="bg-white rounded-lg p-4 mb-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Work with Platform</h2>
        </div>

        {/* Main Container Card */}
        <Card className="bg-white border-2 border-gray-200 shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left side - Diagonal Cards */}
              <div className="lg:w-1/2 order-2 lg:order-1 relative h-96 flex items-center justify-center">
                <div className="relative w-full h-full max-w-md">
                  {/* Card 1 - Top Left */}
                  <div className="absolute bg-orange-400 rounded-lg w-24 h-32 top-8 left-12 transform rotate-12 shadow-lg hover:rotate-6 transition-transform duration-300"></div>
                  
                  {/* Card 2 - Top Right */}
                  <div className="absolute bg-orange-300 rounded-lg w-24 h-32 top-4 right-8 transform -rotate-6 shadow-lg hover:rotate-0 transition-transform duration-300"></div>
                  
                  {/* Card 3 - Center */}
                  <div className="absolute bg-orange-500 rounded-lg w-24 h-32 top-24 left-1/2 transform -translate-x-1/2 rotate-3 shadow-lg hover:rotate-0 transition-transform duration-300 z-10"></div>
                  
                  {/* Card 4 - Bottom Left */}
                  <div className="absolute bg-orange-200 rounded-lg w-24 h-32 bottom-8 left-8 transform rotate-8 shadow-lg hover:rotate-3 transition-transform duration-300"></div>
                  
                  {/* Card 5 - Bottom Right */}
                  <div className="absolute bg-orange-400 rounded-lg w-24 h-32 bottom-12 right-12 transform -rotate-12 shadow-lg hover:-rotate-6 transition-transform duration-300"></div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="lg:w-1/2 order-1 lg:order-2 space-y-6">
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    Seamless Integration
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Connect your existing tools and workflows with our powerful platform. 
                    Experience effortless data synchronization and streamlined operations 
                    that scale with your business needs.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Real-time data processing and analytics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Multi-platform compatibility</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Advanced security and compliance</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WorkWithPlatformSection;
