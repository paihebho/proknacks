import React from "react";

function SectionHeading({
  title,
  gradient,
}: {
  title: string;
  gradient: string;
}) {
  return (
    <h4 className="text-xl font-bold text-white mb-8 relative">
      {title}
      <div
        className={`absolute -bottom-4 left-0 w-12 h-0.5 bg-[#fe9700] rounded-full`}></div>
      {/* className={`absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r ${gradient} rounded-full`}></div> */}
    </h4>
  );
}

export default SectionHeading;
