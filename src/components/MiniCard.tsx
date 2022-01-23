import React, {useState} from 'react';
import {Button, Card, MiniCardBody, MiniCardHeader} from "../styles/MiniCardsStyles";
import {Color, IWeather, MiniCardProps} from "../types/types";
import WeatherExtractor from "./WeatherExtractor";
import {Container, GridContainer} from "../styles/MainStyles";
import ImgDeterminant from "./ImgDeterminant";

const MiniCard: React.FC<MiniCardProps> = (
    {city, onClick}) => {

    const [weather, setWeather] = useState<IWeather>();

    const handleChange = (data: IWeather) => {
        setWeather(data);
    }

    const handleClick = () => {
        onClick(city);
    }

    return (
        <Card>
            <MiniCardHeader>
                <GridContainer rows={"1fr 4fr 2fr 1fr"}>
                    <Container>{weather?.name}</Container>
                    <Container>
                        <ImgDeterminant
                            weather={weather?.weather[0].main}
                            color={Color.Light}
                        />
                    </Container>
                    <Container fs={"4em"}>
                        {Math.round(Number(weather?.main.temp) - 273) + '°'}
                    </Container>
                    <Container fs={"1.5em"}>
                        {weather?.weather[0].main}
                    </Container>
                </GridContainer>
            </MiniCardHeader>
            <MiniCardBody>
                <Container>
                    <Button onClick={handleClick}>More</Button>
                </Container>
            </MiniCardBody>

            <WeatherExtractor
                onChange={handleChange}
                city={city}/>
        </Card>
    );
};

export default MiniCard;