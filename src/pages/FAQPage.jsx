import { useState } from 'react';
import Accordion from '../components/Accordion';
import { frequentlyAskedQuestions } from '../data';

const FAQPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-custom-gradient font-poppins min-h-[800px]">
      <div className="text-white max-container text-center py-12">
        <p className="uppercase text-6xl max-sm:text-4xl font-semibold ">
          FREQUENTLY ASKED <span className="text-custom-gold"> QUESTIONS </span>
        </p>
      </div>
      <div className="max-container pb-12">
        <div className="flex flex-col gap-8 px-24 max-sm:px-0">
          {frequentlyAskedQuestions.map((accordion, idx) => (
            <Accordion accordion={accordion} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
