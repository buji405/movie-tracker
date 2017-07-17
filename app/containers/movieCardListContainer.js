import { connect } from 'react-redux';
import MovieCardList from '../components/MovieCardList/MovieCardList';
import { itemsFetchData, favorite, postFavorites, deleteFavoriteServer, deleteFavorite } from '../actions';

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
    postFavorites: (url, user, movie, array) => dispatch(postFavorites(url, user, movie, array)),
    deleteFavoriteServer: (user, movie) => dispatch(deleteFavoriteServer(user, movie)),
    deleteFavorite: (favorite) => dispatch(deleteFavorite(favorite))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardList);
