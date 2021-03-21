import React from "react";
import {updateIsAuth, useChatContext} from "../utils/ChatContext";

export const Auth = () => {
    const {state, dispatch} = useChatContext();

    const handleParamChange = () => {
        let newV = !state.isAuth;
        dispatch(updateIsAuth(newV));
    };
    console.log("Auth state " + JSON.stringify(state));

    return <div>
        <div>React app is logged {state.isAuth ? 'true' : 'false'}</div>
        <button onClick={handleParamChange}> Change</button>
    </div>
};