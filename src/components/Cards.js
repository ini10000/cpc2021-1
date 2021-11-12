import React, {useState, useLayoutEffect} from "react";
import Zoom from "react-reveal/Zoom";
import {Link} from "react-router-dom";
import {Img} from 'react-image';
// import {Link as ScrollLink} from 'react-scroll';

import {getColleges, getDepartmentsForACollege, getProgrammesForADepartment} from '../services/colleges.service';

import "../assets/css/Cards.css";
import loadingGif from "../assets/images/loading.gif";

export default function Cards() {
    const [cardList, setCardList] = useState([]);
    // const [selected, setSelected] = useState("");
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    const [level, setLevel] = useState("");

    function getCollegeList() {
        let myData = []
        getColleges()
        .then(res => {
            res.data.forEach(e => {
                myData.push(e)
            })
            setCardList(myData)
            setLevel("college")
        })
        .then(() => {
            setDataIsLoaded(true)
        })
    };
    function getDepartmentList(collegeCode) {
        let myData = []
        getDepartmentsForACollege(collegeCode)
        .then(res => { 
            res.data.department.forEach(e => {
                myData.push(e)
            })
            setCardList(myData)
            setLevel("department")
        })
        .then(() => {
            setDataIsLoaded(true)
        })
    };
    function getProgrammeList(departmentCode) { 
        let myData = []
        getProgrammesForADepartment(departmentCode)
        .then(res => { 
            res.data.forEach(e => {
                myData.push(e)
            })
            // setSelected(departmentCode)
            setCardList(myData)
            setLevel("programme")
        })
        .then(() => {
            setDataIsLoaded(true)
        })
    };
    function handleLevel(level, code) {
        switch(level){
            case "college": getDepartmentList(code)
            break;
            case "department": getProgrammeList(code)
            break;
            default:
        }
    }
    useLayoutEffect(() => {
        getCollegeList()
    }, []);

    if(!dataIsLoaded) return(<div className="loading">Loading...</div>)


    return (
        <div id="cards" className="cards">
            <Zoom cascade>
            <div className="cards__wrapper">
                { dataIsLoaded && (level === "programme") ?
                    (cardList.map((item, index) => {
                        let k = Object.keys(item)[0];
                        let name = item[k];
                        let img = item['Image'];
                        return(
                            <Link to={`/programme/${name}`} key={index}>
                                <div className="cards__block">
                                <Img 
                                    className="cards__img"
                                    src={img}
                                    alt="level-img"
                                    loader={<img className="cards__img" src={loadingGif} alt="level-img"></img>}>
                                </Img>
                                    <div className="cards__text">
                                        <h1 className="cards__name">{name}</h1>
                                    </div>
                                </div>
                            </Link>
                        )
                    })) : null
                } 

                { dataIsLoaded && (level === "programme") ? null :
                    (cardList.map((item, index) => {
                        let k = Object.keys(item)[0];
                        let name = item[k];
                        let img = item['Image'];
                        return(
                        <div className="cards__block" key={index} onClick={() => {handleLevel(level, name)}}>
                            <Img 
                                className="cards__img"
                                src={img}
                                alt="level-img"
                                loader={<img className="cards__img" src={loadingGif} alt="level-img"></img>}>
                            </Img>
                            <div className="cards__text">
                                <h1 className="cards__name">{name}</h1>
                            </div>
                        </div>
                        )
                    }))
                }
            </div>
            </Zoom>
            <div className="back-to-top">
                <button onClick={getCollegeList}>Back to Top</button>
            </div>
        </div>
    );
}