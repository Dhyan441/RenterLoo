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

    // const data2 = getData(); 
    // console.log(data2);
    // const urls = ["data2"];
    // const urls = ['https://maps.app.goo.gl/jA3jR3A7Ai7d1YeD8', 'https://maps.app.goo.gl/cqLPqHmVmUeMDoLf6']
    // const addresses = ['330 Phillip St, Waterloo', '250 Phillip St, Waterloo']
    // const prices = ["1000", "850"];
    // const terms = ["Winter 2024", "Winter-Spring 2024"];
    // const emails = ["alisha.lee@uwaterloo.ca", "justin.wong@uwaterloo.ca"];
    // const infos = ["gym in the building", "private bathroom, shared kitchen"];

    const imgPath = "../../../images/"
    const imageUrls = [
        imgPath+'elora.jpg', 
        imgPath+'icon.png', 
        imgPath+'westcourt-random1.jpg', 
        imgPath+'westcourt-random2.jpg',
        imgPath+'westcourt-random3.jpg',
        imgPath+'westcourt-random4.jpg'
    ]

    // test data (in raw format)
    const data = [  
        {
        info: { S: 'private bathroom, shared kitchen' },
        term: { S: 'Winter-Spring 2024' },
        address: { S: '250 Phillip St' },
        email: { S: 'julian.wong@uwaterloo.ca' },
        price: { S: '860' },
        },
        {
        info: { S: 'gym in building' },
        term: { S: 'Winter 2024' },
        address: { S: '330 Phillip St' },
        email: { S: 'alisha.lee@uwaterloo.ca' },
        price: { S: '1050' },
      }
    ];

    return (
        <ThemeProvider>
            <Navbar />
            <div>
            <h1 style={{ textAlign: "center", fontSize: '2rem', marginTop: '100px' }}>Find a Property</h1>
            <div style={{ width: "100vw", padding: "20px", marginTop: '0px', display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                {data.map((jsonObj, i) => {
                return <Property url={"mailto: " + jsonObj.email.S} address={jsonObj.address.S} price={"$" + jsonObj.price.S + "/month"} email={jsonObj.email.S} term={jsonObj.term.S} info={jsonObj.info.S} imageUrl={imageUrls[i % 5]} />
                })}
            </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7483.377541709641!2d-80.54583178268749!3d43.47618334450663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf1565ffe672b%3A0x5037b28c7231d90!2sWaterloo%2C%20ON!5e0!3m2!1sen!2sca!4v1694947941129!5m2!1sen!2sca" width="100%" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </ThemeProvider>
    );
}

export default FindProperty;
