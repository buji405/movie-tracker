import { connect } from 'react-redux';
import MovieCardList from '../components/MovieCardList/MovieCardList';
import {itemsHasErrored, itemsIsLoading, itemsFetchDataSuccess, itemsFetchData} from '../actions';


const mapStateToProps = (state) => {
    return {
      items: state.items,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading
    };
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (url) => dispatch(itemsFetchData(url))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardList);
