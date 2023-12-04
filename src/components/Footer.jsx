import { Link } from 'react-router-dom';
import { footerLogo } from '../assets/images';
import { headerLogo } from '../assets/images';
import { footerLinks } from '../data';
import { socialMedia } from '../data';

const Footer = () => {
  return (
    <footer className="bg-black font-poppins">
      <div className="max-container">
        <div className=" text-white py-6 flex justify-between gap-10 flex-wrap max-lg:flex-col max-sm:gap-10">
          <div className="flex flex-col items-start">
            <div className="flex max-sm:flex-col mt-2 text-base leading-7 text-neutral-300 lg:max-w-sm ">
              <img src={headerLogo} className="h-[110px] w-[110px] pb-4 pr-9" />
              <p>
                Dedicated to shaping champions and fostering a love for the
                game, TrueFocus Basketball Skills Development is where skills
                meet passion, and dreams turn into slam-dunks. Join us in the
                pursuit of excellence on and off the court.
              </p>
            </div>
          </div>
          <div className="flex flex-1 justify-between gap-10 xl:justify-evenly max-sm:gap-10 max-sm:flex-col">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-wrap flex-col">
                <h4 className="text-white uppercase text-2xl font-bold mb-4">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className={`mt-2 text-neutral-300 ${
                        section.title === 'Quick Links' ? 'cursor-pointer' : ''
                      }`}
                      key={link.name}
                    >
                      {section.title === 'Get in touch' ? (
                        <span>{link.name}</span>
                      ) : (
                        <Link to={link.link}>{link.name}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col ">
              <p className="text-white uppercase text-2xl font-bold mb-4">
                Follow Us
              </p>
              <div className="flex gap-4 flex-wrap">
                {socialMedia.map((icon) => (
                  <a
                    href={icon.href}
                    key={icon.alt}
                    target="_blank"
                    title="Open in new tab"
                  >
                    <div className="flex justify-center items-center w-12 h-12 bg-neutral-300 rounded-full cursor-pointer">
                      <img
                        src={icon.src}
                        alt={icon.alt}
                        width={24}
                        height={24}
                      />
                    </div>
                  </a>
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
