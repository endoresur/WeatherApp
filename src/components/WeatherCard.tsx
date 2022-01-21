import React from 'react';
import {CardBody, CardContainer, CardHeader} from "../styles/CardStyles";
import {IWeather} from "../types/types";
import {Container, GridContainer} from "../styles/MainStyles";

interface WeatherProps {
    weatherData?: IWeather
}

const WeatherCard: React.FC<WeatherProps> = (weatherData) => {
    const weather = weatherData.weatherData;

    const temperature = Math.round(Number(weather?.main.temp) - 273) + '°';
    const temperature_min = Math.round(Number(weather?.main.temp_min) - 273) + '°';
    const temperature_max = Math.round(Number(weather?.main.temp_max) - 273) + '°';
    const weather_type = weather?.weather[0].main;
    const humidity = 'Humidity';
    const humidity_num = weather?.main.humidity + '%';
    const wind = 'Wind';
    const wind_num = weather?.wind.speed + ' m/s';
    const city = weather?.name;
    const country = weather?.sys.country;

    const Header = () => {
        return (
            <CardHeader>
                <GridContainer rows={"2fr 1fr"} br={"white solid 2px"}>
                    <GridContainer rows={"2fr 1fr"}>
                        <Container fs={"3em"}>{temperature}</Container>
                        <Container fs={"1.5em"}>{weather_type}</Container>
                    </GridContainer>
                    <GridContainer columns={"1fr 1fr"}>
                        <GridContainer rows={"1fr 1fr"}>
                            <Container>Min</Container>
                            <Container>{temperature_min}</Container>
                        </GridContainer>
                        <GridContainer rows={"1fr 1fr"}>
                            <Container>Max</Container>
                            <Container>{temperature_max}</Container>
                        </GridContainer>
                    </GridContainer>
                </GridContainer>
                <GridContainer rows={"1fr 1fr"}>
                    <Container fs={"2.5em"}>{city}</Container>
                    <Container fs={"2em"}>{country}</Container>
                </GridContainer>
            </CardHeader>
        )
    }

    const Body = () => {
        return(
            <CardBody>
                <GridContainer>
                    {Math.round(Number(weather?.main.temp) - 273)}
                </GridContainer>
                <GridContainer bl={"black solid 2px"}>
                    45678
                </GridContainer>
            </CardBody>
        )
    }

    return (
        <CardContainer>
            <Header/>
            <Body/>
        </CardContainer>
    );


};

export default WeatherCard;