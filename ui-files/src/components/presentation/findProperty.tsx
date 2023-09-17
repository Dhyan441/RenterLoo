import ThemeProvider from "../theme-provider";
import Navbar from "../defaultNavbar"
import Property from './property';
 
import { Typography, Input, Button } from "@material-tailwind/react";

import React from 'react';

interface ApiResponse {
    // Define the structure of the expected API response
    // For example, if you expect an object with a 'data' property:
    data: any;
    // Add other properties as needed
  }
  
  async function getData(): Promise<ApiResponse> {
    const apiUrl = "https://bo7sn6d709.execute-api.us-east-2.amazonaws.com/default/renterloo-getpostdata-lambda";
    const response = await fetch(apiUrl, {
      method: 'GET',
    });
  
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
  
    const responseData = await response.json();
    console.log(responseData);
  
    // You can work with responseData here, which contains the API's response data
  
    return responseData;
  }
  

export function FindProperty() {

    const data2 = getData(); 
    console.log(data2);
    const urls = [data2];
    const titles = ['420 urmomstreet Ln']
    const descriptions = ["Bro Please Work"];
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
