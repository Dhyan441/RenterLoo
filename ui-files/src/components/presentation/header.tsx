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
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white relative px-8 py-8 lg:mb-36">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left pt-32">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 lg:mr-32 leading-tight font-black"
            >
              Rent in Waterloo <span className="text-blue">Today!</span>
            </Typography>
             Dedicated to connecting students with rentals in Waterloo. (Add more to this)
          </div>
        </div>
        <div className="hidden lg:flex">
          <img src="header.png" alt="components" className="absolute -top-10 right-0 w-1/2" />
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroPresentation;
