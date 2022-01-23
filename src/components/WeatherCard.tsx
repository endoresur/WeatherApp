import React, {useEffect, useState} from 'react';
import {CardBody, CardContainer, CardHeader} from "../styles/CardStyles";
import {Color, IWeather} from "../types/types";
import {Container, GridContainer} from "../styles/MainStyles";
import ImgDeterminant from "./ImgDeterminant";
import sunset from "../icons/sunset.png"
import therm from "../icons/therm.png";
import pressure from "../icons/pressure.png";
import wind from "../icons/wind.png";

interface WeatherProps {
    weatherData?: IWeather
}

const WeatherCard: React.FC<WeatherProps> = (weatherData) => {

    const [weather, setWeather] = useState<IWeather>();

    const GetNormalTime = (time: any) => {
        let date = new Date(time * 1000);

        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();

        return (
            <div>
                {hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)}
            </div>
        );
    }

    useEffect(() => {
        setWeather(weatherData.weatherData);
    })

    const Header = () => {
        return (
            <CardHeader>
                <GridContainer rows={"5fr"}>
                    <Container fs={"5em"}>
                        {Math.round(Number(weather?.main.temp) - 273) + '°'}
                    </Container>
                </GridContainer>
                <GridContainer rows={"3fr 1fr"}>
                    <Container>
                        <ImgDeterminant
                            weather={weather?.weather[0].main}
                            color={Color.Light}
                        />
                    </Container>
                    <Container fs={"1.5em"}>
                        {weather?.weather[0].main}
                    </Container>
                </GridContainer>
                <GridContainer rows={"1fr 1fr"}>
                    <Container fs={"2.5em"}>
                        {weather?.name}
                    </Container>
                    <Container fs={"2em"}>
                        {weather?.sys.country}
                    </Container>
                </GridContainer>
            </CardHeader>
        )
    }

    const Body = () => {
        return (
            <CardBody>

                <GridContainer rows={"3fr 2fr"} br={"black solid 2px"}>
                    <Container>
                        <img src={sunset} width={"120px"} alt={''}/>
                    </Container>
                    <Container>
                        <GridContainer rows={"1fr 1fr"} columns={"1fr 1fr"}>
                            <Container>Sunrise</Container>
                            <Container>Sunset</Container>
                            <Container>
                                {GetNormalTime(weather?.sys.sunrise)}
                            </Container>
                            <Container>
                                {GetNormalTime(weather?.sys.sunset)}
                            </Container>
                        </GridContainer>
                    </Container>
                </GridContainer>

                <GridContainer rows={"3fr 2fr"} br={"black solid 2px"}>
                    <Container mt={"5px"} mb={"-5px"}>
                        <img src={therm} width={"120px"} alt={''}/>
                    </Container>
                    <Container>
                        <GridContainer rows={"1fr 1fr"} columns={"1fr 1fr"}>
                            <Container>Min</Container>
                            <Container>Max</Container>
                            <Container>
                                {Math.round(Number(weather?.main.temp_min) - 273) + '°'}
                            </Container>
                            <Container>
                                {Math.round(Number(weather?.main.temp_max) - 273) + '°'}
                            </Container>
                        </GridContainer>
                    </Container>
                </GridContainer>

                <GridContainer rows={"3fr 2fr"} br={"black solid 2px"}>
                    <Container mt={"5px"} mb={"-5px"}>
                        <img src={pressure} width={"120px"} alt={''}/>
                    </Container>
                    <GridContainer rows={"1fr 1fr"}>
                        <Container>Pressure</Container>
                        <Container>{weather?.main.pressure}</Container>
                    </GridContainer>
                </GridContainer>

                <GridContainer rows={"3fr 2fr"}>
                    <Container mt={"5px"} mb={"-5px"}>
                        <img src={wind} width={"120px"} alt={''}/>
                    </Container>
                    <Container>
                        <GridContainer rows={"1fr 1fr"} columns={"1fr 1fr"}>
                            <Container>Speed</Container>
                            <Container>Degrees</Container>
                            <Container>{weather?.wind.speed}</Container>
                            <Container>{weather?.wind.deg}</Container>
                        </GridContainer>
                    </Container>
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