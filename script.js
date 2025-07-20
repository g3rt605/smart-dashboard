// Data e ora
function aggiornaOrario() {
  const ora = new Date();
  document.getElementById("orario").textContent = ora.toLocaleTimeString();
  document.getElementById("data").textContent = ora.toLocaleDateString("it-IT", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
setInterval(aggiornaOrario, 1000);
aggiornaOrario();

// Citazione
function caricaCitazione() {
  fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("citazione").innerHTML = `
        <blockquote>"${data.content}"</blockquote>
        <p>— ${data.author}</p>
      `;
    })
    .catch(() => {
      document.getElementById("citazione").textContent = "Errore nel caricamento citazione.";
    });
}
caricaCitazione();

// Meteo
function caricaMeteo() {
  const city = "Napoli"; // Cambia la città se vuoi
  const key = config.weatherApiKey;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=it`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("meteo").innerHTML = `
        <p><strong>${data.name}</strong>: ${data.weather[0].description}</p>
        <p>🌡️ ${data.main.temp}°C | 💧 Umidità: ${data.main.humidity}%</p>
      `;
    })
    .catch(() => {
      document.getElementById("meteo").textContent = "Errore nel caricamento meteo.";
    });
}
caricaMeteo();
