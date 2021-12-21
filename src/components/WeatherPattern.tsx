import React, {useEffect, useState} from 'react';
import axios from "axios";
import {IWeather} from "../types/types";
import {Container} from "../styles/MainStyles";

interface APIProps {
    api_key: string,
    city: string
}

const WeatherPattern: React.FC<APIProps> =
    ({
         api_key,
         city
     }) => {

    const [weather, setWeather] = useState<IWeather>();

    useEffect(() => {
        fetchWeather();
    });

    async function fetchWeather() {
        try {
            const response =
                await axios.get<IWeather>("http://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid="+api_key);
            let result: IWeather = response.data;
            setWeather(result);
        }
        catch (e) {
            alert(e);
        }
    }

    return (
        <Container>
            {weather?.main.temp}
        </Container>
    );
};

export default WeatherPattern;