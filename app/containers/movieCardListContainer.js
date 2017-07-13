import { connect } from 'react-redux';
import MovieCardList from '../components/MovieCardList/MovieCardList';
import {itemsHasErrored, itemsIsLoading, itemsFetchDataSuccess, itemsFetchData, usersFetchData} from '../actions';


const mapStateToProps = (state) => {
    return {
      items: state.items,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading
    };
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (url) => dispatch(itemsFetchData(url)),
      fetchUserData: (url) => dispatch(usersFetchData(url))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardList);
