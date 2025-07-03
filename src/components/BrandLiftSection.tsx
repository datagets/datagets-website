
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const BrandLiftSection = () => {
  const brandCards = [
    { id: 1, title: "Brand Awareness", color: "bg-teal-200" },
    { id: 2, title: "Customer Engagement", color: "bg-teal-300" },
    { id: 3, title: "Market Reach", color: "bg-teal-200" },
    { id: 4, title: "Brand Recognition", color: "bg-teal-300" },
    { id: 5, title: "Customer Loyalty", color: "bg-teal-200" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Brand Lift (Rev as Heading)</h2>
        </div>
        
        <Card className="max-w-2xl mx-auto bg-gray-50 border-2 border-gray-200">
          <CardContent className="p-8">
            <div className="flex flex-col gap-4">
              {brandCards.map((card) => (
                <div
                  key={card.id}
                  className={`${card.color} rounded-xl p-6 h-20 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-md`}
                >
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-700">
                      {card.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BrandLiftSection;
