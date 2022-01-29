import React, {useState} from 'react';
import {Card, MiniCardBody, MiniCardHeader} from "../styles/MiniCardsStyles";
import {Color, IWeather, MiniCardProps} from "../types/types";
import WeatherExtractor from "./WeatherExtractor";
import {Container, GridContainer} from "../styles/MainStyles";
import ImgDeterminant from "./ImgDeterminant";
import { Cross } from '../styles/AdditionalElementsStyles';

const MiniCard: React.FC<MiniCardProps> = (
    {city, onClickAdd, onClickDelete, index}) => {

    const [weather, setWeather] = useState<IWeather>();

    const handleChange = (data: IWeather) => {
        setWeather(data);
    }

    const handleClickAdd = () => {
        onClickAdd(city);
    }

    const handleClickDelete = () => {
        onClickDelete(index);
    }

    return (
        <Card>
            <MiniCardHeader>
                <GridContainer rows={"1fr 4fr 2fr 1fr"}>
                    <Container>
                        <Cross onClick={handleClickDelete}/>
                        {weather?.name}
                    </Container>
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
            <MiniCardBody onClick={handleClickAdd}>
                <Container>More</Container>
            </MiniCardBody>

            <WeatherExtractor
                onChange={handleChange}
                city={city}/>
        </Card>
    );
};

export default MiniCard;