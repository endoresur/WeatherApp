import React, {useState} from 'react';
import {Card, MiniCardBody, MiniCardHeader} from "../styles/MiniCardsStyles";
import {IWeather, MiniCardProps} from "../types/types";
import WeatherExtractor from "./WeatherExtractor";
import {Container, GridContainer} from "../styles/MainStyles";

const MiniCard: React.FC<MiniCardProps> = (
    {city, onClick}) => {

    const [weather, setWeather] = useState<IWeather>();

    const handleChange = (data: IWeather) => {
        setWeather(data);
    }

    const handleClick = (event: any) => {
        onClick(city);
    }

    return (
        <Card>
            <MiniCardHeader>
                <GridContainer rows={"1fr 2fr 1fr"}>
                    <Container>{weather?.name}</Container>
                    <Container fs={"4em"}>
                        {Math.round(Number(weather?.main.temp) - 273) + '°'}
                    </Container>
                    <Container fs={"2em"}>
                        {weather?.weather[0].main}
                    </Container>
                </GridContainer>
            </MiniCardHeader>
            <MiniCardBody>
                <Container>
                    <button onClick={handleClick}>More</button>
                </Container>
            </MiniCardBody>

            <WeatherExtractor
                onChange={handleChange}
                city={city}/>
        </Card>
    );
};

export default MiniCard;