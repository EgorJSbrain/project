import React from 'react';
import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomePage = (props) => {
let banner = props.homePage.banner;
let popularProducts = props.homePage.popularProducts;
    // debugger;
    let popularProductsMap = popularProducts.map((product) => {
        return (
            <div key={product.id}>
                <div>
                    <NavLink to='/product'><img src={product.img} alt="" /></NavLink>
                </div>
                <div>
                    {product.title}
                </div>
            </div>)

    });

    return (
        <div className={""}>
            <div>
                <img className={styles.banner} src={banner.imgUrl} alt=""></img>

                <div>
                    <h2>Популярные товары</h2>
                    <div className={styles.popularBlock}>
                        {popularProductsMap}
                    </div>
                </div>
            </div>
        </div>)

};

HomePage.propTypes = {
    homePage: PropTypes.shape({
        banner: PropTypes.shape({
            imgUrl: PropTypes.string
        }),
        popularProducts: PropTypes.array.isRequired
    })
}
export default HomePage;