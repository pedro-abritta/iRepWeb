import React from "react";
import {Switch, Route} from 'react-router-dom';

import Login from "./pages/Login";
import CadastroAluno from "./pages/CadastroAluno";
import CadastroRepublica from "./pages/CadastroRepublica";

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/cadastroAluno">
                <CadastroAluno/>
            </Route>
            <Route exact path="/cadastroRepublica">
                <CadastroRepublica/>
            </Route>
        </Switch>

    );
}
