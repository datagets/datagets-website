
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, MessageSquare, BarChart3 } from "lucide-react";

const CRMMarketingSection = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-orange-600" />,
      title: "Campaign Strategy & Planning",
      description: "Whether it is a completely new campaign idea or a new iteration for a regular campaign, Datagets finds the most optimal strategy for you, while giving you every opportunity to customize"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Optimized Segmentation",
      description: "Datagets not only picks high performing segments that have worked well in the past, but also brings new green-shoot segments that fall under your radar"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-600" />,
      title: "Personalized Content",
      description: "For each target segment, Datagets curates the right tonality, product features and offers that would bring the highest engagement and revenue"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-600" />,
      title: "Intelligent Reporting & Analytics",
      description: "Datagets brings detailed reporting that tells you WHAT happened with your campaigns but more importantly leverages AI to explain WHY it happened"
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

        {/* Single Large Card */}
        <div className="max-w-7xl mx-auto">
          <Card className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Feature Cards */}
              <div className="lg:w-1/2 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                  {features.map((feature, index) => (
                    <Card key={index} className="border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-200 bg-white">
                      <CardHeader className="pb-3">
                        <div className="flex justify-center mb-2">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-sm font-semibold text-gray-900 text-center leading-tight">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-xs leading-relaxed text-center">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="lg:w-1/2 relative">
                <div className="h-full min-h-[400px] lg:min-h-[500px]">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Team collaboration and data visualization"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CRMMarketingSection;
