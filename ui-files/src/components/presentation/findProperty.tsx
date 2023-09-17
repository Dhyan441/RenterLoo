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

    const data = []
    
    // {data.map((item,i) => {
    //     return <Property url={item.url} title={item.title} description={item.description} imageUrl={item.imageUrl}/>
    // })}

    return (
        <ThemeProvider>
            <h1 style={{textAlign:"center", fontSize: '2rem'}}>Find a Property</h1>
            <div style={{width: "80vw", padding: "20px", marginTop: '100px'}}>
                {titles.map((title,i) => {
                    return <Property url={urls[i]} title={title} description={descriptions[i]} imageUrl={imageUrls[i]}/>
                })}
            </div>
        </ThemeProvider>
    );
}

export default FindProperty;
