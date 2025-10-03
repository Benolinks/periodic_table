
    const open = document.getElementById('open');
const close = document.getElementById('close');
const nav_links = document.getElementById('nav_links');
const nav = document.getElementById('nav');


// toogle for mobile screen and desktop screen
open.addEventListener('click', () => {
if (window.innerWidth <= 1208) {
close.style.display = 'block';
open.style.display = 'none';
nav_links.style.display = 'block';
nav_links.style.display = 'flex ';

} else {
close.style.display = 'none';
open.style.display = 'block';
nav_links.style.display = 'none';
}

if ((window.innerWidth>= 1208) || (window.includes(close))){ {
    close.style.display = 'none';
    open.style.display = 'block';
    nav_links.style.display = 'flex';
  
}
}
})



    const elementsData = [
      {symbol: "H", name: "Hydrogen", number: 1, info: 
      "The lightest element and most abundant in the universe, hydrogen is a highly flammable gas used in fuels, rockets, and ammonia production."},

      {symbol: "H e", name: "Helium", number: 2, info: "A non-flammable noble gas lighter than air, helium is used in balloons, airships, and cryogenics."},

      {symbol: "L i", name: "Lithium", number: 3, info: "A soft, reactive metal, lithium is widely used in rechargeable batteries, ceramics, and medicine."},

      {symbol: "B e", name: "Beryllium", number: 4, info: "A hard, toxic metal, beryllium is valued in aerospace, X-ray windows, and specialized alloys.."},


      {symbol: "B", name: "Boron", number: 5, info: "A metalloid with versatile properties, boron is used in glass, ceramics, detergents, and as a semiconductor.."},


      {symbol: "C", name: "Carbon", number: 6, info: "The basis of all organic life, carbon exists in forms like graphite and diamond, and is central to fuels, steel, and polymers."},


      {symbol: "N", name: "Nitrogen", number: 7, info: "A colorless gas making up 78% of Earth’s atmosphere, nitrogen is crucial in fertilizers, explosives, and refrigeration."},


      {symbol: "O", name: "Oxygen", number: 8, info: "Essential for life and combustion, oxygen forms 21% of the air and is used in medicine, industry, and steelmaking."},


      {symbol: "F", name: "Fluorine", number: 9, info: "The most reactive element, fluorine is a pale yellow gas used in toothpaste, Teflon, and refrigerants."},


      {symbol: "N e", name: "Neon", number: 10, info: "An inert noble gas, neon glows with a red-orange light in signs and discharge tubes."},


      {symbol: "N a", name: "Sodium", number: 11, info: "A reactive soft metal, sodium is most known in table salt (NaCl) and is also used in glassmaking and soaps."},

      {symbol: "M g", name: "Magnesium", number: 12, info: "A light, silvery metal that burns with a bright flame, magnesium is used in fireworks, alloys, and medicine.."},

      {symbol: "A l", name: "Aluminium", number: 13, info: "A lightweight, corrosion-resistant metal, aluminium is vital in packaging, construction, and transportation."},


      {symbol: "S i", name: "Silicon", number: 14, info: "The main element in sand and glass, silicon is essential in electronics, semiconductors, and solar panels."},


      {symbol: "P", name: "Phosphorus", number: 15, info: "Found in DNA and bones, phosphorus is used in fertilizers, detergents, and matches"},


      {symbol: "S", name: "Sulfur", number: 16, info: "A yellow non-metal, sulfur is key in fertilizers, rubber vulcanization, and gunpowder."},


      {symbol: "C l", name: "Chlorine", number: 17, info: "A greenish-yellow toxic gas, chlorine is widely used in disinfectants, bleach, and plastics like PVC."},


      {symbol: "A r", name: "Argon", number: 18, info: "An inert noble gas, argon is used in light bulbs, welding, and lasers."},


      {symbol: "K", name: "Potassium", number: 19, info: "A reactive metal vital for nerve and muscle function, potassium is heavily used in fertilizers and health supplements."},

      {symbol: "C a", name: "Calcium", number: 20, info: "An essential element for bones, teeth, and shells, calcium is also used in cement, plaster, and metallurgy."}
    ];

    const tableContainer = document.getElementById("table");
    const infoBox = document.getElementById("info");
    const langSelect = document.getElementById("lang");
    const voiceSelect = document.getElementById("voiceSelect");

    // Load available voices into dropdown
    let voices = [];
    function loadVoices() {
      voices = window.speechSynthesis.getVoices();
      voiceSelect.innerHTML = "";
      voices.forEach((voice, i) => {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = voice.name + " (" + voice.lang + ")" + (voice.default ? " [default]" : "");
        voiceSelect.appendChild(option);
      });
    }
    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }

    // Create clickable element boxes
    elementsData.forEach(function(item) {
      const elementBox = document.createElement("div");
      elementBox.className = "element";
      elementBox.innerText = item.symbol;

      elementBox.addEventListener("click", function() {
        // Show details
        infoBox.innerHTML =
          "<h3>" + item.name + " (" + item.symbol + ")</h3>" +
          "<p><strong>Atomic Number:</strong> " + item.number + "</p>" +
          "<p>" + item.info + "</p>";

        // Speak details
        const message = item.name + ", symbol " + item.symbol +
          ", atomic number " + item.number + ". " + item.info;

        const speech = new SpeechSynthesisUtterance(message);

        // Get chosen language
        const chosenLang = langSelect.value;
        speech.lang = chosenLang;

        // Try to match a voice with the selected language
        const matchingVoice = voices.find(v => v.lang === chosenLang);
        if (matchingVoice) {
          speech.voice = matchingVoice;
        } else {
          // fallback to whatever is picked in the dropdown
          const selectedVoice = voices[voiceSelect.value];
          if (selectedVoice) {
            speech.voice = selectedVoice;
          }
        }

        // Speak it
        window.speechSynthesis.speak(speech);
      });

      tableContainer.appendChild(elementBox);
    });
  