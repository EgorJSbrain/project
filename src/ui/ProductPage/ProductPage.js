import React from 'react';
import Comment from "./Comment";
import styles from './../../App.module.css';
import PropTypes from 'prop-types';


const ProductPage = (props) => {
   
    let addCommentOnPage = props.addCommentOnPage;
    let comments = props.productPage.comments;
    let commentInput = React.createRef();
    let commentsElements = comments.map((comment) => {
        return (
                <div key={comments.id}>
                     <Comment text={comments.text} />
                </div>)
    });
    let { title, imgUrl, discription } = props.productPage.product;
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
                <br></br>
                <button type="button" onClick ={ () => { 
                    addCommentOnPage(commentInput.current.value) 
                    commentInput.current.value = "";
                }}>Add comment</button>
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