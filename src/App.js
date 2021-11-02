import React from "react";
import Login from '../src/pages/Login'

import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Login>           
          </Login>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
