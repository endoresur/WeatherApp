import React, {EffectCallback, useEffect, useState} from 'react';
import axios from "axios";
import {APIProps, IWeather} from "../types/types";
import {Container} from "../styles/MainStyles";
import WeatherCard from "./WeatherCard";
import WeatherExtractor from "./WeatherExtractor";

const WeatherPattern: React.FC<APIProps> =
    ({
         apiKey,
         city
    }) => {

        const [weather, setWeather] = useState<IWeather>();

        const handleChange = (data: IWeather) => {
            setWeather(data);
        }

        return (
            <div>
                <WeatherExtractor
                    onChange={handleChange}
                    apiKey={apiKey}
                    city={city}/>
                <Container>
                    <WeatherCard weatherData={weather}/>
                </Container>
            </div>
        );
    };

export default WeatherPattern;