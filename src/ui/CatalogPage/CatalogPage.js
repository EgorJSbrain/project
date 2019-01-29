import React from 'react';
import styles from './Catalog.module.css';
import { NavLink } from 'react-router-dom';

const CatalogPage = (props) => {
    // debugger
let productsMaped = props.catalogPage.products.map((product) => {
    return (
        <div key={product.id}>
            <div>
                <NavLink to="/product"><img src={product.img} alt="" /></NavLink>
            </div>

            <div>
                <b>{product.title}</b>
            </div>

            <div>
                {product.shortDescription}
            </div>
        </div>
    )
})

    return (
    <div>
        <div className={''}>

            <h1>Каталог</h1>
                <div className={styles.products}>
                    {productsMaped}
                </div>
            </div>
            </div>
        )


}

export default CatalogPage;