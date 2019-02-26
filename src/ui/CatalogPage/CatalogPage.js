import React from 'react';
import styles from './Catalog.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const CatalogPage = ({addTitleToNewProduct, addImgUrlToNewProduct, addShortDescriptionToNewProduct, addProductOnPage, ...props}) => {
    // debugger
    // let { products} = {catalogPage};
    // let titleInput = React.createRef();
    // let descriptionInput = React.createRef();
    // let imgUrlInput = React.createRef();
   
    let onAddTitleToNewProduct = (e) => {
        // let title = titleInput.current.value;
            addTitleToNewProduct(e.target.value);
    }

    let onAddUrlImgToNewProduct = (e) => {
            addImgUrlToNewProduct(e.target.value);
    }

    let onAddDescriptionNewProduct = (e) => {
        addShortDescriptionToNewProduct(e.target.value);
    }

    let onAddProductOnPage = (e) => { 
            addProductOnPage();
            e.target.value = "";
            
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
                        <label>Title: <input 
                        value={props.catalogPage.newProduct.title} onChange={(e) => onAddTitleToNewProduct(e)} type="text" /></label>
                    </div><br/>

                    <div>
                        Url: <input 
                        value={props.catalogPage.newProduct.img} onChange={(e) => onAddUrlImgToNewProduct(e)} type="text" />
                    </div><br/>

                <p>Discription: </p>
                    <div>
                        <input 
                        value={props.catalogPage.newProduct.shortDescription} onChange={(e) => onAddDescriptionNewProduct(e)} type="text"/>
                    </div><br/>

                     <div>
                         <button onClick={(e) => onAddProductOnPage(e)}>
                            Добавить
                        </button>
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