import { banner } from '../data';

const Banner = () => {
  const { title1, title2, title3, textBtn } = banner;

  return (
    <div className="bg-black font-poppins h-[700px]">
      <div className="max-container mx-auto h-full max-lg:p-0">
        <div className="flex items-center h-full relative -space-x-40 lg:-space-x-24">
          <div
            className="flex-1 z-10 pl-6"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <div className="text-white text-5xl mb-8 max-sm:text-3xl">
              <p className="mb-6">{title1}</p>
              <p className="text-custom-gold text-3xl  max-sm:text-xl max-sm:max-w-[155px]">
                {title2}
              </p>
            </div>
            <p className="max-w-[415px] text-lg text-neutral-300 mb-8 max-sm:text-base">
              {title3}
            </p>
            <button className="uppercase font-bold text-white text-lg py-3 px-6 bg-custom-gold max-sm:text-sm">
              {textBtn}
            </button>
          </div>
          <div
            className="brightness-[.70] w-full h-full bg-center bg-cover bg-banner bg-no-repeat flex-1 text-white max-sm:bg-[-350px]"
            data-aos="fade-right"
            data-aos-delay="900"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
