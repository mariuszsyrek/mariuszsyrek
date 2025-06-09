// Opinie partnera
const partnerOpinions = [
  "Pan Mariusz pomógł mi w całym procesie rejestracji i dokładnie wyjaśnił wszystkie formalności.",
  "Dzięki Panu Mariuszowi szybko i sprawnie przeszedłem rekrutację oraz przygotowałem auto do pracy.",
  "Bardzo profesjonalna pomoc od Pana Mariusza – wszystko jasno wytłumaczone, łącznie z oznakowaniem auta.",
  "Mariusz przedstawił ofertę, pomógł z dokumentami i zadbał, bym był gotowy do rozpoczęcia jazdy.",
  "Świetna obsługa – Pan Mariusz przeprowadził mnie przez cały proces i rozwiał wszystkie wątpliwości.",
  "Pan Mariusz pomógł mi sprawnie podpisać umowę, następnie utworzył konta w aplikacjach i oznakował pojazd – wszystko przebiegło bezproblemowo.",
  "Dzięki Panu Mariuszowi szybko podpisałem umowę, miałem gotowe konta w aplikacjach i auto przygotowane do pracy.",
  "Mariusz przeprowadził mnie przez cały proces – od podpisania umowy, przez tworzenie kont w aplikacjach, aż po oznakowanie auta.",
  "Bardzo sprawna i profesjonalna pomoc Mariusza – umowa, konta w aplikacjach i oznakowanie pojazdu załatwione w jeden dzień.",
  "Pan Mariusz dokładnie wytłumaczył każdy krok: najpierw podpisaliśmy umowę, potem utworzył konta w aplikacjach i oznaczył mój samochód.",
  "Mariusz od początku do końca zadbał o każdy szczegół – pomógł z dokumentami, aplikacjami i przygotowaniem auta.",
  "Cały proces rejestracji przebiegł sprawnie dzięki Mariuszowi – bardzo rzetelne podejście i fachowa pomoc.",
  "Dzięki Panu Mariuszowi rozpocząłem pracę bez stresu – wszystko załatwione w jeden dzień, łącznie z oznakowaniem auta.",
  "Profesjonalizm na najwyższym poziomie – Mariusz wyjaśnił wszystko krok po kroku i pomógł przygotować pojazd do jazdy.",
  "Pan Mariusz bardzo mi pomógł – rejestracja, umowa, konta i oznakowanie auta były gotowe bez żadnych problemów.",
  "Świetna pomoc – Mariusz zadbał o każdy etap: od dokumentów po aplikacje i przygotowanie pojazdu.",
  "Bardzo polecam – dzięki Mariuszowi wszystko było jasne i przejrzyste, a auto gotowe do pracy w krótkim czasie.",
  "Pełne zaangażowanie ze strony Mariusza – proces przebiegł szybko i sprawnie, bez zbędnych formalności.",
  "Duże wsparcie w procesie rejestracji – Mariusz pomógł z dokumentami, aplikacjami i przygotowaniem auta od A do Z.",
  "Znakomita organizacja – Mariusz wszystko zorganizował, wytłumaczył i dopilnował, by niczego nie zabrakło.",
  "Proces rejestracji był dzięki Mariuszowi szybki i bezproblemowy – w jeden dzień wszystko było gotowe.",
  "Doceniam profesjonalne podejście – Mariusz zadbał o to, by auto, aplikacje i dokumenty były gotowe do pracy.",
  "Mariusz pomógł mi uniknąć zbędnych problemów – poprowadził cały proces od początku do końca bardzo sprawnie.",
  "Kompleksowe wsparcie i świetny kontakt – Mariusz wszystko przygotował, wyjaśnił i dopilnował szczegółów.",
  "Dzięki Panu Mariuszowi mogłem szybko rozpocząć pracę – wszystko załatwione bez stresu i opóźnień.",
  "Pan Mariusz pomógł mi wypełnić wszystkie dokumenty i szybko przygotować auto do jazdy – pełen profesjonalizm.",
  "Mariusz dokładnie przeprowadził mnie przez każdy etap zatrudnienia – od rejestracji po oznakowanie samochodu.",
  "Rekrutacja przebiegła sprawnie i bez problemów dzięki pomocy Pana Mariusza – świetna organizacja.",
  "Z pomocą Mariusza szybko dopełniłem formalności, podpisałem umowę i miałem gotowe konta w aplikacjach.",
  "Pan Mariusz zadbał o to, żeby wszystko było gotowe na czas – auto oznakowane, dokumenty podpisane, aplikacje skonfigurowane.",
  "Mariusz wszystko dokładnie wyjaśnił, pomógł w rejestracji i przygotował mnie do rozpoczęcia pracy bez stresu.",
  "Kompleksowa pomoc od Pana Mariusza – od załatwienia dokumentów po przygotowanie auta do jazdy.",
  "Dzięki Mariuszowi mogłem rozpocząć pracę w jeden dzień – umowa, konta i oznakowanie auta załatwione błyskawicznie.",
  "Mariusz zadbał o każdy etap – dokumenty, aplikacje, oznaczenie pojazdu – wszystko dopięte na ostatni guzik.",
  "Bardzo dziękuję Panu Mariuszowi za świetną organizację procesu – nie musiałem się niczym martwić.",
  "Cały proces przebiegł sprawnie dzięki pomocy Mariusza – dokładnie tłumaczył każdy krok.",
  "Pan Mariusz pomógł mi w rejestracji i przygotował auto zgodnie z wymaganiami – polecam każdemu kierowcy.",
  "Mariusz załatwił wszystko w ekspresowym tempie – umowa, aplikacje i oznakowanie auta w jeden dzień!",
  "Dzięki Mariuszowi od razu wiedziałem, co trzeba zrobić – bardzo jasne instrukcje i pomoc na każdym etapie.",
  "Mariusz to profesjonalista – cały proces od podpisania umowy po oznakowanie auta przebiegł wzorowo.",
  "Świetny kontakt i pełne wsparcie – Mariusz pomógł mi szybko wejść do pracy i wszystko przygotował.",
  "Pan Mariusz zorganizował cały proces rejestracji bez zbędnych formalności – doceniam rzetelność.",
  "Z pomocą Mariusza udało się błyskawicznie przygotować auto, oznakować je i skonfigurować aplikacje.",
  "Mariusz bardzo mi pomógł – wszystko przebiegło sprawnie i bez problemów od pierwszego kontaktu.",
  "Z pomocą Pana Mariusza rekrutacja była szybka i przyjemna – auto gotowe do pracy już tego samego dnia.",
  "Nie musiałem się niczym martwić – Mariusz zadbał o dokumenty, konta i przygotowanie auta.",
  "Pan Mariusz to osoba godna zaufania – pomógł mi rozpocząć pracę bez żadnych opóźnień.",
  "Bardzo polecam współpracę z Mariuszem – wszystko zostało mi jasno przedstawione i zrealizowane błyskawicznie.",
  "Mariusz był dostępny na każdym etapie – pomógł przy umowie, aplikacjach i przygotowaniu pojazdu.",
  "Dzięki Panu Mariuszowi rozpocząłem pracę pewnie i bez stresu – wszystko dobrze zorganizowane.",
  "Mariusz pomógł mi szybko i sprawnie przejść cały proces rekrutacji – polecam każdemu kierowcy.",
  "Rejestracja, dokumenty, aplikacje i oznakowanie auta – wszystko załatwiłem z pomocą Pana Mariusza w jeden dzień.",
  "Mariusz zadbał o każdy szczegół – dzięki temu nie miałem żadnych problemów z rozpoczęciem pracy.",
  "Proces zatrudnienia z Panem Mariuszem przebiegł szybko, konkretnie i bez żadnych komplikacji.",
  "Cała procedura została mi jasno wyjaśniona przez Mariusza – jestem bardzo zadowolony z pomocy."
];

