import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Login from '../pages/login'
import Perfil from '../pages/perfil'

class Router extends Component {
    render() {
        return(
            <>
                <Route component = { Login }  path="/" exact />
                <Route component = { Perfil }  path="/perfil" exact />
            </>
        )
    }
}

export default Router;