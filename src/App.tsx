import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Header from "./components/Header";
import {MainContainer} from "./styles/MainStyles";
import WeatherList from "./components/WeatherList";

const App = () => {
    return (
        <MainContainer>
          <BrowserRouter>
              <Header/>
              <WeatherList/>
          </BrowserRouter>
        </MainContainer>
    );
};

export default App;