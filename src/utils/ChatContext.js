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

export const updateIsAuth = (isAuth) => {
    return {type: IS_AUTH, payload: isAuth}
};

export const chatReducer = (state, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {...state.auth, ...{auth:{isLoggedIn: action.payload}}}
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
