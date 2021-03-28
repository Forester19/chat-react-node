import React from "react";
import {useChatContext} from "../utils/ChatContext";
import {useEffect, useState} from "react";

export const Error = () => {
    const {state, dispatch} = useChatContext();
    const [errorVisible, setErrorVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {setErrorVisible(false)}, 10000);
    }, []);

    if(state.auth.error === "" || !errorVisible) {
        return <></>;
    }

    return <div className={"error slideRight"}>{state.auth.error}</div>
};