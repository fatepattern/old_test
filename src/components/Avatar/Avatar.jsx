import React from "react";
import s from "../Avatar/Avatar.module.css";
import profilePicture from "../../assets/images/1.jpg";

const Avatar = () => {
    return (
        <div>
            <img className={s.profilePic} src={profilePicture}/>
        </div>
    )
}

export default Avatar;