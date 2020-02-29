import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { WeatherStore } from "./WeatherStore";
import ErrorPage from "./component/ErrorPage";
import withLocation from "./utils/withLocation";
import './iconfont/iconfont.css';

const AppRouter = () =>{
        return(
            <BrowserRouter>
                <Switch>                    
                    <Route exact path="/" render={(props)=>(withLocation(WeatherStore,props))}/>
                    <Route exact path="/:city/:region/" render={(props)=>(withLocation(WeatherStore,props))}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </BrowserRouter>
        )
}

export default AppRouter;