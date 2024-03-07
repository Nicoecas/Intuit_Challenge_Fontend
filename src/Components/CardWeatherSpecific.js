import { Card, CardBody } from "reactstrap"
import sunnyrain from "../Images/sunny-rain.jpg";
import rain from "../Images/rain.jpg";
import sunny from "../Images/sunny.jpg";

const CardWeatherSpecific = ({ data }) => {
  const weathers = data.weatherDays
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
    ) : (weathers.map((item) => (
      <Card key={`${item.weather_date}`}>
        <img class="card-img-top" src={obtenerUrlImagen(item)} alt="sunny-rainday"></img>
        <CardBody>
          <h5 class="card-title">{item.weather_date}</h5>
          <p class="card-text">{item.weather_desc}</p>
        </CardBody>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>MaxTemp: </strong>{item.weather_tmax}</li>
          <li class="list-group-item"><strong>MinTemp: </strong>{item.weather_tmin}</li>
          <li class="list-group-item"><strong>MinTemp: </strong>{item.humidity}</li>
        </ul>
        <CardBody>
          <p class="list-group-item"><strong>PrecipProb: </strong>{item.precipprob}%</p>
          <p class="list-group-item"><strong>Precip: </strong>{item.precip} inch.</p>
        </CardBody>
      </Card>
    )))
  )
}
export default CardWeatherSpecific
