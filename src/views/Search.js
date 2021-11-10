import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as ROUTES from "../routes/routes";
import landingImage from "../assets/images/search.png";

import { ReactComponent as SearchButton } from "../assets/svg/search.svg";

import "../assets/css/Search.css";

const Search = () => {
  // Set the date we're counting down to
  const countDownDate = new Date("Oct 21, 2021 00:00:00").getTime();
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [clicked, setClicked] = useState(false);
  // const [name, setName] = useState();

  setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

    // if (distance < 0) {
    //   clearInterval(x);
    //   document.getElementById("demo").innerHTML = "EXPIRED";
    // }
  }, 1000);

  const counters = [
    { name: "DAYS", value: days },
    { name: "HOURS", value: hours },
    { name: "MINUTES", value: minutes },
    { name: "SECONDS", value: seconds },
  ];

  return (
    <div className="jfkvu">
      <Navbar fixed="top" collapseOnSelect expand="lg" className="navbar">
        <Container fluid>
          <Link to={ROUTES.HOME} className="navbar-brand">
            <Navbar.Brand>CPC 2021</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#home">Reels</Nav.Link>
              <Nav.Link href="/colleges">Colleges</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              {/* <NavDropdown title="Colleges" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Hall of Fame</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="search_container">
        <img alt="landing__image" src={landingImage} className="searchImage" />
        <div className="search_contents">
          <div className="justified" style={{ margin: 15 }}>
            {counters.map((item) => (
              <div className="counter_all">
                <div className="counter_container">
                  <div className="numberContainer">
                    <h1 className="counter_value">{item.value}</h1>
                  </div>
                  <div className="labelContainer">
                    <h1 className="counter_name">{item.name}</h1>
                  </div>
                </div>
                {/* {index !== 3 && <h1 className="counter_column">:</h1>} */}
              </div>
            ))}
          </div>
          {clicked ? (
            <div className="form-horizontal">
              <div className="search_group">
                <input
                  type="text"
                  className="search_bar"
                  placeholder="Search for your setmates"
                  // onChange={(e) => setName(e.target.value)}
                />
                <span className="input-group-btn">
                  <button className="search_button" type="button">
                    ENTER
                  </button>
                </span>
              </div>
            </div>
          ) : (
            <div className="searched" onClick={() => setClicked(true)}>
              <SearchButton />
            </div>
          )}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
