import { coachesInfo } from '../data';
import CoachAccordion from '../components/CoachAccordion';

const Coaches = () => {
  const joloAccordion = {
    name: 'Jolo Tamayo',
    cityAddress: 'City X',
    teams: 'Team Y',
    leagues: 'League Z',
    positions: 'Guard, Forward',
    specialty: 'Shooting',
    startingYear: 2010,
    certifications: 'Cert A',
  };

  return (
    <div className="bg-custom-gradient">
      <div className="text-white font-poppins max-container text-center flex flex-col gap-4 py-12 ">
        <p className="uppercase text-6xl max-sm:text-4xl font-semibold">
          TRUEFOCUS{' '}
          <span className="text-custom-gold whitespace-nowrap">
            {' '}
            TRAINING STAFF{' '}
          </span>
        </p>

        <div className="flex flex-col gap-8">
          <div className="flex justify-center">
            <CoachAccordion coachAccordion={joloAccordion} />
          </div>

          <div className="grid justify-items-center grid-cols-3 gap-2 max-md:grid-cols-1 max-lg:grid-cols-2">
            {coachesInfo.map((coachAccordion, name) => (
              <CoachAccordion coachAccordion={coachAccordion} key={name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaches;
