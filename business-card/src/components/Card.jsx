import React from "react";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Appbar from "./Appbar";

export default function Card() {
    return (
        <div className="card">
            <Info />
            <About />
            <Interests />
            <Appbar />
        </div>
    );
}