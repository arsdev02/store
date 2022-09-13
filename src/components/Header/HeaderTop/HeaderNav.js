import React from 'react';
import HeaderInfo from "./HeaderInfo";
import HeaderProductNav from "./HeaderProductNav";
import HeaderTop from "./HeaderTop";

const HeaderNav = () => {
    return (
        <div className={'header__nav'}>
            <HeaderTop/>
            <HeaderInfo/>
            <HeaderProductNav/>
        </div>
    );
};

export default HeaderNav;