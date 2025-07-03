
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

const TabCardSection = () => {
  const [activeTab, setActiveTab] = useState("campaign-strategy");
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: "start",
    duration: 20
  });

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

  const handleTabClick = (tabId: string) => {
    console.log("Tab clicked:", tabId);
    setActiveTab(tabId);
    const tabIndex = cardData.findIndex(card => card.id === tabId);
    console.log("Scrolling to index:", tabIndex);
    if (emblaApi && tabIndex !== -1) {
      emblaApi.scrollTo(tabIndex);
    }
  };

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        const selectedIndex = emblaApi.selectedScrollSnap();
        console.log("Carousel selected index:", selectedIndex);
        setActiveTab(cardData[selectedIndex].id);
      };

      emblaApi.on('select', onSelect);
      emblaApi.on('reInit', onSelect);

      return () => {
        emblaApi.off('select', onSelect);
        emblaApi.off('reInit', onSelect);
      };
    }
  }, [emblaApi, cardData]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Tabs value={activeTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {cardData.map((card) => (
              <TabsTrigger 
                key={card.id} 
                value={card.id}
                onClick={() => handleTabClick(card.id)}
                className="text-xs sm:text-sm px-2 py-2 transition-all duration-200"
              >
                {card.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <Carousel ref={emblaRef} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {cardData.map((card) => (
                <CarouselItem key={card.id} className="pl-2 md:pl-4">
                  <Card className="min-h-[300px] transition-all duration-300 hover:shadow-lg">
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
                          <div className="w-32 h-32 bg-teal-200 transform rotate-45 rounded-lg shadow-lg transition-transform duration-300 hover:rotate-[50deg] hover:scale-105"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Tabs>
      </div>
    </section>
  );
};

export default TabCardSection;
