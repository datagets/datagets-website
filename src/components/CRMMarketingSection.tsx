
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Users, MessageSquare, BarChart3 } from "lucide-react";

const CRMMarketingSection = () => {
  const features = [
    {
      id: "strategy",
      icon: <Brain className="w-12 h-12 text-orange-600" />,
      title: "Campaign Strategy & Planning",
      description: "Whether it is a completely new campaign idea or a new iteration for a regular campaign, Datagets finds the most optimal strategy for you, while giving you every opportunity to customize",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "segmentation",
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Optimized Segmentation",
      description: "Datagets not only picks high performing segments that have worked well in the past, but also brings new green-shoot segments that fall under your radar",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "content",
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Personalized Content",
      description: "For each target segment, Datagets curates the right tonality, product features and offers that would bring the highest engagement and revenue",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "analytics",
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: "Intelligent Reporting & Analytics",
      description: "Datagets brings detailed reporting that tells you WHAT happened with your campaigns but more importantly leverages AI to explain WHY it happened",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            CRM Marketing 2.0 powered by Agentic AI
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Magic happens when your brilliant Marketing ideas meet the power of Datagets' agentic AI Platform to deliver highly targeted and personalized campaigns
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="strategy" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {features.map((feature) => (
                <TabsTrigger key={feature.id} value={feature.id} className="text-sm">
                  {feature.title.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id}>
                <Card className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row min-h-[500px]">
                      {/* Left side - Image */}
                      <div className="lg:w-1/2 relative">
                        <img 
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover rounded-l-lg"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-l-lg"></div>
                      </div>

                      {/* Right side - Content */}
                      <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                        <div className="flex items-center mb-6">
                          {feature.icon}
                          <CardTitle className="text-3xl font-bold text-gray-900 ml-4">
                            {feature.title}
                          </CardTitle>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="mt-8">
                          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CRMMarketingSection;
