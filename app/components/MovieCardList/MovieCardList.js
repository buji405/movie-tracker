import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { itemsFetchData } from '../../actions';
import { key } from '../../key.js';

class MovieCardList extends Component {

  componentDidMount() {
    if (this.props.items.length === 0) {
      this.props.fetchData(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`)
    }
  }

  render() {
    let cards;

    if (this.props.hasErrored) {
      return <p>Please refresh Problem loading page</p>
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>
    }

    if (this.props.items.results) {
      cards = this.props.items.results.map((result, index) => {
        return (
          <MovieCard poster={result.poster_path}
                     key={index}/>
          );
      });
    }

    return (
      <section className="movies-container">
        {cards}
      </section>
    );
  }
}

export default MovieCardList;
