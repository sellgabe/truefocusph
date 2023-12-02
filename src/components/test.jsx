import { footerLogo } from '../assets/images';
import { footerLinks } from '../data';
import { socialMedia } from '../data';

const Footer = () => {
  return (
    <footer className="bg-black font-poppins">
      <div className="max-container">
        <div className=" text-white flex justify-between items-start flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <img src={footerLogo} width={350} />
            </a>
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              Dedicated to shaping champions and fostering a love for the game,
              TrueFocus Basketball Skills Development is where skills meet
              passion, and dreams turn into slam-dunks. Join us in the pursuit
              of excellence on and off the court.
            </p>
          </div>

          <div className="flex flex-1 justify-between flex-wrap">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                      key={link.name}
                    >
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex flex-col">
              <p className="text-white uppercase text-2xl font-medium mb-4">
                Follow Us
              </p>
              <div className="flex gap-4">
                {socialMedia.map((icon) => (
                  <div
                    className="flex justify-center items-center w-12 h-12 bg-neutral-300 rounded-full cursor-pointer"
                    key={icon.alt}
                  >
                    <img src={icon.src} alt={icon.alt} width={24} height={24} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex text-custom-gold">
          <p className="w-full text-center pb-4">
            © 2023 TRUEFOCUS BASKETBALL SKILLS DEVELOPMENT | RUSSELL GABRIEL SAN
            PEDRO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
