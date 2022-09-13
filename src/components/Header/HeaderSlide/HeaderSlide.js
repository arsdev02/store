import React from 'react';
import {Link} from "react-router-dom";

const HeaderSlide = () => {
    return (
        <div className={'header__slide'}>
            <div className={'container header__slide-container'}>
                <div className={'header__slide-title'}>
                    <h2>главный заголовок</h2>
                </div>
                <div className={'header__slide-sub-title'}>
                    <p>под заголовок</p>
                </div>
                <div className={'header__slide-button'}>
                    <Link to={'/'}>
                        подробнее
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderSlide;