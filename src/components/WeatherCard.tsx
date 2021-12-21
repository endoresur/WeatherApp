import React from 'react';
import {CardBody, CardContainer, CardHeader} from "../styles/CardStyles";
import {IWeather} from "../types/types";

interface WeatherProps {
    weather?: IWeather
}

const WeatherCard: React.FC<WeatherProps> = (weather) => {
    return (
        <CardContainer>
            <CardHeader>
                {weather.weather?.name}
            </CardHeader>
            <CardBody>
                {Math.round(Number(weather.weather?.main.temp) - 272)}
            </CardBody>
        </CardContainer>
    );
};

export default WeatherCard;