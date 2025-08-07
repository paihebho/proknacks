import React from "react";

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Simple Process
          </h2>
          <p className="text-xl text-gray-600">
            From consultation to completion in 4 easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Consultation",
              description: "We discuss your vision and assess your space",
            },
            {
              step: "02",
              title: "Design & Quote",
              description: "Receive detailed plans and transparent pricing",
            },
            {
              step: "03",
              title: "Construction",
              description: "Expert craftsmen bring your vision to life",
            },
            {
              step: "04",
              title: "Final Walkthrough",
              description: "Ensure everything exceeds your expectations",
            },
          ].map((item, index) => (
            <div key={index} className="relative text-center">
              <div className="relative z-10 bg-gradient-to-br from-purple-600 to-cyan-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
              {index < 3 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-300 to-cyan-300 transform translate-x-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
