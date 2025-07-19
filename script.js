// Orologio in tempo reale
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString("it-IT");
    const date = now.toLocaleDateString("it-IT", { weekday: 'long', day: 'numeric', month: 'long' });
    document.getElementById("clock").innerText = `${time}\n${date}`;
  }
  setInterval(updateClock, 1000);
  updateClock();
  
  // Meteo
  async function getWeather() {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${WEATHER_API_KEY}`);
      const data = await res.json();
      const temp = Math.round(data.main.temp);
      const description = data.weather[0].description;
      document.getElementById("weather").innerText = `${CITY}: ${temp}°C, ${description}`;
    } catch (err) {
      document.getElementById("weather").innerText = "Errore meteo";
    }
  }
  getWeather();
  
  // Citazione casuale
  async function getQuote() {
    try {
      const res = await fetch("https://zenquotes.io/api/random");
      const data = await res.json();
      document.getElementById("quote").innerText = `"${data[0].q}" — ${data[0].a}`;
    } catch (err) {
      document.getElementById("quote").innerText = "Errore citazione";
    }
  }
  getQuote();
  