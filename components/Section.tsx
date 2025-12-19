import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full h-full">
        {children}
      </div>
    </section>
  );
};

export default Section;