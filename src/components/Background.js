import React from "react";
import Fade from "react-reveal/Fade";
import {BiMouse} from "react-icons/bi";
import {Link} from "react-scroll";

import "../assets/css/Background.css";

export default function Background() {
    return (
        <div className="background ">
            <div className="background__wrapper">
                <div className="background__text">
                    <Fade right cascade>
                        <p className="background__head">THE 16th SET</p>
                    </Fade>
                    <Fade right cascade>
                        <h1 className="background__header">
                            Colleges
                        </h1>
                    </Fade>
                </div>
                <div smooth className="background__btn">
                    <Link
                        to="cards"
                        style={{cursor: "pointer"}}
                        smooth={true}
                        duration={500}
                        spy={true}>
                        <BiMouse className="background__icon"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}
