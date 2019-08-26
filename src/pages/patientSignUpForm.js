import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../services/store';
import Header from '../components/Header';
import {
  createUser,
  loadUsers,
} from '../actions';
import PropTypes from 'prop-types';
import Link from 'next/link';

const FORM_VALUES = {
  userName: '',
  passWord: '',
  albumName: '',
  bandName: '',
  inventory: '',
  address: '',
  State: '',
  zip: '',

};

class patientContact extends Component {
  constructor(props) {
    super(props);
    this.state = FORM_VALUES;

  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(
      this.state
    );

    this.setState(FORM_VALUES);
  }

  render() {
    return (
      <div>

        <Header />
        <h4>
          Create a profile
        </h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='form-div'>
            <input
              type='text'
              name='userName'
              placeholder='Add username'
              defaultValue={this.state.userName}
              onChange={this.handleInputChange.bind(this)}
            />
            &nbsp; &nbsp;
            <input
              type='text'
              name='passWord'
              placeholder='Add password'
              defaultValue={this.state.passWord}
              onChange={this.handleInputChange.bind(this)}
            />
            <br />
            <input
              type='text'
              name='bandName'
              placeholder='Add First name'
              defaultValue={this.state.albumName}
              onChange={this.handleInputChange.bind(this)}
            />
            &nbsp; &nbsp;
            <input
              type='text'
              name='albumName'
              placeholder='Add Last name'
              defaultValue={this.state.albumName}
              onChange={this.handleInputChange.bind(this)}
             />
            <br />
            <input className='DOB-input'
              type='String'
              name='releaseDate'
              placeholder='mm/dd/yyyy'
              defaultValue={this.state.releasedate}
              onChange={this.handleInputChange.bind(this)}
            />
            &nbsp; &nbsp;
            <input
              type='text'
              name='inventory'
              placeholder='inventory'
              defaultValue={this.state.inventory}
              onChange={this.handleInputChange.bind(this)}
            />
            <br />
            
          <br/>
          <br/>
          <input className='button-one' type="submit" value="Submit" />
          <Link href={'/listOfPatients'}>
            <button>
              View Doctors
            </button>
          </Link>
        </form>


        <style jsx>{`
          h4 {
            font-family: arial;
            font-weight: lighter;
            text-align: center;
            color: #f4511e;
          }
          form {
            padding: 1%;
            margin-left: 25%;
            background-color: #ccc;
            width: 50%;
            border-radius: 4px;
          }
          .form-div {
            margin-left: 6.5%;
          }
          input[type=text], select {
            width: 45%;
            padding: 1% 5%;
            margin: 0% auto 2% auto;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            text-align: center;
            font-size: 9px;
          }
          #zip-input {
            margin-left: 24%;
          }
          #small-explain-input {
            width: 30%;
            padding 1% 2%;
            margin-left: 2%;
          }
          .DOB-input {
            width: 45%;
            padding: 1% 5%;
            margin: 0% auto 2% auto;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            text-align: center;
            font-size: 9px;
          }
          button, .button-one {
            display: inline-block;
            border-radius: 4px;
            background-color: #f4511e;
            border: none;
            color: #FFFFFF;
            text-align: center;
            font-size: 10px;
            padding: 1%;
            width: 21%;
            transition: all 0.5s;f
            cursor: pointer;
            margin: 0% 1% auto 18%;
          }
          button:hover, .button-one:hover {
            background-color: #33FFFF;
            color: #f4511e;
          }
          .button-two {
            margin-left: 0%;
          }
        `}</style>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: values => {
      dispatch(createUser(values));
    },
    onMount: () => {
      dispatch(loadUsers());
    }
  };
}

patientContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loadUsers: PropTypes.func,
  onMount: PropTypes.func.isRequired,
};

// null will be mapstatetoprops and mapdispatchtoprops
export default withRedux(initStore, null, mapDispatchToProps)(patientContact);
