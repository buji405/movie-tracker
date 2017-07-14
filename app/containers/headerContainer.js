import { connect } from 'react-redux';
import { Header } from '../components/Header/Header';
import { deleteUser } from '../actions';

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: () => dispatch(deleteUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
