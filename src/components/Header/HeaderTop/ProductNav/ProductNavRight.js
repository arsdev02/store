import React from 'react';

import user from '../../../../images/icons/user.png'
import search from "../../../../images/icons/search.png";
import comparison from "../../../../images/icons/comparison.png";
import {Link} from "react-router-dom";

const ProductNavRight = () => {
    return (
        <div className={'product-nav__right'}>
            <div className={'product-nav__right-search'}>
                <input className={'search-inp'} type="text"required placeholder={'поиск по сайту'}/>
                <button className={'fonts-hover'}>
                    <img src={search} alt=""/>
                </button>
            </div>
            <div className={'product-nav__right-comparison'}>
                <Link to={'/'} className={'fonts-hover'}>
                    <img src={comparison} alt=""/>
                </Link>
            </div>
            <div className={'product-nav__right-user'}>
                <Link to={'/'} className={'fonts-hover'}>
                    <img src={user} alt=""/>
                </Link>
            </div>
        </div>
    );
};

export default ProductNavRight;