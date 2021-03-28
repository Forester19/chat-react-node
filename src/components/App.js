import React from "react";
import {Auth} from "./Auth";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Chat} from "./Chat";
import {NotFoundComponent} from "./NotFound";
import {Loading} from "./Loading";
import {Overlay} from "./Overlay";
import {Error} from "./Error";

export const App = () => {
    return <div className={"wrapper"}>
        <Overlay/>
        <Error/>
        <Greetings/>
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Auth}/>
                <Route path={'/chat'} component={Chat}/>
                <Route component={NotFoundComponent}/>
            </Switch>

        </BrowserRouter>
        <Loading/>
    </div>
};

const Greetings = () => {
    return <h1>Chat</h1>
};