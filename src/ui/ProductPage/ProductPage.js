import React from 'react';
import Comment from "./Comment";
import styles from './../../App.module.css';
import PropTypes from 'prop-types';
import { addCommentActionCreator } from '../../redux/productPageReducer';



const ProductPage = (props) => {
    // debugger
    let store = props.store;
    let { title, imgUrl, discription } = props.productPage.product;
    let comments = props.productPage.comments;
    let commentInput = React.createRef();
   
    let onAddCommentClick = () => { 
        let comment = commentInput.current.value;
        store.dispatch(addCommentActionCreator(comment));
        commentInput.current.value = "";
    }
    let commentsElements = comments.map((comment) => {
        return (
                <div key={comment.id}>
                     <Comment text={comment.text} />
                </div>)
    });

    
    
    // debugger
    return <div>
        <div className={styles.productCard}>
            <div>
                <img className={styles.productCard} src={imgUrl} alt=""></img>
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
                <textarea ref={commentInput}></textarea>
                <br/>
                <button type="button" onClick ={onAddCommentClick}>Add comment</button>
            </div>
            <div>
                {commentsElements}
            </div>

        </div>
    </div>
}

ProductPage.propTypes = {
    productPage: PropTypes.shape({
        product: PropTypes.shape({
            title: PropTypes.string,
            imgUrl:  PropTypes.string,
            discription: PropTypes.string,
        }),
        comments: PropTypes.array.isRequired,   
    })

};

export default ProductPage;