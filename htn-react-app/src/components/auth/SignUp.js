import React, { useState } from "react";
import { signUp } from "../../utils/cognitoAuth";

export default function SignUp() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerName, setRegisterName] = useState("");

    function handleRegister(e) {
        e.preventDefault();
        signUp(registerUsername, registerEmail, registerName, registerPassword).catch((err) =>
            console.log(err)
        );
    }
    return (
        <>
            <h3>Register</h3>
            {/* <form onSubmit={handleRegister}> */}
                <input
                    placeholder="Name"
                    onChange={(e) => setRegisterName(e.target.value)}
                    value={registerName}
                />
                <input
                    placeholder="email"
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    value={registerEmail}
                />
                <input
                    placeholder="Username"
                    onChange={(e) => setRegisterUsername(e.target.value)}
                    value={registerUsername}
                />
                <input
                    type="password"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    value={registerPassword}
                    placeholder="password"
                />
                <button onClick={handleRegister}>Register</button>
            {/* </form> */}
        </>
    );
}