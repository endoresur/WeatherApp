import React, {useState} from 'react';
import WeatherPattern from "./WeatherPattern";
import {ICity} from "../types/types";
import {Container} from "../styles/MainStyles";
import {Arrow, BackArrow} from "../styles/AdditionalElementsStyles";

const API_KEY = "73db7f4301d0c6f7878a5bb80359f431";
const city = "Moscow";

const WeatherList = () => {
    const [cities, setCities] = useState<ICity[]>([]);

    return (
        <Container>
            <div>
                <BackArrow>
                    <Arrow/>
                </BackArrow>
            </div>
            <WeatherPattern api_key={API_KEY} city={city}/>
        </Container>
    );
};

export default WeatherList;