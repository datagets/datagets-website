
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WhyDataGetsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const cards = [
    {
      id: 1,
      title: "Advanced Analytics",
      description: "Powerful data processing and analytics capabilities that transform your raw data into actionable insights.",
      color: "bg-blue-50"
    },
    {
      id: 2,
      title: "Real-time Processing",
      description: "Process and analyze data in real-time to make instant decisions and stay ahead of the competition.",
      color: "bg-green-50"
    },
    {
      id: 3,
      title: "Seamless Integration",
      description: "Easy integration with your existing systems and workflows without disrupting your current operations.",
      color: "bg-purple-50"
    },
    {
      id: 4,
      title: "Scalable Solutions",
      description: "Built to scale with your business needs, from startup to enterprise-level data requirements.",
      color: "bg-orange-50"
    }
  ];

  const totalPages = Math.ceil(cards.length / 2);
  const currentCards = cards.slice(currentPage * 2, (currentPage + 1) * 2);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-lg p-4 mb-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Why DataGets</h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {currentCards.map((card) => (
            <Card key={card.id} className={`${card.color} border-0 shadow-md h-64`}>
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prevPage}
            className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            disabled={totalPages <= 1}
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentPage ? 'bg-gray-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextPage}
            className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            disabled={totalPages <= 1}
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyDataGetsSection;
