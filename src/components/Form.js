function Form() {
    return (
        <section className="section_form">
            <h1>Узнайте погоду прямо сейчас!</h1>
            <form className="section_form_form">
                <label for="weather">Город:</label>
                <input type="text" id="weather" placeholder="Введите навзвание города:"/>
                <button>Узнать</button>
            </form>
        </section>
    )
}

export default Form;