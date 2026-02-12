
import React from 'react';

const SectionPlaceholder = ({ id, title, bgColor = 'bg-darkBg' }) => {
  return (
    <section
      id={id}
      className={`min-h-screen w-full flex items-center justify-center ${bgColor} text-white border-t border-white/10`}
    >
      <div className="text-center">
        <h2 className="font-tech text-4xl md:text-6xl text-f1-red mb-4">{title}</h2>
        <p className="font-nav text-xl opacity-70">Content coming soon...</p>
      </div>
    </section>
  );
};

export default SectionPlaceholder;
