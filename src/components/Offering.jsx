import { offerings } from '../data';

const Offering = () => {
  const { title, offers, subTitle, textBtn } = offerings;

  return (
    <div className="bg-custom-black h-full font-poppins py-12">
      <div className="max-container flex flex-col gap-8">
        <div className="w-full text-center">
          <p className="uppercase text-white text-4xl font-bold max-sm:text-2xl">
            Currently <span className="text-custom-gold">Offering</span>
          </p>
        </div>
        <ul className="flex gap-8 max-lg:flex-col">
          {offers.map((offer, index) => (
            <li
              key={index}
              className="flex flex-1 flex-col text-center text-white gap-2"
            >
              <p className="text-3xl font-bold uppercase max-sm:text-xl">
                {offer.title}
              </p>
              <p className="text-lg text-neutral-300 px-2 max-sm:text-base">
                {offer.description}
              </p>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <button className="uppercase font-bold text-white text-lg py-3 px-6 bg-custom-gold max-sm:text-sm">
            {textBtn}
          </button>
        </div>
        <div className="w-full text-center mt-2 px-32 max-lg:p-0">
          <p className="text-white text-lg max-sm:text-base">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Offering;
