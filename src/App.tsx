import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import Header from "./UI/Header";
import {MainContainer} from "./styles/MainStyles";

const App = () => {
    return (
        <MainContainer>
          <BrowserRouter>
              <Header/>
              <div style={{textAlign: "center"}}>
                  QWERTYUIOPOIUYTREW
              </div>
              <AppRouter/>
          </BrowserRouter>
        </MainContainer>
    );
};

export default App;