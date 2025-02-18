import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  { question: "somethingsomethingsomethingsomething?", answer: "somethingsomethingsomethingsomethingsomething" },
  { question: "somethingsomethingsomethingsomething?", answer: "somethingsomethingsomethingsomethingsomething" },
  { question: "somethingsomethingsomething?", answer: "somethingsomethingsomethingsomethingsomething" },
  { question: "somethingsomethingsomething?", answer: "somethingsomethingsomethingsomethingsomething" },
  { question: "somethingsomethingsomething?", answer: "somethingsomethingsomethingsomethingsomething" },
  { question: "somethingsomethingsomething?", answer: "somethingsomethingsomethingsomethingsomething" },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <div className="text-5xl font-semibold text-center">FAQ</div>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300 pb-4 p-2">
            <div 
              onClick={() => toggleAnswer(index)} 
              className="cursor-pointer text-lg font-medium text-black hover:text-blue-800"
            >
              {item.question}
            </div>
            {openIndex === index && (
              <div className="text-gray-800">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
