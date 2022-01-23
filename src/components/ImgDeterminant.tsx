import React, {useEffect, useState} from 'react';
import {Color, ImgDeterminantProps, Weather} from "../types/types";
import {dark, light} from "../types/icons";

const ImgDeterminant: React.FC<ImgDeterminantProps> = (
    {weather, color}) => {

    const [image, setImage] = useState(dark.cloud_dark);

    const Distribute = () => {
        if (color === Color.Dark) {
            if (weather === Weather.Fog || weather === Weather.Mist) { setImage(dark.fog_dark); }
            if (weather === Weather.Sun) { setImage(dark.sun_dark); }
            if (weather === Weather.Cloud) { setImage(dark.cloud_dark); }
            if (weather === Weather.Rain) { setImage(dark.rain_dark); }
            if (weather === Weather.Snow) { setImage(dark.snow_dark); }
            if (weather === Weather.Storm) { setImage(dark.storm_dark); }
        }
        else if (color === Color.Light) {
            if (weather === Weather.Fog || weather === Weather.Mist) { setImage(light.fog_light); }
            if (weather === Weather.Sun) { setImage(light.sun_light); }
            if (weather === Weather.Cloud) { setImage(light.cloud_light); }
            if (weather === Weather.Rain) { setImage(light.rain_light); }
            if (weather === Weather.Snow) { setImage(light.snow_light); }
            if (weather === Weather.Storm) { setImage(light.storm_light); }
        }
    }

    useEffect(() => {
        Distribute();
    })

    return (
        <div>
            <img src={image} width="180" height="180" alt=""/>
        </div>
    );
};

export default ImgDeterminant;