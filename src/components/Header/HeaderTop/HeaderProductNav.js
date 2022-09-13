import React from 'react';


import ProductNavLeft from "./ProductNav/ProductNavLeft";
import ProductNavRight from "./ProductNav/ProductNavRight";
const HeaderProductNav = () => {
    return (
        <div className={'container header__product-nav'}>
            <ProductNavLeft/>
            <ProductNavRight/>
        </div>
    );
};

export default HeaderProductNav;