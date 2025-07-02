
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, MessageSquare, BarChart3 } from "lucide-react";

const CRMMarketingSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-orange-600" />,
      title: "Campaign Strategy & Planning",
      description: "Whether it is a completely new campaign idea or a new iteration for a regular campaign, Datagets finds the most optimal strategy for you, while giving you every opportunity to customize"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Optimized Segmentation",
      description: "Datagets not only picks high performing segments that have worked well in the past, but also brings new green-shoot segments that fall under your radar"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
      title: "Personalized Content",
      description: "For each target segment, Datagets curates the right tonality, product features and offers that would bring the highest engagement and revenue"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
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

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Cards Section - Left Side */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-3">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 text-center">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Agentic AI Visualization - Right Side */}
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-orange-50 to-purple-50 p-8 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Agentic AI Engine</h3>
                <p className="text-gray-600">Intelligent automation that thinks and acts</p>
              </div>
              
              {/* AI Flow Visualization */}
              <div className="space-y-6">
                {/* Input Layer */}
                <div className="flex justify-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Data</span>
                  </div>
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Rules</span>
                  </div>
                  <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Goals</span>
                  </div>
                </div>

                {/* Processing Layer */}
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex flex-col items-center justify-center">
                    <Brain className="w-8 h-8 text-white mb-1" />
                    <span className="text-white font-bold text-xs">Agent</span>
                  </div>
                </div>

                {/* Output Layer */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-orange-200">
                    <div className="text-center">
                      <MessageSquare className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-700">Smart Campaigns</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-purple-200">
                    <div className="text-center">
                      <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-700">Targeted Segments</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-blue-200">
                    <div className="text-center">
                      <BarChart3 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-700">Real-time Insights</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-green-200">
                    <div className="text-center">
                      <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-700">Revenue Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMMarketingSection;
