import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { userLogin, usersFetchData } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (url, email, password) => dispatch(usersFetchData(url, email, password)),
    loginUser: (email, password) => dispatch(userLogin(email, password))
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
