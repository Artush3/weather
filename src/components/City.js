function City(props) {
    return (
        <section className="section_city">
            {props.city.map(el => (
                <div className="city_weather">
                    <p onClick={() => props.deleteCity(el.id)}>X</p>
                    <h1>{el.name}</h1>
                    <h1>Температура: {el.temp}</h1>
                    <h1>Чувствуется: {el.feel}</h1>
                    <h1>Минимальная температура: {el.temp_min}</h1>
                    <h1>Максимальная температура: {el.temp_max}</h1>
                </div>
            ))}
        </section>
    )
}

export default City;