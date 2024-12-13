import React from 'react';

interface ContentSectionProps {
  title: string;
  content: string | React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, content }) => {
  // Function to generate sanitized ID for the title
  const sanitizeTitleId = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <section className="mb-8">
      <h2
        id={sanitizeTitleId(title)}
        className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4"
      >
        {title}
      </h2>
      <div className="text-base text-gray-700 space-y-4">
        <div className="text-left">
          {content}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
