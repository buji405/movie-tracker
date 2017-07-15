import { connect } from 'react-redux';
import MovieCardList from '../components/MovieCardList/MovieCardList';
import { itemsFetchData, favorite, postFavorites } from '../actions';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    user: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    addFavorite: (data) => dispatch(favorite(data)),
    postFavorites: (url, user, movie) => dispatch(postFavorites(url, user, movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardList);
