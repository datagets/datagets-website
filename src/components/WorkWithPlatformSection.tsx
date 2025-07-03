
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

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
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left side - Diagonal Cards */}
              <div className="lg:w-1/2 relative h-80 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Card 1 - Top */}
                  <div className="absolute bg-orange-200 rounded-lg w-20 h-28 top-4 left-8 transform rotate-12 shadow-md"></div>
                  
                  {/* Card 2 - Top Right */}
                  <div className="absolute bg-orange-300 rounded-lg w-20 h-28 top-8 left-32 transform rotate-6 shadow-md"></div>
                  
                  {/* Card 3 - Center */}
                  <div className="absolute bg-orange-200 rounded-lg w-20 h-28 top-20 left-56 transform -rotate-3 shadow-md"></div>
                  
                  {/* Card 4 - Bottom Left */}
                  <div className="absolute bg-orange-300 rounded-lg w-20 h-28 bottom-20 left-4 transform rotate-8 shadow-md"></div>
                  
                  {/* Card 5 - Bottom Center */}
                  <div className="absolute bg-orange-200 rounded-lg w-20 h-28 bottom-8 left-24 transform -rotate-2 shadow-md"></div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Heading</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WorkWithPlatformSection;
