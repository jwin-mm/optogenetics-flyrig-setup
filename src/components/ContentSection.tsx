import React from 'react';

interface ContentSectionProps {
  title: string;
  content: string | React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, content }) => {
  const sanitizeTitleId = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <section className="mb-8 ml-20 max-w-[800px] mx-auto">
      <h2
        id={sanitizeTitleId(title)}
        className="text-4xl font-semibold border-b-2 text-left border-gray-300 pb-2 mb-4 mt-26"
      >
        {title}
      </h2>
      <div className="my-8">

    <div className="text-2xl text-left leading-relaxed">
      {content}
    </div>
  </div>
    </section>
  );
};

export default ContentSection;
