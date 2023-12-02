import {
  faEnvelopeOpen,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { locations } from '../data';
import { trainWithUs } from '../data';

const TrainWithUsPage = () => {
  const { title2, title3 } = trainWithUs;

  return (
    <div className="font-poppins">
      <div className="font-semibold h-[43.7rem]">
        <div className="w-full h-full bg-center bg-cover bg-banner2 bg-no-repeat text-white flex items-center justify-center relative">
          <div className="text-white text-center max-container">
            <div className="flex flex-col gap-8 uppercase px-16  max-sm:px-2">
              <p className="text-6xl text-shadow  max-sm:text-4xl">
                Elevate Your Game with
                <span className="text-custom-gold"> TrueFocus</span>
              </p>
              <p className="text-3xl text-shadow max-sm:text-xl">{title2}</p>
              <p className="text-3xl text-shadow max-sm:text-xl">{title3}</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-neutral-800 ">
        <div className="max-container flex justify-evenly items-center gap-8 py-12 max-lg:flex-col">
          <div className="flex items-center gap-8 max-lg:flex-col max-lg:gap-2">
            <div>
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="text-custom-gold text-[3rem] max-md:text-[2.5rem]"
              />
            </div>
            <div className="flex flex-col gap-4 max-lg:text-center">
              <p className="text-2xl font-bold text-white max-md:text-xl">
                Phone
              </p>
              <p className="text-2xl font-bold text-custom-gold max-md:text-xl">
                09178912941
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 max-lg:flex-col max-lg:gap-2">
            <div>
              <FontAwesomeIcon
                icon={faEnvelopeOpen}
                className="text-custom-gold text-[3rem] max-md:text-[2.5rem]"
              />
            </div>
            <div className="flex flex-col gap-4 max-lg:text-center">
              <p className="text-2xl font-bold text-white max-md:text-xl">
                Email
              </p>
              <p className="text-2xl font-bold text-custom-gold max-md:text-xl">
                truefocus.opc@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-custom-black text-white">
        <div className="max-container flex flex-col justify-center items-center py-12">
          <p className="uppercase text-4xl font-semibold mb-4 max-sm:text-2xl">
            Our <span className="text-custom-gold">Locations</span>
          </p>
          <ul className="grid grid-cols-2 gap-2 max-md:grid-cols-1 text-center">
            {locations.map((item) => (
              <li
                className="text-xl p-2 mx-6 text-neutral-300 max-sm:text-base"
                key={item.name}
              >
                <p className="max-lg:underline">
                  <a
                    href={item.href}
                    target="_blank"
                    title="Open in Google Maps"
                  >
                    {item.name}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrainWithUsPage;
