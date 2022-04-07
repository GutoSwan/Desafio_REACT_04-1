import React from "react";
import ReactDOM from "react-dom";
import Weather from './weather.jsx'
import Page2 from "./page2.jsx";
import { BrowserRouter, Route } from "react-router-dom"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <Route path="/" exact component={Weather} />
        <Route path="/page2" exact component={Page2} />

        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root"),
    );

