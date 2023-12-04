import { useEffect, useRef, useState } from 'react';

const CoachAccordion = ({ coachAccordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.height = isOpen
      ? `${contentRef.current.scrollHeight}px`
      : '0';
  }, [isOpen]);

  return (
    <div
      className="flex flex-col max-w-[20rem] min-h-[100px] mt-12"
      key={coachAccordion.name}
    >
      <div className="flex justify-center">
        <img
          className="bg-banner4 h-[10rem] w-[10rem] bg-cover bg-center rounded-full "
          placeholder="head coach image"
          role="presentation"
          sizes="(max-width: 800px) 100vw, 59vw"
          decoding="async"
          fetchpriority="high"
        />
      </div>
      <div>
        <p className="uppercase text-custom-gold text-3xl font-semibold mt-4 ">
          {coachAccordion.name}
        </p>
        <p className="text-lg text-white font-semibold ">
          Certified Skills Trainer
        </p>

        <div>
          <div className="text-white min-h-[0px] flex items-center justify-between px-[1.9rem]" />
          <div
            ref={contentRef}
            className={`overflow-hidden flex flex-col text-neutral-300  text-left transition-all duration-500 ${
              isOpen ? 'my-2' : 'my-0'
            }`}
          >
            <p className="px-2 py-1 border-[1px] border-neutral-700 rounded-t-md">
              <span className="text-custom-gold">Name: </span>
              {coachAccordion.name}
            </p>
            <p className="px-2 py-1 border-[1px] border-neutral-700">
              <span className="text-custom-gold">City Address: </span>
              {coachAccordion.cityAddress}
            </p>
            <p className="px-2 py-1 border-[1px] border-neutral-700">
              <span className="text-custom-gold">Schools/Team Clubs: </span>
              {coachAccordion.teams}
            </p>
            <p className="px-2 py-1 border-[1px] border-neutral-700">
              <span className="text-custom-gold">Leagues: </span>
              {coachAccordion.leagues}
            </p>
            <p className="px-2 py-1 border-[1px] border-neutral-700">
              <span className="text-custom-gold">Basketball Positions: </span>
              {coachAccordion.positions}
            </p>
            <p className="px-2 py-1 border-[1px] border-neutral-700">
              <span className="text-custom-gold">Specialty: </span>
              {coachAccordion.specialty}
            </p>
            <p className="px-2 py-1 border-[1px] border-neutral-700">
              <span className="text-custom-gold">Starting Year: </span>
              {coachAccordion.startingYear}
            </p>

            <p className="px-2 py-1 border-[2px] border-neutral-700 rounded-b-md">
              <span className="text-custom-gold">Certifications: </span>
              {coachAccordion.certifications}
            </p>
          </div>
        </div>

        <button
          className="px-4 py-2 bg-custom-gold my-2 rounded-sm font-semibold"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {isOpen ? 'SHOW LESS' : 'SHOW MORE'}
        </button>
      </div>
    </div>
  );
};

export default CoachAccordion;
