import { connect } from 'react-redux';
import HomePage from "../ui/HomePage/HomePage";


let mapStateToProps = (state) => {
    return {
        homePage: state.homePage
    }
}

  

let HomePageConteiner = connect (mapStateToProps) (HomePage);

export default HomePageConteiner;