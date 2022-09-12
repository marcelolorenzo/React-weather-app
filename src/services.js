import { WEATHER_URL, WEATHER_API_KEY } from "./constants";

class WeatherService {
    async FetchFiveDayForecast() {
        return new Promise(async (sucess, failure) => {
            try {
                const response = await fetch(`${WEATHER_URL}${WEATHER_API_KEY}`);
                if (response.ok) {
                    const json = await response.json();
                    const data = json.list
                    .filter(day => day.dt_txt.includes("00:00:00"))
                    .map(item => ({
                        temp: item.main.temp,
                        dt: item.dt,
                        date: item.dt_txt,
                        iconId: item.weather[0].id,
                        desc: item.weather[0].description
                    }));
                    sucess({ response, data });
                     } else { 
                        failure({ error: "Invalid http request" });
                }
            } catch (error) {
                failure(error);
            }
        }) 
    }
}

export default WeatherService;