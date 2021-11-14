import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";

import { hideModal } from "../store/actions/imageModal";

import "../assets/css/ImageModal.css";

export default function ImageModal({ imageSource }) {
    const modalState = useSelector((store) => store.imageModal);
    const dispatch = useDispatch();
    const modalRef = useRef();

    const handleClick = (e) => {
        if (e.target === modalRef.current) {
            dispatch(hideModal());
        }
    };
    return (
        <div
            style={{
                display: modalState ? "block" : "none",
            }}
            className="imageModal"
        >
            <div
                ref={modalRef}
                onClick={(e) => handleClick(e)}
                className="imageModal__wrapper"
            >
                <div
                    className="imageModal__cancel"
                    style={{ cursor: "pointer" }}
                >
                    <ImCross
                        onClick={() => dispatch(hideModal())}
                        className="imageModal__icon"
                    />
                </div>
                <img
                    src={imageSource}
                    alt="graduate"
                    className="imageModal__image"
                />
            </div>
        </div>
    );
}
