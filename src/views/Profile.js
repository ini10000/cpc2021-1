import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

// import ada from "../assets/images/ada.png";
import ImageModal from "../components/ImageModal";
import { showModal } from "../store/actions/imageModal";

import "../assets/css/Profile.css";
import { getAStudent } from "../services/students.service";
import { setStudent } from "../store/actions/studentAction";

export default function Profile() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { matricNo } = useParams();
    const student = useSelector((state) => state.student);
    const handleClick = () => {
        dispatch(showModal());
    };

    useEffect(() => {
        dispatch(setStudent({}));
        const start = async () => {
            const data = await getAStudent(matricNo);
            if (data.success) {
                dispatch(setStudent(data.data[0]));
            }
        };
        start();
    }, [dispatch, matricNo]);

    return (
        <div className="profile">
            <div className="profile__wrapper">
                <div className="profile__image">
                    <img
                        onClick={() => handleClick()}
                        src={student?.ProfilePic}
                        alt="Profile__Image"
                    />
                </div>
                <div className="profile__content">
                    <div
                        className="profile__backbutton"
                        onClick={() => history.goBack()}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                    </div>

                    <div className="profile__contentSection1">
                        <div className="profile__name">
                            <h1 className="profile__firstName">
                                {student?.LastName}
                            </h1>
                            <h1 className="profile__lastName">
                                {student?.FirstName}
                            </h1>
                        </div>
                        <button className="profile__btn">Sign Yearbook</button>
                    </div>
                    <div className="profile__contentSection2">
                        <div className="profile__contentSection2Left">
                            <h2 className="profile__contentSection2Header">
                                PROGRAM
                            </h2>
                            <h1 className="profile__contentSection2Body">
                                {student?.program?.NameOfProgram}
                            </h1>
                        </div>
                        <div className="profile__contentSection2Right">
                            <h2 className="profile__contentSection2Header">
                                DATE OF BIRTH
                            </h2>
                            <h1 className="profile__contentSection2Body">
                                18th January, 2000
                            </h1>
                        </div>
                    </div>
                    <div className="profile__contentSection3">
                        <p>
                            I don’t know what other bit of information we want
                            to add here but I was thinking if we aren’t using
                            this space for much, we could add that view of the
                            signature you did in your first design here
                        </p>
                    </div>
                    <div className="profile__contentSection4">
                        <div className="profile__contentSection4Text"></div>
                        <div className="profile__contentSection4Links"></div>
                    </div>
                </div>
            </div>
            <ImageModal />
        </div>
    );
}
