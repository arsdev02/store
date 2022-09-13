import React from 'react';

import logo from '../../../images/logo.png'
import phone from '../../../images/icons/phone.png'
import basket from '../../../images/icons/basket.png'
import {Link} from "react-router-dom";
const HeaderInfo = () => {
    return (
        <div className={'container header__info'}>
            <div className={'header__info-contact'}>
                <img src={phone} alt=""/>
                <Link to={'/'}>
                    <span>+996 555 555 555</span>
                </Link>
            </div>
            <div className={'header__info-logo'}>
                <Link to={'/'}>
                    <img src={logo} alt=""/>
                </Link>
            </div>
            <div className={'header__info-basket'}>
                <Link to={'/'}>
                    <span>0 сом</span>
                    <img src={basket} alt=""/>
                </Link>
            </div>
        </div>
    );
};

export default HeaderInfo;