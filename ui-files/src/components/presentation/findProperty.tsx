import ThemeProvider from "../theme-provider";
import Navbar from "../defaultNavbar"
import Property from './property';
 
import { Typography, Input, Button } from "@material-tailwind/react";

import React from 'react';

export function FindProperty() {
    const urls = ['urmom.com']
    const titles = ['420 urmomstreet Ln']
    const descriptions = ['Big red house']
    const imageUrls = ['banananannanan']


    return (
        <ThemeProvider>
            {titles.map((title,i) => {
                return <Property url={urls[i]} title={title} description={descriptions[i]} imageUrl={imageUrls[i]}/>
            })}
        </ThemeProvider>
    );
}

export default FindProperty;
