import React, {useState, createContext, useContext, useReducer} from "react";

export const ChatContext = createContext();

const initialContext = {
    auth: {
        isLoggedIn: false,
        name: "John",
        role: 0, // 0 - user, 1 - admin;
        error:""
    },
    isLoading: false
};

const IS_AUTH = "IS_AUTH";
const IS_LOADING = "IS_LOADING";

export const updateAuthData = (authData) => {
    return {type: IS_AUTH, payload: authData}
};

export const chatReducer = (state, action) => {
    switch (action.type) {
        case IS_AUTH:{
            console.log("action.payload " + action.payload);
            return {...state, ...{auth: action.payload}};
        }
        case IS_LOADING: {
            return {...state, ...{isLoading: action.payload}}
        }

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
