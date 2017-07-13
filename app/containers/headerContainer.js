import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import { userLogin, usersFetchData } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (url, email, password) => dispatch(usersFetchData(url, email, password)),
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
