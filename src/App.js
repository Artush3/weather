import axios from "axios";
import Form from "./components/Form";
import City from "./components/City";
import { useState } from "react";

function App() {

  const [city, setCity] = useState([])

  const getWeather = (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bf7e5f3b18478d9f17d9364d9771af1e&units=metric`

    axios.get(url)
      .then(res => setCity([{
        id: Math.random(),
        name: cityName,
        temp: res.data.main.temp,
        feel: res.data.main.feels_like,
        temp_min: res.data.main.temp_min,
        temp_max: res.data.main.temp_max,
      }, ...city]))
      .catch(() => alert("Небольшая ошибочка в названии("))
  }

  const deleteCity = (idCity) => {
    const filterCity = city.filter(el => {
      if(el.id !== idCity) {
        return el
      }
    })
    setCity(filterCity);
  }

  return (
    <main className="App">
      <div className="conteiner_content">
        <Form getWeather={getWeather}></Form>
        <City deleteCity={deleteCity} city={city}></City>
      </div>
    </main>
  );
}

export default App;