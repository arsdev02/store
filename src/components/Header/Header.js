import React from 'react';

import HeaderSlide from "./HeaderSlide/HeaderSlide";

import './header.css'
import HeaderNav from "./HeaderTop/HeaderNav";
const Header = () => {
    return (
        <div className={'header'}>
            <HeaderNav/>
            <HeaderSlide/>
        </div>
    );
};

export default Header;