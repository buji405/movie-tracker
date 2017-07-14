import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard/MovieCard';

const mapStateToProps = (state) => {
    return {
      items: state.items
    }
  }


export default connect(mapStateToProps, null)(MovieCard);
