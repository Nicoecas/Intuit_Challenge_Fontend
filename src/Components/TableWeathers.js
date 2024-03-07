import { Table } from "reactstrap"

const TableWeathers = ({ data }) => {
    const weathers = data.weatherDays
    return (
        <Table stripped responsive>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>TMax</th>
                    <th>TMin</th>
                    <th>Humidity</th>
                    <th>Precipprob</th>
                    <th>Precip</th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="7">Sin registros</td>
                        </tr>
                    ) :
                        (weathers.map((item) => (
                            <tr key={`${item.weather_date}`}>
                                <td>{item.weather_date}</td>
                                <td>{item.weather_desc}</td>
                                <td>{item.weather_tmax}</td>
                                <td>{item.weather_tmin}</td>
                                <td>{item.humidity}</td>
                                <td>{item.precipprob}</td>
                                <td>{item.precip}</td>
                            </tr>
                        )))
                }
            </tbody>
        </Table>
    )
}
export default TableWeathers


