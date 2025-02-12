import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
      <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
        {children}
      </span>
    </h2>
  );
}