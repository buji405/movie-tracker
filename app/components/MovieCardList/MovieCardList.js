import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions/index';
import { key } from '../../key.js'

class MovieCardList extends Component {

  componentDidMount() {
    this.props.fetchData(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`)
    this.props.fetchUserData('/api/users/')
  }

  render() {
    let cards;

    if (this.props.hasErrored) {
      return <p>Sorry Asshole</p>
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>
    }

    if (this.props.items.results) {
      cards = this.props.items.results.map((result, index) => {
        return (
          <MovieCard poster={result.poster_path}
                     key={index}/>
        )
      })
    }
    return (
      <section className="movies-container">
        {cards}
      </section>
    )
  }
}

export default MovieCardList
