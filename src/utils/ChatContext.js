import React, {useState, createContext, useContext, useReducer} from "react";

export const ChatContext = createContext();

const initialContext = {
    auth: {
        isLoggedIn: true,
        name: "John",
        error: null,
    }
};

const IS_AUTH = "IS_AUTH";

export const updateIsAuth = (isAuthData) => {
    return {type: IS_AUTH, payload: isAuthData}
};

export const chatReducer = (state, action) => {
    switch (action.type) {
        case IS_AUTH:
            console.log("action.payload " + action.payload);
            return {...state, ...{auth:action.payload}};
    }
};

const ChatProvider = (props) => {
    const [state, dispatch] = useReducer(chatReducer, initialContext);
    console.log("state " + JSON.stringify(state));
    const stateDate = {state, dispatch};

    return <ChatContext.Provider value={stateDate}{...props}/>
};

const useChatContext = () => {
    return useContext(ChatContext);
};

export {ChatProvider, useChatContext};
