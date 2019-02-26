import React from 'react';
import styles from './App.module.css';
import { Route, NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import ProductPageConteiner from './conteiners/ProductPageConteiner';
import HomePageConteiner from './conteiners/HomePageConteiner';
import CatalogPageConteiner from './conteiners/CatalogPageConteiner';




const App = ( props ) => {
   
        return (
            <BrowserRouter> 
                <div className={styles.App}>
                    <div>
                        <NavLink exact to='/' activeClassName={styles.active}><div>Home</div></NavLink>
                        <NavLink to='/catalog' activeClassName={styles.active}><div>Catalog</div></NavLink>
                    </div>
                        <Route exact path='/' render={ () => <HomePageConteiner />}/>
                        <Route path='/catalog' render={ () => <CatalogPageConteiner />}/>
                        <Route path='/product' render={ () => <ProductPageConteiner />}/>       
                    </div>
            </BrowserRouter>
        );
   
}


const mapStateToProps = (state) => {
    return {
        state: state
    }
};
// debugger


export default connect(mapStateToProps)(App);
