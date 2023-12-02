import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.height = isOpen
      ? `${contentRef.current.scrollHeight}px`
      : '0';
  }, [isOpen]);

  return (
    <div
      className="cursor-pointer"
      onClick={() => setIsOpen((prevState) => !prevState)}
    >
      <div className={`bg-custom-gradient2 ${isOpen ? 'pb-6' : ''}`}>
        <div className="text-white min-h-[60px] flex items-center justify-between px-[1.9rem]">
          <p className="text-xl font-semibold py-4 max-sm:text-base">
            {accordion.question}
          </p>
          <div>
            {isOpen ? (
              <FontAwesomeIcon
                icon={faCircleChevronUp}
                className="text-custom-gold text-[2rem] max-sm:text-[1.5rem]"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCircleChevronDown}
                className="text-custom-gold text-[2rem] max-sm:text-[1.5rem]"
              />
            )}
          </div>
        </div>

        <div
          ref={contentRef}
          className={`bg-custom-gradient2 overflow-hidden flex transition-all px-[1.9rem]`}
        >
          <div className="mt-2 text-white max-sm:text-sm text-left">
            {accordion.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
