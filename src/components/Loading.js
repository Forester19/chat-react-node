import React from "react";
import {useChatContext} from "../utils/ChatContext";

export const Loading = () => {
    const {state, dispatch} = useChatContext();

  if(state.isLoading){
      return <div className={"loader"}></div>
  } else {
      return <></>
  }
};