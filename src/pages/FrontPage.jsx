import { Link } from 'react-router-dom';
import { banner } from '../data';
import { offerings } from '../data';

const FrontPage = () => {
  const { title1, title2, title3, textBtn } = banner;
  const { offers, subTitle } = offerings;

  return (
    <>
      <div className="bg-black font-poppins h-[700px]">
        <div className="max-container mx-auto h-full max-lg:p-0">
          <div className="flex items-center h-full relative -space-x-40 lg:-space-x-24">
            <div
              className="flex-1 z-10 pl-6"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <div className="text-white text-5xl mb-8 max-sm:text-3xl">
                <p className="mb-6 font-semibold">{title1}</p>
                <p className="text-custom-gold text-3xl  max-sm:text-xl max-sm:max-w-[155px]">
                  {title2}
                </p>
              </div>
              <p className="max-w-[415px] text-lg text-neutral-300 mb-8 max-sm:text-base">
                {title3}
              </p>
              <Link
                to="/trainwithus"
                className="uppercase font-bold text-white text-lg py-3 px-6 bg-custom-gold rounded-sm max-sm:text-sm"
              >
                {textBtn}
              </Link>
            </div>
            <div
              className="brightness-[.70] w-full h-full bg-center bg-cover bg-banner bg-no-repeat flex-1 text-white max-sm:bg-[-350px]"
              data-aos="fade-right"
              data-aos-delay="900"
            />
          </div>
        </div>
      </div>
      <div className="bg-custom-black h-full font-poppins py-12">
        <div className="max-container flex flex-col gap-8">
          <div className="w-full text-center">
            <p className="uppercase text-white text-4xl font-bold max-sm:text-3xl">
              Our <span className="text-custom-gold">Services</span>
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
            <Link
              to="/trainwithus"
              className="uppercase font-bold text-white text-lg py-3 px-6 bg-custom-gold rounded-sm max-sm:text-sm"
            >
              {textBtn}
            </Link>
          </div>
          <div className="w-full text-center mt-2 px-32 max-lg:p-0">
            <p className="text-white text-lg max-sm:text-base">{subTitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
