import React from 'react';
import styles from './Catalog.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addTitleActionCreater, addUrlImgActionCreater, addShortDescriptionActionCreater, addProductActionCreater } from '../../redux/catalogPageReducer';


const CatalogPage = (props) => {
     debugger
    let store = props.store;
    let titleInput = React.createRef();
    let descriptionInput = React.createRef();
    let imgUrlInput = React.createRef();
   
    let addTitleToNewProduct = () => {
        let title = titleInput.current.value;
        store.dispatch(addTitleActionCreater(title));

    }

    let addUrlImgToNewProduct = () => {
        let urlImg = imgUrlInput.current.value;
        store.dispatch(addUrlImgActionCreater(urlImg));
    }

    let addDescriptionNewProduct = () => {
        let description = descriptionInput.current.value;
        store.dispatch(addShortDescriptionActionCreater(description));
    }

    let onAddProductOnPage = () => { 
        store.dispatch(addProductActionCreater());
        titleInput.current.value = '';
        imgUrlInput.current.value = '';
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
                        Url: <input ref={imgUrlInput} 
                         onChange={(e) => addUrlImgToNewProduct(e)} type="text" />
                    </div><br/>

                <p>Discription: </p>
                    <div>
                        <input ref={descriptionInput} 
                           onChange={(e) => addDescriptionNewProduct(e)} type="text"/>
                    </div><br/>

                     <div>
                         <button onClick={(e) => onAddProductOnPage()}>
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