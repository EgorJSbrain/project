import { connect } from 'react-redux';
import CatalogPage from "../ui/CatalogPage/CatalogPage";
import { addTitleActionCreater, 
         addUrlImgActionCreater, 
         addShortDescriptionActionCreater, 
         addProductActionCreater } from "../redux/catalogPageReducer";


let mapStateToProps = (state) => {
    return {
        catalogPage: state.catalogPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addTitleToNewProduct: (title) => {
            dispatch(addTitleActionCreater(title))
        },
        addImgUrlToNewProduct: (url) => {
            dispatch(addUrlImgActionCreater(url));
        },
        addShortDescriptionToNewProduct: (description) => {
            dispatch(addShortDescriptionActionCreater(description));
        },
        addProductOnPage: () => {
            dispatch(addProductActionCreater());
        }
    }
}

let CatalogPageConteiner = connect(mapStateToProps, mapDispatchToProps)(CatalogPage);

export default CatalogPageConteiner;