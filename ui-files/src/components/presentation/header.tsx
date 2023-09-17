import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import {
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

export function HeroPresentation() {
 
  return (
    <ThemeProvider>
      <Navbar/>
      <header className="h-full w-screen place-items-center bg-white relative px-8 py-8 lg:mb-36">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left pt-32">
            <Typography variant="h1" color="blue-gray" className="fancy-header mb-8 lg:mr-32 leading-tight font-black">
              Rent in Waterloo <span className="text-bright-yellow">Today!</span>
            </Typography>
             Dedicated to connecting students with rentals in Waterloo. Find a home, find it here.
          </div>
        </div>
        <div className="hidden lg:flex">
          <img src="/public/undraw_home.png" alt="components" className="absolute -top-10 right-0 w-1/2" />
        </div>
      </header>
      <div style={{ width: '100%', height: '50px', backgroundColor: '#ffffff' }}></div>
      <div style={{ width: '100%', height: '200px', backgroundColor: '#ededed' }}></div>
    </ThemeProvider>
  );
}

export default HeroPresentation;
