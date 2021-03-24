import React, {useState} from "react";
import {updateIsAuth, useChatContext} from "../utils/ChatContext";
import axios from "axios";
import serverUrl from "../utils/constants";
import {updateIsLoading} from "../utils/actions/IsLoadingAction";

export const Auth = () => {
    const {state, dispatch} = useChatContext();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
       /* let newV = !state.auth.isLoggedIn;
        let newData = {
            isLoggedIn: newV,
            name: state.auth.name,
            error: state.auth.error,
        };
        dispatch(updateIsAuth(newData));*/
       console.log('name ' + name + ' pass ' + password);
       dispatch(updateIsLoading(true));
       axios.post(serverUrl + '/user',{name:name, password: password})
           .then((resp)=>{
               console.log('resp ' + JSON.stringify(resp));
               dispatch(updateIsLoading(false));
           })
           .catch((error)=>{
               console.log('error ' + JSON.stringify(error));
               dispatch(updateIsLoading(false));
           });
    };
    console.log("Auth state " + JSON.stringify(state));

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <div>
        <div>React app is logged {state.auth.isLoggedIn ? 'true' : 'false'}</div>
        <div className="form-structor">
            <div className="signup">
                <h2 className="form-title" id="signup"><span>or</span>Sign up</h2>
                <div className="form-holder">
                    <input type="text" className="input" placeholder="Name"
                           onChange={(val) => {
                               setName(val.target.value)
                           }}/>
                    <input type="password" className="input" placeholder="Password"
                           onChange={(val) => {
                               setPassword(val.target.value)
                           }}/>
                </div>
                <button className="submit-btn" onClick={handleSubmit}>Sign up</button>
            </div>
            <div className="login slide-up">
                <div className="center">
                    <h2 className="form-title" id="login"><span>or</span>Log in</h2>
                    <div className="form-holder">
                        <input type="email" className="input" placeholder="Email"/>
                        <input type="password" className="input" placeholder="Password"/>
                    </div>
                    <button className="submit-btn" onClick={handleSubmit}>Log in</button>
                </div>
            </div>
        </div>
    </div>
};