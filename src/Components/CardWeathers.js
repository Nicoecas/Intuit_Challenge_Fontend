import { Media } from "reactstrap"
import "../Styles/CardWeathersStyle.css"
import sunnyrain from "../Images/sunny-rain.jpg";
import rain from "../Images/rain.jpg";
import sunny from "../Images/sunny.jpg";

const CardWeathers = ({ data }) => {
    const weather = data.weatherDays
    const obtenerUrlImagen = (item) => {
        const condicion1 = item.precipprob > 60 && item.precip < 1;
        const condicion2 = item.precipprob > 60 && item.precip >= 1;

        if (condicion1) {
            return `${sunnyrain}`;
          } else if (condicion2) {
            return `${rain}`;
          } else {
            return `${sunny}`;
          }
    };

    return (
        (data.length < 1) ? (
            <div>
                <h4>Sin registros</h4>
            </div>
        ) : (weather.map((item) => (
            <Media className="mediaContainer" key={`${item.weather_date}`}>
                <Media left>
                    <Media object src={obtenerUrlImagen(item)} alt="weather" />
                    <Media heading>
                        {item.weather_date}
                    </Media>
                    <Media body>
                        <p class="card-text">{item.weather_desc}</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>MaxTemp: </strong>{item.weather_tmax}</li>
                            <li class="list-group-item"><strong>MinTemp: </strong>{item.weather_tmin}</li>
                            <li class="list-group-item"><strong>MinTemp: </strong>{item.humidity}</li>
                        </ul>
                        <p class="list-group-item"><strong>PrecipProb: </strong>{item.precipprob}%</p>
                        <p class="list-group-item"><strong>Precip: </strong>{item.precip} inch.</p>
                    </Media>
                </Media>
            </Media>
        )))
    )
}
export default CardWeathers