import React, {useState} from 'react';
import {APIProps, IWeather} from "../types/types";
import {Container} from "../styles/MainStyles";
import WeatherCard from "./WeatherCard";
import WeatherExtractor from "./WeatherExtractor";

const WeatherPattern: React.FC<APIProps> =
    ({city}) => {

        const [weather, setWeather] = useState<IWeather>();

        const handleChange = (data: IWeather) => {
            setWeather(data);
        }

        return (
            <Container>
                <WeatherExtractor
                    onChange={handleChange}
                    city={city}
                />
                <Container>
                    <WeatherCard weatherData={weather}/>
                </Container>
            </Container>
        );
    };

export default WeatherPattern;