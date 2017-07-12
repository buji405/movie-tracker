import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions/index';
import { key } from '../../key.js'

class MovieCardList extends Component {

  componentDidMount() {
    this.props.fetchData(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`)
  }

  render() {
    let cards;
    console.log(this.props.items);

    if (this.props.hasErrored) {
      return <p>Sorry Asshole</p>
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>
    }
    if (this.props.items.results) {
      console.log('hello');
      cards = this.props.items.results.map((result, index) => {
        console.log(result.title);
        return (
          <MovieCard title={result.title}
                   releaseDate={result.release_date}
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
//
// export default MovieCardList
