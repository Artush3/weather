import { useState } from "react";

function Form(props) {

    const [inputCity, setInputCity] = useState()

    return (
        <section className="section_form">
            <h1>Узнайте погоду прямо сейчас!</h1>
            <form className="section_form_form">
                <label for="weather">Город:</label>
                <input onChange={(e) => setInputCity(e.target.value)} type="text" id="weather" placeholder="Введите навзвание города:"/>
                <button type="button" onClick={() => props.getWeather(inputCity)}>Узнать</button>
            </form>
        </section>
    )
}

export default Form;