import { Col, Container, Row, Card, CardHeader, CardBody } from "reactstrap"
import { useEffect, useState } from "react"
import CardWeatherSpecific from "./Components/CardWeatherSpecific"
import CardWeathers from "./Components/CardWeathers"
import TableWeatherSpecific from "./Components/TableWeatherSpecific"
import TableWeathers from "./Components/TableWeathers"
import FormSpecificDay from "./Components/FormSpecificDay"
import FormDays from "./Components/FormDays"
import "./Styles/AppStyle.css"

const App = () => {

    const [weathers, setWeathers] = useState([])
    const getDaysWeather = async (initialLocation, initialDays) => {
        let getDaysWeatherLink = "https://localhost:44310/weather/getDaysWeather?Location=" + initialLocation + "&Days=" + initialDays
        try {
            const response = await fetch(getDaysWeatherLink)
            if (response.ok) {
                const data = await response.json()
                setWeathers(data)
            } else {
                console.log(getDaysWeatherLink);
                console.log("Connect Error")
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    useEffect(() => {
        const initialLocation = "Buenos Aires";
        const initialDays = "5";
        getDaysWeather(encodeURI(initialLocation), initialDays)
    }, [])

    const FormDaysData = async (data) => {
        console.log(encodeURI(data.location));
        await getDaysWeather(encodeURI(data.location), data.days);
    };

    //________________________________________________________________________________________________
    const [weather, setWeather] = useState([])
    const getWeatherSpecificDay = async (initialLocation, initialDate) => {
        let getWeatherSpecificDayLink = "https://localhost:44310/weather/getWeatherSpecificDay?Location=" +  initialLocation + "&DateTime=" + initialDate
        try {
            const response = await fetch(getWeatherSpecificDayLink);
            if (response.ok) {
                const data = await response.json();
                setWeather(data);
            } else {
                console.log(getWeatherSpecificDayLink);
                console.log("Connect Error");
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    useEffect(() => {
        const initialLocation = "Buenos Aires";
        const initialDate = "2024-03-01T15:53:44.667Z";
        getWeatherSpecificDay(encodeURI(initialLocation), initialDate)
    }, [])

    const FormSpecificDayData = async (data) => {
        console.log(encodeURI(data.location));
        console.log(data.date);
        await getWeatherSpecificDay(encodeURI(data.location), data.date);
    };
    //________________________________________________________________________________________________



    return (
        <Container>
            <Row className="mt-10">
                <Col sm="12">
                    <FormDays FormDaysData={FormDaysData}></FormDays>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Specific Weather</h5>
                        </CardHeader>
                        <CardBody>
                            <CardWeathers data={weathers}></CardWeathers>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col sm="12">
                    <FormSpecificDay FormSpecificDayData={FormSpecificDayData}></FormSpecificDay>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col sm="4" className="col-especificday">
                    <Card>
                        <CardHeader>
                            <h5>Specific Weather</h5>
                        </CardHeader>
                        <CardBody>
                            <CardWeatherSpecific data={weather}></CardWeatherSpecific>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default App