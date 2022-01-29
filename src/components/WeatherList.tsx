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
    const [update, setUpdate] = useState<boolean>(false);
    const [showList, setShowList] = useState<boolean>(true);
    const [choice, setChoice] = useState<string>(cities[0]);

    const click = () => {
        setShowList(!showList);
    }

    const handleChangeAdd = (city: string) => {
        setChoice(city);
        click();
    }

    const handleChangeDelete = (index: number) => {
        cities.splice(index, 1);
        setCities(cities);
        setUpdate(!update);
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
                <MiniCardsList key={update}>
                    {cities.map((city, index) => {
                        return (
                            <MiniCard
                                key={index}
                                city={city}
                                onClickAdd={handleChangeAdd}
                                onClickDelete={handleChangeDelete}
                                index={index}
                            />
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