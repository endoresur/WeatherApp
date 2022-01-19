import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIProps, IWeather} from "../types/types";
import {Container} from "../styles/MainStyles";
import WeatherCard from "./WeatherCard";

const WeatherPattern: React.FC<APIProps> =
    ({
         apiKey,
         city
     }) => {

    const [weather, setWeather] = useState<IWeather>();
    const [fetched, setFetched] = useState<boolean>(true);

    useEffect(() => {
        if(fetched) {
            fetchWeather();
        }
    });

    async function fetchWeather() {
        try {
            const response =
                await axios.get<IWeather>("http://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid="+apiKey);
            let result: IWeather = response.data;
            setWeather(result);
        }
        catch (e) {
            alert(e);
        }
        setFetched(!fetched);
    }

    return (
        <Container>
            <WeatherCard weatherData={weather}/>
        </Container>
    );
};

export default WeatherPattern;