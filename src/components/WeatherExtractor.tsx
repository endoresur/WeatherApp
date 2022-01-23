import React, {useEffect, useState} from 'react';
import {ExtractorProps, IWeather} from "../types/types";
import axios from "axios";

const WeatherExtractor: React.FC<ExtractorProps> = (
    {
     city,
     onChange
    }) => {

    const apiKey = "73db7f4301d0c6f7878a5bb80359f431";
    const [fetched, setFetched] = useState<boolean>(true);

    useEffect(() => {
        if(fetched) {
            fetchWeather();
        }
    });

    const handleChange = (data: IWeather) => {
        onChange(data);
    }

    async function fetchWeather() {
        try {
            const response =
                await axios.get<IWeather>(
                    "https://api.openweathermap.org/data/2.5/weather?q=" +
                    city +
                    "&appid="+apiKey);
            handleChange(response.data);
        }
        catch (e) {
            alert(e);
        }
        setFetched(!fetched);
    }

    return (<></>);
};

export default WeatherExtractor;