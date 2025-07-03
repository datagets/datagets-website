
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const TabCardSection = () => {
  const cardData = [
    {
      id: "campaign-strategy",
      title: "Campaign Strategy & Planning",
      heading: "Strategic Campaign Planning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      id: "optimized-segmentation",
      title: "Optimized Segmentation",
      heading: "Advanced Segmentation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      id: "personalized-content",
      title: "Personalized Content",
      heading: "Content Personalization",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      id: "intelligent-reporting",
      title: "Intelligent Reporting",
      heading: "Smart Analytics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="campaign-strategy" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {cardData.map((card) => (
              <TabsTrigger 
                key={card.id} 
                value={card.id}
                className="text-xs sm:text-sm px-2 py-2"
              >
                {card.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {cardData.map((card) => (
            <TabsContent key={card.id} value={card.id}>
              <Card className="min-h-[300px]">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Text Content - Left Side */}
                    <div className="md:w-2/3 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        {card.heading}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                    
                    {/* Image - Right Side */}
                    <div className="md:w-1/3 flex items-center justify-center p-8">
                      <div className="w-32 h-32 bg-teal-200 transform rotate-45 rounded-lg shadow-lg"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TabCardSection;
