import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { userLogin } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (email, password) => {
      dispatch(userLogin(email, password))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
