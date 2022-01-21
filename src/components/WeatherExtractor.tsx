import React, {useEffect, useState} from 'react';
import {ExtractorProps, IWeather} from "../types/types";
import axios from "axios";

const WeatherExtractor: React.FC<ExtractorProps> = (
    {
     apiKey,
     city,
     onChange
    }) => {

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
                await axios.get<IWeather>("http://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid="+apiKey);
            handleChange(response.data);
        }
        catch (e) {
            alert(e);
        }
        setFetched(!fetched);
    }

    return (
        <div>

        </div>
    );
};

export default WeatherExtractor;