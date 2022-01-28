import React, {useState} from 'react';
import WeatherPattern from "./WeatherPattern";
import {ContentContainer, MainContainer} from "../styles/MainStyles";
import {Arrow, BackArrow} from "../styles/AdditionalElementsStyles";
import MiniCard from "./MiniCard";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import '../styles/ContainerAnimations.css';
import MiniCardsList from "./MiniCardsList";
import CardAdder from "./CardAdder";

// npm run deploy

const WeatherList = () => {

    let myCities = ["Moscow", "Boston", "Ekaterinburg", "Paris", "Samara"];
    const [cities, setCities] = useState<string[]>(myCities);
    const [showList, setShowList] = useState<boolean>(true);
    const [choice, setChoice] = useState<string>(cities[0]);

    const click = () => {
        setShowList(!showList);
    }

    const handleChange = (city: string) => {
        setChoice(city);
        click();
    }

    const handleClick = (city: string) => {
        const arr = cities;
        arr.push(city);
        setCities(arr);
        setChoice(city);
        click();
    }

    const ShowMiniCardsContainer = () => {
        return (
            <ContentContainer>
                <MiniCardsList >
                    {cities.map((city, index) => {
                        return (
                            <MiniCard key={index} city={city} onClick={handleChange}/>
                        );
                    })}
                    <CardAdder onClick={handleClick}/>
                </MiniCardsList>
            </ContentContainer>
        );
    }

    const ShowWeatherPattern = () => {
        return (
            <ContentContainer>
                <div onClick={click}>
                    <BackArrow>
                        <Arrow/>
                    </BackArrow>
                </div>
                <WeatherPattern key={choice} city={choice}/>
            </ContentContainer>
        );
    }

    return (
        <MainContainer>
            <SwitchTransition>
                <CSSTransition
                    key={showList ? 1 : 2}
                    timeout={1000}
                    classNames={{
                        enterActive: 'card-enter-active',
                        enterDone: 'card-enter-done',
                        exitActive: 'card-exit-active',
                        exitDone: 'card-exit-done'
                    }}
                    mountOnEnter
                    unmountOnExit
                >
                    {showList ? ShowMiniCardsContainer : ShowWeatherPattern}
                </CSSTransition>
            </SwitchTransition>
        </MainContainer>
    );
};

export default WeatherList;