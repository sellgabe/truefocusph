import { Link } from 'react-router-dom';
import { offerings } from '../data';

const FrontPage = () => {
  const { offers, subTitle } = offerings;

  return (
    <div className="font-poppins">
      <div className="bg-black  h-[700px]">
        <div className="mx-auto h-full max-lg:p-0">
          <div className="relative w-full h-full bg-center bg-cover changing-background bg-no-repeat flex bg-black max-sm:bg-[-360px] ">
            <div className="w-full max-container uppercase flex justify-center">
              <div className="flex flex-col text-center items-center justify-center gap-8 max-sm:py-16">
                <p className="text-shadow text-white text-5xl font-semibold max-sm:text-4xl">
                  <span className="text-custom-gold">TrueFocus </span>
                  Basketball Skills Development
                </p>
                <p className="text-custom-gold text-3xl font-semibold text-shadow max-sm:text-2xl max-sm:max-w-[190px]">
                  Real Training, Real Results
                </p>
                <p className="max-w-[35rem] text-xl text-white text-shadow max-sm:text-base">
                  We deliver intense basketball training in a vibrant and
                  welcoming environment, where serious skills development meets
                  the joy of the game.
                </p>
                <Link
                  to="/trainwithus"
                  className="uppercase font-bold text-white text-lg py-3 px-6 bg-custom-gold rounded-sm max-sm:text-sm"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-neutral-800">
        <div className=" py-12">
          <div className="w-full text-center">
            <p className="uppercase text-white text-4xl pb-12 font-bold max-sm:text-3xl">
              Experience <span className="text-custom-gold">TrueFocus</span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="bg-neutral-900">
              <div className="flex justify-evenly px-4 py-6 max-container max-md:flex-col max-md:gap-6">
                <div className="">
                  <img
                    src={thirdyimage}
                    alt="thirdy"
                    className="min-h-[5rem] object-cover min-w-[5rem]"
                  />
                </div>
                <div className="flex flex-col justify-between gap-4 px-8 max-w-[45rem] max-md:px-2">
                  <p className="text-neutral-300 text-base lg:text-xl  ">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, invenus expedita amet facilis enim! Distinctio hic
                    dolorum sed facilis laboriosam maxime, aliquam delectus
                    accusamus non amet, soluta odit. "
                  </p>
                  <div className="">
                    <p className="font-semibold ">
                      <span className="text-custom-gold">Thirdy Ravena</span>
                    </p>
                    <p className="text-neutral-400">PBA Player</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse justify-evenly p-4 max-container max-md:flex-col max-md:gap-6">
              <div className="">
                <img
                  src={thirdyimage}
                  alt="thirdy"
                  className="min-h-[5rem] object-cover min-w-[5rem]"
                />
              </div>
              <div className="flex flex-col justify-between gap-4 px-8 max-w-[45rem] max-md:px-2">
                <p className="text-neutral-300 text-base lg:text-xl ">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, invenus expedita amet facilis enim! Distinctio hic
                  dolorum sed facilis laboriosam maxime, aliquam delectus
                  accusamus non amet, soluta odit. "
                </p>
                <div>
                  <p className="font-semibold ">
                    <span className="text-custom-gold">Kris Pogi</span>
                  </p>
                  <p className="text-neutral-400">TrueFocus Macho Dancer</p>
                </div>
              </div>
            </div>
            <div className="bg-neutral-900">
              <div className="flex justify-evenly px-4 py-6 max-container max-md:flex-col max-md:gap-6">
                <div className="">
                  <img
                    src={thirdyimage}
                    alt="thirdy"
                    className="min-h-[5rem] object-cover min-w-[5rem]"
                  />
                </div>
                <div className="flex flex-col justify-between gap-4 px-8 max-w-[45rem] max-md:px-2">
                  <p className="text-neutral-300 text-base lg:text-xl  ">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, invenus expedita amet facilis enim! Distinctio hic
                    dolorum sed facilis laboriosam maxime, aliquam delectus
                    accusamus non amet, soluta odit. "
                  </p>
                  <div className="">
                    <p className="font-semibold ">
                      <span className="text-custom-gold">Thirdy Ravena</span>
                    </p>
                    <p className="text-neutral-400">PBA Player</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse justify-evenly p-4 max-container max-md:flex-col max-md:gap-6">
              <div className="">
                <img
                  src={thirdyimage}
                  alt="thirdy"
                  className="min-h-[5rem] object-cover min-w-[5rem]"
                />
              </div>
              <div className="flex flex-col justify-between gap-4 px-8 max-w-[45rem] max-md:px-2">
                <p className="text-neutral-300 text-base lg:text-xl ">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, invenus expedita amet facilis enim! Distinctio hic
                  dolorum sed facilis laboriosam maxime, aliquam delectus
                  accusamus non amet, soluta odit. "
                </p>
                <div>
                  <p className="font-semibold ">
                    <span className="text-custom-gold">Kris Pogi</span>
                  </p>
                  <p className="text-neutral-400">TrueFocus Macho Dancer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-custom-black h-full py-12">
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
              Contact Us
            </Link>
          </div>
          <div className="w-full text-center mt-2 px-32 max-lg:p-0">
            <p className="text-white text-lg max-sm:text-base">{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
