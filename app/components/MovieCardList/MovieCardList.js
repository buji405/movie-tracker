import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import { connect } from 'react-redux';
import itemsFetchData from '../actions/items';

class MovieCardList extends Component= () => {

  componentDidMount() {
    this.props.fetchData('https://api.themoviedb.org/3/movie/upcoming?api_key=0e3c9029a31b863e50b0926e97bc9454&language=en-US&page=1')
  }

  export default const mapStateToProps = (state) => {
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
  render() {
    console.log(this.props.items);
    if (this.props.hasErrored) {
      return <p>Sorry Asshole</p>
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>
    }
    return (
      <section className="movies-container">
        <MovieCard />
      </section>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(MovieCardList);
// 
// export default MovieCardList
