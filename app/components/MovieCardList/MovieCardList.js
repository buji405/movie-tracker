import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { itemsFetchData } from '../../actions';
import { key } from '../../key.js';

class MovieCardList extends Component {
  constructor() {
    super()
    this.state = {
      refresh: true
    }
  }

  componentDidMount() {
    if (this.props.items.length === 0) {
      this.props.fetchData(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`)
    }
  }

  componentWillReceiveProps(np) {
    if (JSON.stringify(this.props.user) !== JSON.stringify(np.user))
    this.setState({refresh: !this.state.refresh})
  }

  render() {
    let displayData;
    let cards;


    if (this.props.user !== {} && this.props.location.pathname == '/favorites') {
      displayData = this.props.user.data.favorites ||  []
    } else {
      displayData = this.props.items
    }

    if (this.props.hasErrored) {
      return <p>Please refresh Problem loading page</p>
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>
    }

    if (displayData) {
      cards = displayData.map((result, index) => {
        return (
          <MovieCard data={result}
                     key={index}
                     userData={this.props.user}
                     addFavorite={this.props.addFavorite}
                     postFavorites={this.props.postFavorites}
                     userId={this.props.user}
                     deleteFavoriteServer={this.props.deleteFavoriteServer}
                     deleteFavorite={this.props.deleteFavorite}
                     pathName={this.props.location.pathname}/>
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
