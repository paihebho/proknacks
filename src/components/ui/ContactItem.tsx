import React from "react";

function ContactItem({
  icon,
  title,
  value,

  hoverColor,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  gradient: string;
  hoverColor?: string;
}) {
  return (
    <div className="flex items-center group cursor-pointer">
      <div
        className={`flex items-start justify-start mr-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p
          className={`text-white font-semibold ${
            hoverColor ? `group-hover:text-${hoverColor}` : ""
          } transition-colors`}>
          {value}
        </p>
      </div>
    </div>
  );
}

export default ContactItem;
