import React from "react";
import {ChatProvider, useChatContext} from ".././utils/ChatContext";
import {Auth} from "./Auth";

export const App = () => {
    return <ChatProvider>
        <Auth />
    </ChatProvider>
};