import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';
import ProductPage from "./ui/ProductPage/ProductPage";
import HomePage from "./ui/HomePage/HomePage";
import CatalogPage from "./ui/CatalogPage/CatalogPage";
import { Route, NavLink } from 'react-router-dom';


const App = ( props ) => {
    let addCommentOnPage = props.addCommentOnPage;
    // console.log({props})
    let {homePage, catalogPage, productPage} = props.state.state;
    // debugger;
        return (
            <div className={styles.App}>
                <div>
                    <NavLink exact to='/' activeClassName={styles.active}><div>Home</div></NavLink>
                    <NavLink to='/catalog' activeClassName={styles.active}><div>Catalog</div></NavLink>
                </div>
                    <Route exact path='/' render={ () => <HomePage homePage={homePage} />}/>
                    <Route path='/catalog' render={ () => <CatalogPage catalogPage={catalogPage} />}/>
                    <Route path='/product' render={ () => <ProductPage productPage={productPage} addCommentOnPage={addCommentOnPage}/>}/>       
                </div>
        );
    
}

export default App;
