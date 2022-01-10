import React from 'react';
import {CardBody, CardContainer, CardHeader} from "../styles/CardStyles";
import {IWeather} from "../types/types";
import {GridContainer} from "../styles/MainStyles";

interface WeatherProps {
    weatherData?: IWeather
}

const WeatherCard: React.FC<WeatherProps> = (weatherData) => {
    const weather = weatherData.weatherData;

    const temperature = Math.round(Number(weather?.main.temp) - 273) + ' °';
    const temperature_min = Math.round(Number(weather?.main.temp_min) - 273) + ' °';
    const temperature_max = Math.round(Number(weather?.main.temp_max) - 273) + ' °';
    const weather_type = weather?.weather[0].main;
    const humidity = 'Humidity';
    const humidity_num = weather?.main.humidity + '%';
    const wind = 'Wind';
    const wind_num = weather?.wind.speed + ' m/s';
    const city = weather?.name;
    const country = weather?.sys.country;

    return (
        <CardContainer>
            <CardHeader>
                <GridContainer rows={"1fr 1fr"}>
                    <div>{temperature}</div>
                    <div>{weather_type}</div>
                </GridContainer>
                <GridContainer rows={"1fr 1fr"}>
                    <GridContainer rows={"1fr 1fr"}>
                        <div>{humidity}</div>
                        <div>{humidity_num}</div>
                    </GridContainer>
                    <p/>
                    <GridContainer rows={"1fr 1fr"}>
                        <div>{wind}</div>
                        <div>{wind_num}</div>
                    </GridContainer>
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