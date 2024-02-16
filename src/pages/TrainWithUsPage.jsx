import {
  faEnvelopeOpen,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { locations } from '../data';
import { trainWithUs } from '../data';

const TrainWithUsPage = () => {
  const { title2, title3, title4 } = trainWithUs;

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
              <p className="text-3xl text-shadow max-sm:text-xl">{title4}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-custom-black">
        <div className=" flex max-container justify-evenly max-sm:flex-col max-sm:items-center">
          <div className=" flex justify-start gap-8 pt-12 flex-col">
            <div className="flex items-center gap-8 max-sm:flex-col max-sm:text-center max-sm:gap-2">
              <div>
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="text-custom-gold text-[2.8rem] max-md:text-[2.2rem]"
                />
              </div>
              <div className="flex flex-col gap-4 max-sm:gap-1">
                <p className="text-xl font-bold text-white">Phone</p>
                <p className="text-xl font-bold text-custom-gold ">
                  +63 917-891-2941
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 max-sm:flex-col max-sm:text-center max-sm:gap-2">
              <div>
                <FontAwesomeIcon
                  icon={faEnvelopeOpen}
                  className="text-custom-gold text-[2.8rem] max-md:text-[2.2rem]"
                />
              </div>
              <div className="flex flex-col gap-4 max-sm:gap-1">
                <p className="text-xl font-bold text-white ">Email</p>
                <p className="text-xl font-bold text-custom-gold ">
                  truefocus.opc@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start gap-8 py-12">
            <div className="flex gap-4 flex-col max-sm:gap-8">
              <div className="flex max-sm:flex-col">
                <a
                  href="https://www.facebook.com/TrueFocusPh"
                  target="_blank"
                  title="Open in new tab"
                >
                  <div className="flex max-sm:flex-col max-sm:items-center sm:gap-6">
                    <div className="flex justify-center items-center w-14 h-14 bg-custom-gold rounded-full cursor-pointer">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5648 1.00458L14.7875 1C11.6674 1 9.65099 3.12509 9.65099 6.41423V8.91055H6.85857C6.61728 8.91055 6.42188 9.1115 6.42188 9.35937V12.9763C6.42188 13.2241 6.6175 13.4249 6.85857 13.4249H9.65099V22.5514C9.65099 22.7993 9.84639 23 10.0877 23H13.731C13.9723 23 14.1677 22.799 14.1677 22.5514V13.4249H17.4327C17.674 13.4249 17.8694 13.2241 17.8694 12.9763L17.8707 9.35937C17.8707 9.24036 17.8246 9.12638 17.7428 9.04215C17.661 8.95793 17.5496 8.91055 17.4338 8.91055H14.1677V6.79439C14.1677 5.77727 14.4036 5.26094 15.6935 5.26094L17.5643 5.26025C17.8054 5.26025 18.0008 5.0593 18.0008 4.81166V1.45317C18.0008 1.20576 17.8056 1.00504 17.5648 1.00458Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-white text-xl font-bold pt-3 max-sm:pt-1">
                      Facebook
                    </p>
                  </div>
                </a>
              </div>

              <div className="flex max-sm:flex-col">
                <a
                  href="https://www.instagram.com/truefocus_ph/?hl=en"
                  target="_blank"
                  title="Open in new tab"
                >
                  <div className="flex max-sm:flex-col max-sm:items-center sm:gap-6">
                    <div className="flex justify-center items-center w-14 h-14 bg-custom-gold rounded-full cursor-pointer">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 12C2 7.80863 2 5.71294 3.05041 4.26718C3.38964 3.80026 3.80026 3.38964 4.26718 3.05041C5.71294 2 7.80863 2 12 2C16.1914 2 18.2871 2 19.7328 3.05041C20.1997 3.38964 20.6104 3.80026 20.9496 4.26718C22 5.71294 22 7.80863 22 12C22 16.1914 22 18.2871 20.9496 19.7328C20.6104 20.1997 20.1997 20.6104 19.7328 20.9496C18.2871 22 16.1914 22 12 22C7.80863 22 5.71294 22 4.26718 20.9496C3.80026 20.6104 3.38964 20.1997 3.05041 19.7328C2 18.2871 2 16.1914 2 12ZM12.0011 6.70312C9.07747 6.70312 6.70703 9.07357 6.70703 11.9972C6.70703 14.9209 9.07747 17.2914 12.0011 17.2914C14.9248 17.2914 17.2953 14.9209 17.2953 11.9972C17.2953 9.07357 14.9248 6.70312 12.0011 6.70312ZM12.0011 15.3061C10.1773 15.3061 8.69233 13.8211 8.69233 11.9972C8.69233 10.1721 10.1773 8.68842 12.0011 8.68842C13.825 8.68842 15.31 10.1721 15.31 11.9972C15.31 13.8211 13.825 15.3061 12.0011 15.3061ZM18.3953 6.307C18.3953 6.69661 18.0794 7.01244 17.6898 7.01244C17.3002 7.01244 16.9844 6.69661 16.9844 6.307C16.9844 5.9174 17.3002 5.60156 17.6898 5.60156C18.0794 5.60156 18.3953 5.9174 18.3953 6.307Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="text-white text-xl font-bold pt-3 max-sm:pt-1">
                      Instagram
                    </p>
                  </div>
                </a>
              </div>

              <div className="flex max-sm:flex-col">
                <a
                  href="https://www.tiktok.com/tag/truefocus?lang=en"
                  target="_blank"
                  title="Open in new tab"
                >
                  <div className="flex max-sm:flex-col max-sm:items-center sm:gap-6">
                    <div className="flex justify-center items-center w-14 h-14 bg-custom-gold rounded-full cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 449.45 515.38"
                      >
                        <path
                          fill="white"
                          d="M382.31 103.3c-27.76-18.1-47.79-47.07-54.04-80.82-1.35-7.29-2.1-14.8-2.1-22.48h-88.6l-.15 355.09c-1.48 39.77-34.21 71.68-74.33 71.68-12.47 0-24.21-3.11-34.55-8.56-23.71-12.47-39.94-37.32-39.94-65.91 0-41.07 33.42-74.49 74.48-74.49 7.67 0 15.02 1.27 21.97 3.44V190.8c-7.2-.99-14.51-1.59-21.97-1.59C73.16 189.21 0 262.36 0 352.3c0 55.17 27.56 104 69.63 133.52 26.48 18.61 58.71 29.56 93.46 29.56 89.93 0 163.08-73.16 163.08-163.08V172.23c34.75 24.94 77.33 39.64 123.28 39.64v-88.61c-24.75 0-47.8-7.35-67.14-19.96z"
                        />
                      </svg>
                    </div>
                    <p className="text-white text-xl font-bold pt-3 max-sm:pt-1">
                      Tiktok
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-800 text-white">
        <div className="max-container flex flex-col justify-center items-center py-12">
          <p className="uppercase text-4xl font-semibold mb-4 max-sm:text-2xl">
            Our <span className="text-custom-gold">Locations</span>
          </p>
          <ul className="grid grid-cols-2 gap-2 max-sm:grid-cols-1 text-center">
            {locations.map((item, index) => (
              <li
                className={`text-xl p-2 mx-6 text-neutral-300 max-sm:text-base ${
                  index === locations.length - 1 && locations.length % 2 !== 0
                    ? 'sm:col-span-2 '
                    : ''
                }`}
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
