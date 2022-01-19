import React, {useState} from 'react';
import WeatherPattern from "./WeatherPattern";
import {ICity} from "../types/types";
import {Container} from "../styles/MainStyles";
import {Arrow, BackArrow} from "../styles/AdditionalElementsStyles";
import {MiniCardsContainer} from "../styles/MiniCardsStyles";
import MiniCard from "./MiniCard";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import '../styles/ContainerAnimations.css';

const API_KEY = "73db7f4301d0c6f7878a5bb80359f431";
const city = "Moscow";

const WeatherList = () => {
    const [cities, setCities] = useState<ICity[]>([]);

    const [showList, setShowList] = useState<boolean>(true);

    const click = () => {
        console.log("click");
        setShowList(!showList);
    }

    const ShowMiniCardsContainer = () => {
        return (
            <CSSTransition
                in={showList}
                timeout={2000}
                classNames={{
                    enterActive: 'container-enter-active',
                    enterDone: 'container-enter-done',
                    exitActive: 'container-exit-active',
                    exitDone: 'container-exit-done'
                }}
                mountOnEnter
                unmountOnExit
            >
                <MiniCardsContainer>
                    <MiniCard/>
                    <MiniCard/>
                </MiniCardsContainer>
            </CSSTransition>
        )
    }

    const ShowWeatherPattern = () => {
        return (
            <CSSTransition
                in={!showList}
                timeout={2000}
                classNames={{
                    enterActive: 'card-enter-active',
                    enterDone: 'card-enter-done',
                    exitActive: 'card-exit-active',
                    exitDone: 'card-exit-done'
                }}
                mountOnEnter
                unmountOnExit
            >
                <WeatherPattern apiKey={API_KEY} city={city}/>
            </CSSTransition>
        )
    }

    return (
        <Container mt={'80px'}>
            <div onClick={click}>
                <BackArrow>
                    <Arrow/>
                </BackArrow>
            </div>
            <Container>
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
            </Container>
        </Container>
    );
};

export default WeatherList;