// Opinie garażu
const garageOpinions = [
  "Auto zostało dokładnie wyczyszczone i wypolerowane – wygląda jak nowe! Pełen profesjonalizm.",
  "Szybka diagnoza i naprawa usterki – wszystko sprawnie i bez problemów.",
  "Skorzystałem z usługi detailingu – auto odzyskało blask, a wnętrze pachnie jak z salonu. Polecam!",
  "Bardzo polecam – auto po serwisie działa jak nowe, a obsługa była rzeczowa i uczciwa.",
  "Świetna robota z folią – samochód wygląda świetnie i wyróżnia się na ulicy!",
  "Kompleksowy detailing zrobiony perfekcyjnie – zarówno wnętrze, jak i karoseria jak z fabryki.",
  "Wymiana oleju i kosmetyka wykonane bardzo sprawnie. Profesjonalna obsługa.",
  "Auto po oklejeniu wygląda nowocześnie i profesjonalnie – świetny efekt końcowy!",
  "Auto po kompleksowym myciu i polerowaniu wygląda niesamowicie – aż szkoda nim jeździć!",
  "Bardzo szybka i skuteczna naprawa – usterka usunięta, a auto gotowe do jazdy jeszcze tego samego dnia",
  "Skorzystałem z korekty lakieru i auto wygląda jak nowe – zero rys i piękny połysk!",
  "Detailing wnętrza wykonany perfekcyjnie – fotele, podsufitka, plastiki – wszystko czyściutkie!",
  "Po wymianie oleju i filtrów auto pracuje cicho i równo – super robota.",
  "Oklejenie auta folią matową wyszło rewelacyjnie – samochód wygląda jak sportowa wersja.",
  "Polerowanie reflektorów przyniosło świetny efekt – światła świecą jak nowe.",
  "Zleciłem czyszczenie tapicerki skórzanej i nie żałuję – skóra znów wygląda jak świeżo kupiona.",
  "Po myciu detailingowym i zabezpieczeniu lakieru auto lśni – jestem zachwycony!",
  "Naprawa hamulców przebiegła sprawnie – zero hałasów, pełna skuteczność.",
  "Auto po oklejeniu dachu czarną folią wygląda mega nowocześnie.",
  "Wymiana świec i przegląd ogólny wykonane szybko i profesjonalnie.",
  "Detailing lakieru z powłoką ceramiczną – samochód wygląda jak z katalogu.",
  "Regeneracja felg aluminiowych zrobiona idealnie – zero rys, jak nowe!",
  "Po wymianie klocków i tarcz hamulcowych auto znów hamuje jak trzeba.",
  "Czyszczenie i impregnacja podsufitki – super efekt, zero plam.",
  "Zdecydowałem się na zabezpieczenie lakieru folią PPF – warto było!",
  "Wymiana akumulatora i test instalacji elektrycznej przebiegły bez zarzutu.",
  "Po kompleksowym praniu tapicerki wnętrze wygląda jak z salonu.",
  "Zleciłem polerowanie karoserii – efekt przeszedł moje oczekiwania!",
  "Szybka naprawa układu wydechowego – teraz wszystko działa bez zarzutu.",
  "Folia ochronna na próg bagażnika – dyskretna i skuteczna ochrona.",
  "Pełny detailing z praniem foteli, pielęgnacją skóry i czyszczeniem plastików – rewelacja!",
  "Po wymianie paska rozrządu silnik chodzi równiutko – pełen profesjonalizm.",
  "Oklejenie lusterek folią w kolorze karbon – detal, który robi różnicę.",
  "Korekta lakieru i nałożenie wosku twardego – auto wygląda jak z salonu.",
  "Naprawa zawieszenia z pełną diagnostyką – wszystko działa idealnie.",
  "Zabezpieczenie felg powłoką ceramiczną – łatwiej się myje i wygląda świetnie.",
  "Po polerce szyb widoczność w deszczu się poprawiła – bardzo polecam.",
  "Wymiana opon i wyważenie zrobione ekspresowo – zero drgań na kierownicy.",
  "Zleciłem detailing komory silnika – czystość jak w nowym aucie.",
  "Po renowacji lakieru i aplikacji sealantu auto błyszczy i przyciąga spojrzenia.",
  "Auto po pełnym detailingu wygląda jak z salonu – perfekcyjna robota i świetny zapach w środku!",
  "Wymiana rozrządu wykonana sprawnie i fachowo – silnik pracuje bez zarzutu.",
  "Zleciłem oklejenie auta folią satynową – efekt przeszedł moje oczekiwania!",
  "Detailing wnętrza plus pranie tapicerki – auto jak nowe, aż trudno uwierzyć, że to ten sam samochód.",
  "Po kompleksowej kosmetyce lakieru i zabezpieczeniu powłoką ceramiczną auto wygląda niesamowicie!",
  "Naprawa klimatyzacji zrobiona ekspresowo – chłodzi lepiej niż wcześniej!",
  "Profesjonalna regeneracja lamp i zabezpieczenie ich folią – światła jak nowe i dobrze chronione.",
  "Auto po serwisie klimatyzacji i ozonowaniu pachnie świeżo i działa bez zarzutu – polecam!",
  "Zdecydowałem się na czarny dach i lusterka – oklejenie folią wykonane perfekcyjnie, auto wygląda agresywnie.",
  "Detailing felg oraz konserwacja opon – świetny efekt wizualny i ochrona.",
  "Po wymianie zawieszenia komfort jazdy znacząco się poprawił – profesjonalna usługa.",
  "Auto po oklejeniu folią zmieniło całkowicie wygląd – teraz przyciąga wzrok na ulicy!",
  "Czyszczenie i impregnacja tapicerki materiałowej – efekt jak po fabrycznym czyszczeniu!",
  "Zleciłem detailing reflektorów i szyb – widoczność w nocy znacznie lepsza, a auto wygląda młodziej.",
  "Profesjonalne mycie detailingowe z woskowaniem – lakier głęboki i lśniący jak lustro!",
  "Po wymianie termostatu i płynu chłodniczego auto utrzymuje idealną temperaturę – sprawna robota.",
  "Zabezpieczenie lakieru folią samoregenerującą – niesamowita technologia i super efekt.",
  "Oklejanie elementów wnętrza folią carbon – drobne zmiany, a wnętrze wygląda o wiele nowocześniej!",
  "Naprawa układu kierowniczego wykonana wzorowo – auto prowadzi się pewnie i bez luzów.",
  "Po dokładnym czyszczeniu i detailingowym praniu bagażnika nie zostało śladu po wcześniejszych zabrudzeniach."
];

