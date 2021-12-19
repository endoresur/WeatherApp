import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import Header from "./UI/Header";

const App = () => {
    return (
        <div style={{minHeight: '100vh'}}>
          <BrowserRouter>
              <Header/>
              <div style={{textAlign: "center"}}>
                  QWERTYUIOPOIUYTREW
              </div>
              <AppRouter/>
          </BrowserRouter>
        </div>
    );
};

export default App;