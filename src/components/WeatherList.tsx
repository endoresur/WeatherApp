import React, {useState} from 'react';
import WeatherPattern from "./WeatherPattern";
import {ICity} from "../types/types";

const API_KEY = "73db7f4301d0c6f7878a5bb80359f431";
const city = "Moscow";

const WeatherList = () => {
    const [cities, setCities] = useState<ICity[]>([]);

    return (
        <div>
            <WeatherPattern api_key={API_KEY} city={city}/>
        </div>
    );
};

export default WeatherList;