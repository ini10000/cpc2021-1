import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../routes/routes";

import "../assets/css/landing.css";

const Landing = () => {
    return (
        <section className="landing_background">
            <div className="landing_container">
                <div className="landing_nav flex justify-start items-center ">
                    <img
                        src={"./logo.png"}
                        alt="Pacesetters logo"
                        style={{ width: "50px" }}
                    />
                    <p className="landing_text ml-10">
                        COVENANT UNIVERSITY - CLASS OF 2021
                    </p>
                </div>
                <div className="landing_contents">
                    <div>
                        <p className="landing_text_1">Welcome to</p>
                        <h1 className="landing_text_2">
                            Covenant University - Class of 2021 Yearbook
                        </h1>
                        <h5 className="landing_text_3">
                            The ---- Reckoning Set
                        </h5>
                        <p className="landing_text_4">
                            Please enter your email address:
                        </p>
                        <div className="landing_input_container">
                            <input
                                className="landing_input"
                                type="email"
                                placeholder="Email"
                            />
                            <Link to={ROUTES.SEARCH}>
                                <button className="landing_input landing_button">
                                    Submit
                                </button>
                            </Link>
                        </div>
                        <p className="landing_text_5">
                            We will send you a link to open the book
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
