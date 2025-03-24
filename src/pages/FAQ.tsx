import { useState } from 'react';

const faqData = [
  { question: "Where can I find something that i need to find?", answer: "You can find it somewhere" },
  { question: "Why am i typing this questions something something?", answer: "I do not have a clue, maybe John knows" },
  { question: "Where can I find somethimg?", answer: "You can find it somewhere" },
  { question: "Why am i typing this questions?", answer: "I do not have a clue, maybe John knows" },
  { question: "Where can I find somethimg, again and again?", answer: "You can find it somewhere" },
  { question: "Why am i typing this questions, longer and very long?", answer: "I do not have a clue, maybe John knows" },
  { question: "Have more questions? Contact me!", answer: null },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    if (!faqData[index].answer) {
      window.location.href = "/optogenetics-flyrig-setup/contact"; 
    } else {
      setOpenIndex(openIndex === index ? null : index); 
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-5xl font-semibold text-center text-white-900 mb-16">FAQ</h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`pb-4 p-2 ${index < faqData.length - 1 ? 'border-b border-gray-300' : ''}`}
          >

            <div
              onClick={() => toggleAnswer(index)}
              className={`cursor-pointer text-lg font-medium hover:text-blue-500 ${
                !item.answer ? 'text-blue-400' : 'text-white-900'
              }`}
            >
              {item.question}
            </div>

            {item.answer && (
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? 'opacity-100 scale-y-100 pt-2'
                    : 'opacity-0 scale-y-0 h-0'
                } text-white-700`}
              >
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