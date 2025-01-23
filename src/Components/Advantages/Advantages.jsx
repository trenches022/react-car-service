import './Advantages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBatteryHalf, faTools, faStar } from '@fortawesome/free-solid-svg-icons';

const advantagesData = [
  {
    title: 'WSZYSTKIE MARKI SAMOCHODÓW',
    description:
      'Świadczymy różnorodne usługi naprawcze i konserwacyjne dla wszystkich marek i modeli samochodów.',
    icon: faCar,
  },
  {
    title: 'RÓŻNORODNOŚĆ USŁUG',
    description:
      'Główną zasadą naszej pracy jest oferowanie szerokiej gamy wysokiej jakości usług naprawy samochodów.',
    icon: faTools,
  },
  {
    title: 'WSPARCIE WYSOKIEJ JAKOŚCI',
    description:
      'Car Repair oferuje wysokiej jakości programy wsparcia dla wszystkich pojazdów.',
    icon: faStar,
  },
  {
    title: 'AKCESORIA',
    description:
      'W naszym centrum naprawy samochodów można również kupić wszelkie akcesoria potrzebne do pojazdu.',
    icon: faBatteryHalf,
  },
];

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="advantages-container">
        <h1>
          <span>NASZE</span> PRZEWAGI
        </h1>
        <div className="advantages-icons">
          {advantagesData.map((item, index) => (
            <div className="advantage-item" key={index}>
              <div className="advantage-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="130.5px"
                  height="150.5px"
                >
                  <path
                    fillRule="evenodd"
                    stroke="#ea202e"
                    strokeWidth="3px"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fill="none"
                    d="M64.500,147.500 L1.511,111.000 L1.511,38.000 L64.500,1.500 L127.489,38.000 L127.489,111.000 L64.500,147.500 Z"
                  ></path>
                </svg>
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{
                    color: '#ea202e',
                    fontSize: '48px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
