import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {loadUsers, deleteUser} from '../actions';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../services/store';


class ListOfUsers extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    return (
      <div>
        {this.props.users.map((user, key) => {
          return (
            <div key={key} >
              <ul>
                <li> {user.albumName} </li>
                <li> {user.userName} </li>
                <li> {user.releaseDate} </li>
                <li> {user.message} </li>
              </ul>
              <a href={`/details?id=${user._id}`} >View User</a>
              <button onClick=
                {() => this.props.deleteUser(`${user._id}`)} >
                Delete User
              </button>


            </div>

          );
        })}
      </div>
    );
  }
}


ListOfUsers.propTypes = {
  users: PropTypes.array.isRequired,
  userSelect: PropTypes.func,
  deleteUser: PropTypes.func,
  loadUsers: PropTypes.func,
};




function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => {
      dispatch(loadUsers());
    },
    deleteUser: id => {
      dispatch(deleteUser(id));
    }
  };
}

function mapStateToProps(state) {
  return {
    users: state.users,
    user: state.user
  };
}



export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ListOfUsers);
