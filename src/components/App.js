import React from "react";
import {Auth} from "./Auth";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Chat} from "./Chat";
import {NotFoundComponent} from "./NotFound";

export const App = () => {
    return <div>
        <Greetings/>
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Auth}/>
                <Route path={'/chat'} component={Chat}/>
                <Route component={NotFoundComponent}/>
            </Switch>
        </BrowserRouter>
    </div>
};

const Greetings = () => {
    return <h1>Chat</h1>
};