import { connect } from 'react-redux';
import MovieCardList from '../components/MovieCardList/MovieCardList';
import { itemsFetchData, favorite } from '../actions';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    addFavorite: (data) => dispatch(favorite(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardList);
