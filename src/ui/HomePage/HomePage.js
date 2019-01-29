import React from 'react';
import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';

const HomePage = ( {homePage:{banner, popularProducts}} ) => {

    // debugger;

    let popularProductsMap = popularProducts.map((product) => {
        return (
            <div key={product.id}>
                    <div>
                        <NavLink to='/product'><img src={product.img}/></NavLink>    
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
        
}

export default HomePage;