// Zmienne pomocnicze do zarządzania kopiowaniem
const opinionPools = {
  partner: [...partnerOpinions],
  garage: [...garageOpinions]
};

function initializeOpinionPool(type) {
  if (!opinionPools[type] || opinionPools[type].length === 0) {
    opinionPools[type] = type === 'partner' ? [...partnerOpinions] : [...garageOpinions];
  }
}

function getRandomOpinion(type) {
  initializeOpinionPool(type);
  const index = Math.floor(Math.random() * opinionPools[type].length);
  const opinion = opinionPools[type][index];
  opinionPools[type].splice(index, 1); // usuń używaną opinię
  return opinion;
}

function copyAndShow(type) {
  let showElement, hideElement, hideSection;

  if (type === 'partner') {
    showElement = document.getElementById('go-partner');
    hideElement = document.querySelector('#partner-section button.copy-btn');
    hideSection = document.getElementById('garage-section');
  } else if (type === 'garage') {
    showElement = document.getElementById('go-garage');
    hideElement = document.querySelector('#garage-section button.copy-btn');
    hideSection = document.getElementById('partner-section');
  }

  const opinion = getRandomOpinion(type);

  navigator.clipboard.writeText(opinion).then(() => {
    showElement.classList.remove('hidden');
    hideElement.classList.add('hidden');
    hideSection.style.display = 'none';
  }).catch(err => {
    alert('Błąd kopiowania do schowka: ' + err);
  });
}

function resetView() {
  document.getElementById('partner-section').style.display = 'block';
  document.getElementById('garage-section').style.display = 'block';

  document.getElementById('go-partner').classList.add('hidden');
  document.getElementById('go-garage').classList.add('hidden');

  document.querySelector('#partner-section button.copy-btn').classList.remove('hidden');
  document.querySelector('#garage-section button.copy-btn').classList.remove('hidden');
}

function goTo(type) {
  if (type === 'partner') {
    window.open("https://search.google.com/local/writereview?placeid=ChIJsdO4W-1bFkcRG-tP0ZQAaiQ", "_blank");
  } else if (type === 'garage') {
    window.open("https://search.google.com/local/writereview?placeid=ChIJvQb-qNNbFkcRNyBuT9r5Q00", "_blank");
  }
  resetView();
}
