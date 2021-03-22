import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/App";
import {ChatProvider} from "./utils/ChatContext";
import "./styles/App.css";
import "./styles/LoginForm.scss"



ReactDOM.render(
    <ChatProvider>
        <App/>
    </ChatProvider>,
    document.getElementById("root"));