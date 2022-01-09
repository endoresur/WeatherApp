import React from 'react';
import {CardBody, CardContainer, CardHeader} from "../styles/CardStyles";
import {IWeather} from "../types/types";
import {GridContainer} from "../styles/MainStyles";

interface WeatherProps {
    weatherData?: IWeather
}

const WeatherCard: React.FC<WeatherProps> = (weatherData) => {
    const weather = weatherData.weatherData;

    const temperature = '12 °';
    const temperature_min = '9 °';
    const temperature_max = '15 °';
    const cloudy = 'cloudy';
    const humidity = 'humidity';
    const humidity_num = '64%';
    const wind = 'wind';
    const wind_num = '12 K/M';
    const city = 'Moscow';
    const country = 'Russia'

    return (
        <CardContainer>
            <CardHeader>
                <GridContainer rows={"1fr 1fr"}>
                    <div>{temperature}</div>
                    <div>{cloudy}</div>
                </GridContainer>
                <GridContainer rows={"1fr 1fr"}>
                    <div>{humidity}</div>
                    <div>{humidity_num}</div>
                </GridContainer>
                <GridContainer rows={"1fr 1fr"}>
                    <div>{city}</div>
                    <div>{country}</div>
                </GridContainer>
            </CardHeader>
            <CardBody>
                <div>{Math.round(Number(weather?.main.temp) - 273)}</div>
                <div>45678</div>
            </CardBody>
        </CardContainer>
    );
};

export default WeatherCard;