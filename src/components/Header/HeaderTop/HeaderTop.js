import React from 'react';
import {Link} from "react-router-dom";

import {navList} from "../../../navConfig";
const HeaderTop = () => {
    return (
        <div className={'container header__top'}>
            <ul>
                {navList.map((el, index)=>{
                    return (
                        <li key={index}>
                            <Link to={el.path}>
                                {el.str}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default HeaderTop;