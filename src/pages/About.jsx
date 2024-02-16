import React from 'react';

const About = () => {
  return (
    <div className="font-poppins">
      <div className="font-semibold h-[43.7rem]">
        <div className="w-full h-full bg-top bg-cover bg-banner3 bg-no-repeat text-white flex relative">
          <div className="max-container text-center justify-center flex flex-col uppercase gap-12">
            <p className="text-shadow text-6xl max-sm:text-4xl">
              Welcome to <span className="text-custom-gold">TrueFocus </span>
              Basketball Skills Development
            </p>
            <p className="text-shadow text-3xl max-sm:text-xl">
              TrueFocus is where we're dedicated to unlocking the full potential
              of every player through personalized training and a passion-driven
              approach to the game.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-custom-black h-full py-12">
        <div className="max-container flex flex-col gap-8">
          <div className="w-full text-center">
            <p className="uppercase text-white text-4xl font-bold ">
              About <span className="text-custom-gold">Us</span>
            </p>
          </div>
          <div className="text-neutral-300 text-lg flex flex-col text-center gap-6">
            <p>
              Welcome to TrueFocus Basketball Development, where our experienced
              coaches are dedicated to nurturing both the physical prowess and
              mental resilience of our players, recognizing basketball as a
              powerful tool for personal growth and teamwork.
            </p>
            <p>
              What sets TrueFocus apart is our tailored training programs,
              catering to all skill levels from beginners to advanced players,
              acknowledging the unique qualities of each individual for a
              holistic development that goes beyond the court.
            </p>
            <p>
              Whether you're taking your first dribble or aiming for the perfect
              three-pointer, TrueFocus is where aspirations effortlessly
              transform into achievements. Join us in this exciting journey as
              we empower athletes to discover their true potential, foster a
              love for the game, and develop life skills extending far beyond
              the basketball court. At TrueFocus, it's not just about the game;
              it's about growth, grit, and a genuine passion for basketball.
              Welcome to a community that values excellence, teamwork, and the
              relentless pursuit of TrueFocus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
