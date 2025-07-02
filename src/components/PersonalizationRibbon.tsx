
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, TrendingUp } from "lucide-react";

const PersonalizationRibbon = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Real-time Website and App Personalization",
      description: "Deliver personalized experiences instantly based on user behavior and preferences",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Automated and Hyper-personalized Re-targeting",
      description: "Smart re-targeting campaigns that adapt to individual customer journeys",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Measurable Lift in 2 Weeks",
      description: "See immediate impact on conversion rates and revenue growth",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`${feature.color} border-2 hover:shadow-lg transition-shadow`}>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <Button variant="outline" className="group">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalizationRibbon;
