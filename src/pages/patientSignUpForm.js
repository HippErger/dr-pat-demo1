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
  firstName: '',
  lastName: '',
  birthDate: '',
  address: '',
  State: '',
  zip: '',
  asthma: Boolean,
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
        <h1>
          Create a profile
        </h1>
        <form onSubmit={this.handleSubmit.bind(this)}>

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
              name='firstName'
              placeholder='Add First name'
              defaultValue={this.state.firstName}
              onChange={this.handleInputChange.bind(this)}
            />
            &nbsp; &nbsp;


            <input
              type='text'
              name='lastName'
              placeholder='Add Last name'
              defaultValue={this.state.lastName}
              onChange={this.handleInputChange.bind(this)}
             />
            <br />

            <input
              type="String"
              name="birthdate"
              placeholder="mm/dd/yyyy"
              defaultValue={this.state.birthdate}
              onChange={this.handleInputChange.bind(this)}
            />
            &nbsp; &nbsp;


            <input
              type='text'
              name='address'
              placeholder='Add Address'
              defaultValue={this.state.address}
              onChange={this.handleInputChange.bind(this)}
            />
            <br />


            <input
              type='text'
              name='city'
              placeholder='City'
              defaultValue={this.state.city}
              onChange={this.handleInputChange.bind(this)}
            />
            &nbsp; &nbsp;


            <input
              type='text'
              name='homeState'
              placeholder='State'
              defaultValue={this.state.homeState}
              onChange={this.handleInputChange.bind(this)}
             />
             <br />


           <input
             type='text'
             name='zip'
             placeholder='Zip'
             defaultValue={this.state.zip}
             onChange={this.handleInputChange.bind(this)}
            />
                <br /><br />

          <input type="submit" value="Submit" />

          <Link href="/signInPage">
            <button >Already have an account</button>
          </Link>

        </form>
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
