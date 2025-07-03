
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, TrendingUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PersonalizationRibbon = () => {
  const features = [
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Real-time Website and App Personalization",
      description: "Deliver personalized experiences instantly based on user behavior and preferences. Our AI-powered engine analyzes customer interactions in real-time to provide tailored content, product recommendations, and user journeys that increase engagement and conversion rates.",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-600" />,
      title: "Automated and Hyper-personalized Re-targeting",
      description: "Smart re-targeting campaigns that adapt to individual customer journeys. Our advanced algorithms create dynamic audience segments and personalized messaging that brings customers back with relevant offers and content at the perfect moment.",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
      title: "Measurable Lift in 2 Weeks",
      description: "See immediate impact on conversion rates and revenue growth. Our solution provides detailed analytics and performance metrics, showing clear ROI within the first two weeks of implementation with continued optimization over time.",
      color: "bg-green-50 border-green-200"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Incremental Online Revenue through Personalization and Hyper Re-targeting
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your customer engagement with AI-powered personalization that delivers measurable results
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <Card className={`${feature.color} border-2 hover:shadow-xl transition-shadow h-full`}>
                      <CardHeader className="text-center pb-6">
                        <div className="flex justify-center mb-6">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-2xl font-semibold text-gray-900 mb-4">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                          {feature.description}
                        </p>
                        <Button variant="outline" className="group text-lg px-8 py-3">
                          Learn More
                          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PersonalizationRibbon;
