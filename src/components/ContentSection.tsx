import React from 'react';

interface ContentSectionProps {
  title: string;
  content: string | React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, content }) => {
  
  const sanitizeTitleId = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, '-')
  }
  
  return (
    <section className="content-section">
      <h2 id={sanitizeTitleId(title)}>{title}</h2>
      <div>{content}</div>
    </section>
  );
};

export default ContentSection;
