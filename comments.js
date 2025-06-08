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
  "Dzięki Panu Mariuszowi mogłem szybko rozpocząć pracę – wszystko załatwione bez stresu i opóźnień."
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
  "Bardzo szybka i skuteczna naprawa – usterka usunięta, a auto gotowe do jazdy jeszcze tego samego dnia."
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

function goTo(type) {
  if (type === 'partner') {
    window.open("https://search.google.com/local/writereview?placeid=ChIJsdO4W-1bFkcRG-tP0ZQAaiQ", "_blank");
  } else if (type === 'garage') {
    window.open("https://search.google.com/local/writereview?placeid=ChIJvQb-qNNbFkcRNyBuT9r5Q00", "_blank");
  }
}
