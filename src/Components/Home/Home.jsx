import './Home.css';
import Advantages from '../Advantages/Advantages';
import mainImg1 from '../../images/main1.jpg';
import mainImg2 from '../../images/main2.jpg';
import servicesImg1 from '../../images/mechanic1.jpg';
import servicesImg2 from '../../images/mechanic2.jpg';
import servicesImg3 from '../../images/mechanic3.jpg';
import servicesImg4 from '../../images/mechanic4.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  <>
    <div className="home-banner">
      <div className="home-content">
        <h1>Wysokiej jakości konserwacja samochodów</h1>
        <h3>Zaufany serwis napraw i konserwacji samochodów</h3>
        <p>W Car Repair staramy się zapewnić najlepszy poziom usług wszystkim naszym klientom, 
          zapewniając im bezpieczną i przyjemną jazdę. Oferujemy szeroki zakres usług naprawy i 
          konserwacji samochodów wszystkich marek i modeli pod jednym dachem. Specjalizujemy się w usługach samochodowych,
           w tym w ustawianiu geometrii kół, naprawach karoserii, naprawach silnika, wgniataniu i lakierowaniu itp.</p>
      </div>
    </div>

    <div className="about-container">
      <div className="about-description">
        <h2>Kilka słów</h2>
        <h3>O nas</h3>
        <p>Od prawie 20 lat mieszkańcy całej okolicy zwracają się do Car Repair w celu zaspokojenia wszystkich swoich potrzeb w zakresie napraw samochodowych.
          Dzięki bezpłatnym wycenom i szybkiej realizacji zleceń jesteśmy znani z osobistej obsługi i doświadczenia we wszystkich formach specjalistycznych
          napraw silników. 
          Korzystamy z najnowszych i najnowocześniejszych technologii diagnostycznych, abyś mógł wrócić do swojego samochodu.</p>
      </div>
      
    </div>

    <div className="section-container">
        <div className="block">
          <div className="block-img" style={{ backgroundImage: `url(${mainImg1})` }}></div>
          <div className="block-content red-bg">
            <h2>NAJLEPSZE <br /><span className="highlight">USŁUGI</span></h2>
            <p>
            Naprawa samochodów może rozwiązać prawie każdy problem, który wystąpi z pojazdem. 
            Od napraw silnika i wymiany oleju po regularną konserwację i diagnostykę.
            </p>
            <Link to='/services'> <button className="btn">Więcej</button> </Link>
          </div>
        </div>

        <div className="block">
          <div className="block-content dark-bg">
            <h2>GWARANCJA 100% <br /><span className="highlight">REZULTATÓW</span></h2>
            <p>
              Car Repair jest synonimem fachowej wiedzy, wartości i profesjonalizmu - i to od samego początku istnienia firmy. 

              Byliśmy pierwszą firmą zajmującą się naprawami samochodów na rynku wtórnym, która oferowała dożywotnią gwarancję na wybrane usługi, 
              a dziś gwarantujemy, że wyniki naszej pracy spełnią Twoje oczekiwania.
            </p>
            <Link to='/services'> <button className="btn">Więcej</button> </Link>
          </div>
          <div className="block-img" style={{ backgroundImage: `url(${mainImg2})` }}></div>
        </div>
      </div>
      <Advantages />
      <div className="services-container">
        <h1 className="services-title"><span>NASZE</span> USŁUGI</h1>
        <div className="services-grid">
          <div className="service-item">
            <img src={servicesImg1} alt="Brake Repair" />
            <div className="service-content">
              <h3>Naprawa hamulców</h3>
              <p>
                Od pedału hamulca po hydrauliczny płyn hamulcowy, nasi technicy mogą wykonać naprawę hamulców w każdej marce i modelu.
              </p>
            </div>
          </div>
          <div className="service-item">
            <img src={servicesImg2} alt="Engine Repair" />
            <div className="service-content">
              <h3>Naprawa silnika</h3>
              <p>
              Poważnie traktujemy dobro Twojego silnika i oferujemy usługi zapobiegające konieczności jego wymiany w przyszłości.
              </p>
            </div>
          </div>
          <div className="service-item">
            <img src={servicesImg3} alt="Oil Change" />
            <div className="service-content">
              <h3>Wymiana oleju</h3>
              <p>
              Jednym z najskuteczniejszych i najtańszych sposobów ochrony samochodu jest regularna wymiana oleju i filtra oleju.
              </p>
            </div>
          </div>
          <div className="service-item">
            <img src={servicesImg4} alt="Wheel Change" />
            <div className="service-content">
              <h3>Wymiana kół</h3>
              <p>
                Świadczymy kompleksowe usługi wymiany kół, które obejmują awaryjną wymianę opon, gdy jesteś w drodze.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contacts-container">
        <div className="contacts-information">
          <h1>KONTAKTY</h1>
          <p>ADRES: Warszawa, Al.Krakowska 28.</p>
          <p>+48 888 888 888</p>
          <p>+48 999 999 999</p>
          <button><a href="https://www.instagram.com/">INSTAGRAM</a></button> <br />
          <button><a href="https://www.facebook.com/">FACEBOOK</a></button>
        </div>
      </div>
  </>
  );
};

export default Home;
