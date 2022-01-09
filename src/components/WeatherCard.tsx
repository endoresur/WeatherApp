import React from 'react';
import {CardBody, CardContainer, CardHeader} from "../styles/CardStyles";
import {IWeather} from "../types/types";

interface WeatherProps {
    weatherData?: IWeather
}

const WeatherCard: React.FC<WeatherProps> = (weatherData) => {
    const weather = weatherData.weatherData;
    return (
        <CardContainer>
            <CardHeader>
                <div>
                    12
                </div>
                <div>fsf</div>
                <div>vdb</div>
            </CardHeader>
            <CardBody>
                <div>{Math.round(Number(weather?.main.temp) - 273)}</div>
                <div>45678</div>
            </CardBody>
        </CardContainer>
    );
};

export default WeatherCard;