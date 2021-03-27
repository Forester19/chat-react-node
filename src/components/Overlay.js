import React from "react";
import {useChatContext} from "../utils/ChatContext";

export const Overlay = () => {
    const {state, dispatch} = useChatContext();

  return state.isLoading ? <div className={"overlay"}/> : <></>
};