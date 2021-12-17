import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import Header from "./UI/Header";

const App = () => {
    return (
        <div>
          <BrowserRouter>
              <Header/>
              <AppRouter/>
          </BrowserRouter>
        </div>
    );
};

export default App;