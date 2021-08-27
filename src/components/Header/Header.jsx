import React from 'react';
import headerImage from "../../assets/images/626-320x200-blur_2.jpg"
import s from "./Header.module.css"

const Header = () => {

    return (
        <div className={s.headerImage} >
            <img src={headerImage}/>
        </div>
    )

}

export default Header;
