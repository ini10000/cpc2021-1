import React from "react";

import Background from "../components/Background";
import Cards from "../components/Cards";
import Header from "../components/Header";

import "../assets/css/Colleges.css";


export default function Colleges() {
    return (
        <div className="colleges">
            <Header/>
            <Background/>
            <Cards/>

        </div>
    );
}
