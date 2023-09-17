import cognitoConfig from "../config/cognitoConfig.json";
import Amplify, { Auth } from "aws-amplify";

Amplify.configure({
    Auth: {
        userPoolId: cognitoConfig.userPool,
        userPoolWebClientId: cognitoConfig.clientId,
        region: cognitoConfig.region
    },
});

async function signUp(username, email, name, password) {
    return await Auth.signUp({
        username: username,
        email: email,
        name: name,
        password,
    });
}

// the email field could be the user's email or their username (Cognito allows both)
async function signIn(email, password) {
    return await Auth.signIn(email, password);
}

// pass in true to sign out from all devices
async function signOut(global = false) {
    return await Auth.signOut({ global });
}

async function changePassword(oldPassword, newPassword) {
    try {
        const user = await Auth.currentAuthenticatedUser();
        await Auth.changePassword(user, oldPassword, newPassword);
        return "Password was changed successfully.";
    } catch (err) {
        throw err;
    }
}

function getIdToken() {
    return new Promise((resolve, reject) => {
        Auth.currentSession()
            .then((data) => {
                const idToken = data.getIdToken();
                resolve(idToken.jwtToken);
            })
            .catch(() => {
                reject(Error("Not signed in."));
            });
    });
}

function getCurrentUser() {
    return new Promise((resolve, reject) => {
        Auth.currentSession()
            .then((data) => {
                const idToken = data.getIdToken();
                const user = idToken.payload;
                resolve(user);
            })
            .catch(() => {
                reject(Error("Not signed in."));
            });
    });
}

export {
    signUp,
    signIn,
    signOut,
    getIdToken,
    changePassword,
    getCurrentUser,
};