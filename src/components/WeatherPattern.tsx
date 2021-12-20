import React, {useEffect, useState} from 'react';
import axios from "axios";

interface WeatherProps {
    api_key: string,
    city: string
}

const WeatherPattern: React.FC<WeatherProps> =
    ({
         api_key,
         city
     }) => {

    const [weather, setWeather] = useState('');

    useEffect(() => {
        fetchWeather();
    });

    async function fetchWeather() {
        try {
            const response =
                await axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid="+api_key);
            setWeather(response.data.main.temp);
        }
        catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            {weather}
        </div>
    );
};

export default WeatherPattern;