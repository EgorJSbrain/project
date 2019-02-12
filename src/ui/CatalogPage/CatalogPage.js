import React from 'react';
import styles from './Catalog.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const CatalogPage = (props) => {
     //debugger
    
    let titleInput = React.createRef();
    let descriptionInput = React.createRef();
    let imgInput = React.createRef();
   
    let addTitleToNewProduct = (e) => {
        props.dispatch({type: 'ADD_TITLE', title: e.currentTarget.value});

    }

    let addImgToNewProduct = (e) => {
        props.dispatch({type: 'ADD_IMG', img: e.currentTarget.value});
    }

    let addDescriptionNewProduct = (e) => {
        props.dispatch({type: 'ADD_DESCRIPTION', shortDescription: e.currentTarget.value});
    }

    let onAddProductOnPage = () => { 
        props.dispatch({type:'ADD_PRODUCT'});
        titleInput.current.value = '';
        imgInput.current.value = '';
        descriptionInput.current.value = '';
    }
    

    
    let productsMaped = props.catalogPage.products.map((product) => {
        return (
            <div key={product.id} className={styles.product}>
                <div >
                    <NavLink to="/product"><img src={product.img} alt="" /></NavLink>
                </div>

                <div>
                    <b>{product.title}</b><br/>
                    {product.shortDescription}
                </div>
            </div>
        )
    })

    return (
        <div>
            <div>

                <h1>Каталог</h1>
                    <div>
                        {productsMaped}
                    </div><br/>
                    
                    <div>
                        <label>Title: <input ref={titleInput} 
                            onChange={(e) => addTitleToNewProduct(e)} type="text" /></label>
                    </div><br/>

                    <div>
                        Url: <input ref={imgInput} 
                         onChange={(e) => addImgToNewProduct(e)} type="text" />
                    </div><br/>

                <p>Discription: </p>
                    <div>
                        <input ref={descriptionInput} 
                           onChange={(e) => addDescriptionNewProduct(e)} type="text"/>
                    </div><br/>

                     <div>
                         <button onClick={(e) => {
                            onAddProductOnPage();
                        }}>Добавить</button>
                    </div><br/>
            </div>
        </div>
    )


}

CatalogPage.propTypes = {
    catalogPage: PropTypes.shape({
        products: PropTypes.array.isRequired,
    })

};

export default CatalogPage;