import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from'./firebase/Config';
import Context from"./context/Context";
import {FirebaseContext} from "./context/Context"

ReactDOM.render(<FirebaseContext.Provider value={{firebase}}>
    <Context><App /></Context>
    </FirebaseContext.Provider>
, document.getElementById('root'));
