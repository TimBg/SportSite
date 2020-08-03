import Head from './Head';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        Headings: state.HeadBrunch.Headings,
        Categories: state.HeadBrunch.Categories
    };
}

const HeadContainer = connect(mapStateToProps, {})(Head);

export default HeadContainer;