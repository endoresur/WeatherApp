import React from 'react';
import {CardBody, CardContainer, CardHeader} from "../styles/CardStyles";
import {IWeather} from "../types/types";
import {Container} from "../styles/MainStyles";

interface WeatherProps {
    weatherData?: IWeather
}

const WeatherCard: React.FC<WeatherProps> = (weatherData) => {
    const weather = weatherData.weatherData;
    return (
        <CardContainer>
            <CardHeader>
                <Container>
                    {Math.round(Number(weather?.main.temp) - 273)}
                </Container>
                <Container>
                    {weather?.wind.speed}
                </Container>
                <Container>
                    {weather?.name}
                </Container>
            </CardHeader>
            <CardBody>
                {Math.round(Number(weather?.main.temp) - 272)}
            </CardBody>
        </CardContainer>
    );
};

export default WeatherCard;