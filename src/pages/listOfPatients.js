import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  loadUsers,
  deleteUser}
  from '../actions';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../services/store';
import Link from 'next/link';
import Header from '../components/Header';

class ListOfPatients extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }
  render() {
    return (
      <div>

      <Header />
        {this.props.users.map((user, key) => {
          return (
            <div key={key} className='user-div'>
              <ul>
                <li className='first-name'> {user.bandName} </li>
                <li> {user.albumName} </li>
                <li className='user-name'> inventory: {user.inventory} </li>
              </ul>
              <Link href={`/details?id=${user._id}`} as={`/details/user}`} prefetch>
                <button>
                View Patient
                </button>
              </Link>
              <Link href={`patientSignUpForm?id=${user._id}`}>
                <button>
                  blank for a reason
                </button>
              </Link>
              <button onClick=
                {() => this.props.deleteUser(`${user._id}`)} >
                Delete User
              </button>
            </div>
          );
        })}

        <style jsx>{`
          .user-div {
            width: 40%;
            margin: 1% auto 1% 5%;
            padding: 1% 2%;
            background-color: #5DD1CA;
            border-radius: 4px;
            height: 10%;
          }
          ul {
            list-style-type: none;
          }
          li {
            font-family: arial;
          }
          ul > .first-name {
            font-size: 11px;
          }
          ul > .user-name {
            font-size: 10px;
          }
          button {
            display: inline-block;
            border-radius: 4px;
            background-color: #f4511e;
            border: none;
            color: #FFFFFF;
            text-align: center;
            font-size: 10px;
            padding: 5px;
            width: 25%;
            transition: all 0.5s;
            cursor: pointer;
            margin: .5% 4%;
          }
          button span {
            cursor: pointer;
            display: inline-block;
            position: relative;
            transition: 0.5s;
          }
          button span:after {
            content: '\00bb';
            position: absolute;
            opacity: 0;
            top: 0;
            right: -20px;
            transition: 0.5s;
          }
          button:hover {
            color: #f4511e;
            background-color: #33FFFF;
          }
        `}</style>

      </div>
    );
  }
}

ListOfPatients.propTypes = {
  users: PropTypes.array.isRequired,
  userSelect: PropTypes.func,
  deleteUser: PropTypes.func,
  loadUsers: PropTypes.func.isRequired,
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

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ListOfPatients);
