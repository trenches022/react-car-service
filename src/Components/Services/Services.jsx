import './Services.css';

const Services = () => {
  return (
    <div className="service-container">
      <h1>CO OFERUJEMY?</h1>
      <div className="services">

        <h2>Diagnostyka i naprawa</h2>
        <ul>
          <li>Diagnostyka komputerowa silnika</li>
          <li>Naprawa zawieszenia</li>
          <li>Wymiana tarcz i klocków hamulcowych</li>
          <li>Naprawa układu chłodzenia</li>
        </ul>

        <h2>Obsługa techniczna</h2>
        <ul>
          <li>Wymiana oleju i filtrów</li>
          <li>Sprawdzenie i napełnienie klimatyzacji</li>
          <li>Wyważanie kół i ustawianie zbieżności</li>
          <li>Kontrola i wymiana pasków</li>
        </ul>

        <h2>Naprawy blacharsko-lakiernicze</h2>
        <ul>
          <li>Usuwanie wgnieceń</li>
          <li>Lakierowanie karoserii</li>
          <li>Wymiana szyb</li>
          <li>Polerowanie reflektorów i nadwozia</li>
        </ul>

        <h2>Elektryka i elektronika</h2>
        <ul>
          <li>Naprawa instalacji elektrycznej</li>
          <li>Montaż dodatkowego wyposażenia</li>
          <li>Diagnostyka sprzętu elektronicznego</li>
        </ul>

        <h2>Wulkanizacja i usługi sezonowe</h2>
        <ul>
          <li>Wymiana i przechowywanie opon</li>
          <li>Sprawdzenie i wymiana akumulatora</li>
          <li>Montaż zimowych akcesoriów</li>
        </ul>

      </div>
    </div>
  )
}

export default Services;
