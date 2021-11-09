import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { useHistory } from "react-router-dom";

function StudentCard({ firstName, lastName, profilePic, matricNo }) {
    const history = useHistory();
    const addDefaultSrc = (ev) => {
        ev.target.height = "100%";
        ev.target.src =
            "https://res.cloudinary.com/daan6nwbe/image/upload/v1634160023/WingsAwards2021/Nominees/16th_Set_Official_Logo_nbbvn9.png";
    };
    return (
        <div
            className="StudentCard__container col-span-1 text-white flex flex-col h-full justify-between "
            onClick={() => {
                console.log(matricNo);
                history.push("/student/" + matricNo);
            }}
        >
            <div className="my-auto justify-self-center rounded-3xl transform hover:-translate-y-2 transition duration-300 ease-in-out overflow-hidden relative">
                <LazyLoadImage
                    effect="blur"
                    className=" shadow-2xl "
                    src={profilePic ? profilePic : ""}
                    alt="https://res.cloudinary.com/daan6nwbe/image/upload/v1634160023/WingsAwards2021/Nominees/16th_Set_Official_Logo_nbbvn9.png"
                    style={{ maxWidth: "100%", height: "auto" }}
                    onError={addDefaultSrc}
                />
                <div
                    className=" cursor-pointer opacity-0 text-right flex justify-end  items-end absolute top-0 left-0 w-full h-full hover:opacity-100 transition duration-500 ease-out"
                    style={{
                        background:
                            "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6))",
                        fontWeight: "900",
                    }}
                >
                    <h1 className=" text-4xl sm:text-5xl pr-8 pl-96 pb-14 leading-relaxed">
                        View {firstName}'s Profile
                    </h1>
                </div>
            </div>

            <div className="justify-self-end flex flex-col items-start justify-end mt-8 align-bottom ">
                <h1
                    className="text-3xl tracking-widest"
                    style={{ fontWeight: 900, letterSpacing: "0.18em" }}
                >
                    {firstName}
                </h1>
                <h1
                    className="mt-1 text-4xl "
                    style={{ fontWeight: 400, letterSpacing: "0.18em" }}
                >
                    {lastName}
                </h1>
            </div>
        </div>
    );
}

export default StudentCard;
