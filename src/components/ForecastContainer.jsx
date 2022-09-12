import React, {useState, useEffect} from "react";
import DayCard from "./DayCard";
import WeatherService from "../services";
import DegreeToggle from "./DegreeToggle";

const weatherService = new WeatherService();
const ForecastContainer = () => {
     const [weatherData, setWeatherData] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState(false);
     const [degreeType, setDegreeType] = useState("celsius");

     useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const res = await weatherService.FetchFiveDayForecast();
            setWeatherData(res.data);
            setIsLoading(false);
        }
        fetchData()
        .catch((error) => {
            console.error(error);
            setIsLoading(false);
            setError(true);
        })
     }, []);

     const toggleDegree = ({ target: { value } }) => setDegreeType(value);

    return (
        <div className="container-fluid">
        <h1
            style={{ background: "linear-gradient(45deg, #9fa6f9 0%, #6f7bf7 100%", color: "white"}}
            className="display-1 jumbotron py-5 mb-5">
            5 Day Forecast
        </h1>
        <div className="container mt-5">
            <h5 className="text-muted">Rio de Janeiro, Brazil</h5>
            <DegreeToggle degreeType={degreeType} updateForecastDegree={toggleDegree} />
        <div className="row justify-content-center">
            {!isLoading ? weatherData.map((item, index) => (
                <DayCard
                 key={item.dt}
                 data={item}
                 degreeType={degreeType}
                />
            )): <div>Loading Data.....</div>}
        </div>
        {error && <h3 className="text-danger">Error loading data</h3>}
        </div>

        </div>
    )
};

export default ForecastContainer;

