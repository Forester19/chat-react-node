import React, {useState}  from "react";
import {updateIsAuth, useChatContext} from "../utils/ChatContext";

export const Auth = () => {
    const {state, dispatch} = useChatContext();
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleParamChange = () => {
        let newV = !state.auth.isLoggedIn;
        dispatch(updateIsAuth(newV));
    };
    console.log("Auth state " + JSON.stringify(state));

    if(isLoading) {
        return <div>Loading...</div>
    }

    return <div>
        <div>React app is logged {state.auth.isLoggedIn ? 'true' : 'false'}</div>
        <button onClick={handleParamChange}> Change</button>
    </div>
};