import React from 'react';
import {navProductList} from "../../../../navConfig";
import {Link} from "react-router-dom";

const ProductNavLeft = () => {
    return (
        <div className={'product-nav__left'}>
            <ul>
                {navProductList.map((el, index) => {
                    return (
                        <li key={index}>
                            <Link to={el.path} className={'fonts-hover'}>
                                {el.str}
                            </Link>
                            {el.list
                                ? <div className={'nav__left__sub-nav'}>
                                    <ul>
                                        {el.list.map((el, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link to={el.path} className={'fonts-hover'}>
                                                        {el.str}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                : null
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default ProductNavLeft;