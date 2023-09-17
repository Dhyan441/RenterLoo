import React from "react";
import AuthHub from "./components/auth/authHub";
import GetUsers from "./components/auth/getUsers";
// import "App.css";

function App() {
    return (
        <div>
            <AuthHub />
            <GetUsers />
        </div>
    );
}

export default App;