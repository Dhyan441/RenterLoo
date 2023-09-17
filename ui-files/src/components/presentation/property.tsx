
import ThemeProvider from "../theme-provider";
import Navbar from "../defaultNavbar"
 
import { Typography, Input, Button } from "@material-tailwind/react";

import React from 'react';

function Property({ url, title, description, imageUrl }) {

    return (
        <a>
            <img src={imageUrl} />
            <h2>{title}</h2>
            <p>{description}</p>
        </a>
    )
}

export default Property;