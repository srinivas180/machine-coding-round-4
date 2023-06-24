import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ForumProvider } from "./contexts/ForumContext";

ReactDOM.render(
    <Router>
        <ForumProvider>
            <App />
        </ForumProvider>
    </Router>,
    document.getElementById("root")
);
