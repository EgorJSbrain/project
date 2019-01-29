import React from 'react';
import Comment from "./Comment";
import styles from './../../App.module.css';

const ProductPage = (props) => {
    
   let comments = props.productPage.comments;
   let { title, imgUrl, discription } = props.productPage.product;
   debugger
    return <div>
        <div className={styles.productCard}>
            <div>
                <img className={styles.productCard} src={imgUrl}></img>
            </div>
            
            <div>
                <h1>{title}</h1>
                <div>
                   {discription}
                </div>
            </div>
            <div>
                <div>Обсуждений <span>10</span></div>
                <div>Отзывов <span>13</span></div>
            </div>
        </div>
        <div>
            <div>
                <h3>Отзывы:</h3>
            </div>
            <div>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    </div>
}

export default ProductPage;