import { addCommentActionCreator } from "../redux/productPageReducer";
import { connect } from 'react-redux';
import ProductPage from "../ui/ProductPage/ProductPage";

let mapStateToProps = (state) => {
    return {
        productPage: state.productPage
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
            addComment: (comment) => {
            dispatch(addCommentActionCreator(comment));
        }
    }    
}
// debugger
let ProductPageConteiner = connect (mapStateToProps, mapDispatchToProps ) (ProductPage);

export default ProductPageConteiner;