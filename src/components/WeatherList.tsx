import React, {useState} from 'react';
import WeatherPattern from "./WeatherPattern";
import {Container} from "../styles/MainStyles";
import {Arrow, BackArrow} from "../styles/AdditionalElementsStyles";
import {MiniCardsContainer} from "../styles/MiniCardsStyles";
import MiniCard from "./MiniCard";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import '../styles/ContainerAnimations.css';

const WeatherList = () => {
    const myCities = ["Moscow", "Boston", "Ekaterinburg"];
    const [cities, setCities] = useState(myCities);

    const [showList, setShowList] = useState<boolean>(true);
    const [choice, setChoice] = useState<string>(cities[0]);

    const click = () => {
        console.log("click");
        setShowList(!showList);
    }

    const handleChange = (city: string) => {
        setChoice(city);
        click();
    }

    const ShowMiniCardsContainer = () => {
        return (
            <MiniCardsContainer>
                {cities.map((city) => {
                    return (
                        <MiniCard key={city} city={city} onClick={handleChange}/>
                    );
                })}
            </MiniCardsContainer>
        );
    }

    const ShowWeatherPattern = () => {
        return (
            <div>
                <div onClick={click}>
                    <BackArrow>
                        <Arrow/>
                    </BackArrow>
                </div>
                <WeatherPattern key={choice} city={choice}/>
            </div>
        );
    }

    return (
        <Container mt={'60px'}>
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
    );
};

export default WeatherList;