import React from 'react';

interface ContentSectionProps {
  title: string;
  content: string | React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, content }) => {
  return (
    <section className="content-section">
      <h2>{title}</h2>
      <div>{content}</div>
    </section>
  );
};

export default ContentSection;
