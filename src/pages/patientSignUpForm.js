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
  asthmaExplain: '',
  asthma: Boolean,
  diabetesExplain: '',
  diabetes: Boolean,
  hypertensionExplain: '',
  hypertension: Boolean,
  heartdiseaseExplain: '',
  heartdisease: Boolean,
  strokeExplain: '',
  stroke: Boolean,
  copdExplain: '',
  copd: Boolean,
  earsinusExplain: '',
  earsinus: Boolean,
  muscularSkeletalExplain: '',
  muscularSkeletal: Boolean,
  menstrualExplain: '',
  menstrual: Boolean,
  psychiatricExplain: '',
  psychiatric: Boolean,
  learningExplain: '',
  learning: Boolean,
  bleedingExplain: '',
  bleeding: Boolean,
  faintingExplain: '',
  fainting: Boolean,
  thyroidExplain: '',
  thyroid: Boolean,
  kidneyDiseaseExplain: '',
  kidneyDisease: Boolean,
  sickleCellExplain: '',
  sickleCell: Boolean,
  seizuresExplain: '',
  seizures: Boolean,
  sleepDisordersExplain: '',
  sleepDisorders: Boolean,
  giProblemsExplain: '',
  giProblems: Boolean,
  surgeryExplain: '',
  surgery: Boolean,
  seriousInjuryExplain: '',
  seriousInjury: Boolean,
  otherExplain: '',
  other: Boolean,
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
            <input className='DOB-input'
              type='String'
              name='birthdate'
              placeholder='mm/dd/yyyy'
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
            <input id='zip-input'
              type='text'
              name='zip'
              placeholder='Zip'
              defaultValue={this.state.zip}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <br/>
          <input
            type='radio'
            name='asthma'
            defaultValue={this.state.asthma}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;
          <input
            type='radio'
            name='asthma'
            defaultValue={!this.state.asthma}
            onChange={this.handleInputChange.bind(this)}
          />
          No
          &nbsp; &nbsp;
          Asthma
          &nbsp; &nbsp;
          <input
            type='text'
            name='asthmaExplain'
            placeholder='Explain'
            defaultValue={this.state.asthmaExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />
          <input
            type='radio'
            name='diabetes'
            defaultValue={this.state.diabetes}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;
          <input
            type='radio'
            name='diabetes'
            defaultValue={!this.state.diabetes}
            onChange={this.handleInputChange.bind(this)}
          />
          No
          &nbsp; &nbsp;
          Diabetes
          &nbsp; &nbsp;
          <input
            type='text'
            name='diabetesExplain'
            placeholder='Explain'
            defaultValue={this.state.asthmaExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br/> <br/>
          <input
            type='radio'
            name='hypertension'
            defaultValue={this.state.hypertension}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;
          <input
            type='radio'
            name='hypertension'
            defaultValue={!this.state.hypertension}
            onChange={this.handleInputChange.bind(this)}
          />
          No
          &nbsp; &nbsp;
          Hypertension
          &nbsp; &nbsp;
          <input
            type='text'
            name='hypertensionExplain'
            placeholder='Explain'
            defaultValue={this.state.hypertensionExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />
          <input
            type='radio'
            name='heartdisease'
            defaultValue={this.state.heartdisease}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;
          <input
            type='radio'
            name='heartdisease'
            defaultValue={!this.state.heartdisease}
            onChange={this.handleInputChange.bind(this)}
          />
          No
          &nbsp; &nbsp;
          Heart Disease
          &nbsp; &nbsp;
          <input
            type='text'
            name='heartdiseaseExplain'
            placeholder='Explain'
            defaultValue={this.state.heartdiseaseExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />

          <input
            type='radio'
            name='stroke'
            defaultValue={this.state.stroke}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;

          <input
            type='radio'
            name='stroke'
            defaultValue={!this.state.stroke}
            onChange={this.handleInputChange.bind(this)}
          />
          No

          &nbsp; &nbsp;

          Stroke

          &nbsp; &nbsp;

          <input
            type='text'
            name='strokeExplain'
            placeholder='Explain'
            defaultValue={this.state.strokeExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />

          <input
            type='radio'
            name='copd'
            defaultValue={this.state.copd}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;

          <input
            type='radio'
            name='copd'
            defaultValue={!this.state.copd}
            onChange={this.handleInputChange.bind(this)}
          />
          No

          &nbsp; &nbsp;

          COPD

          &nbsp; &nbsp;

          <input
            type='text'
            name='copdExplain'
            placeholder='Explain'
            defaultValue={this.state.copdExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />

          <input
            type='radio'
            name='earsinus'
            defaultValue={this.state.earsinus}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;

          <input
            type='radio'
            name='earsinus'
            defaultValue={!this.state.earsinus}
            onChange={this.handleInputChange.bind(this)}
          />
          No
          &nbsp; &nbsp;
          Ear / Sinus
          &nbsp; &nbsp;
          <input
            type='text'
            name='earsinusExplain'
            placeholder='Explain'
            defaultValue={this.state.earsinusExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />
          <input
            type='radio'
            name='muscularSkeletal'
            defaultValue={this.state.muscularSkeletal}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;
          <input
            type='radio'
            name='muscularSkeletal'
            defaultValue={!this.state.muscularSkeletal}
            onChange={this.handleInputChange.bind(this)}
          />
          No
          &nbsp; &nbsp;
          Muscular / Skeletal
          <input id='small-explain-input'
            type='text'
            name='muscularSkeletalExplain'
            placeholder='Explain'
            defaultValue={this.state.muscularSkeletalExplain}
            onChange={this.handleInputChange.bind(this)}
          />
        <br/> <br/>
          <input
            type='radio'
            name='menstrual'
            defaultValue={this.state.menstrual}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;

          <input
            type='radio'
            name='menstrual'
            defaultValue={!this.state.menstrual}
            onChange={this.handleInputChange.bind(this)}
          />
          No

          &nbsp; &nbsp;

          Menstrual

          &nbsp; &nbsp;

          <input
            type='text'
            name='menstrualExplain'
            placeholder='Explain'
            defaultValue={this.state.menstrualExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />

          <input
            type='radio'
            name='psychiatric'
            defaultValue={this.state.psychiatric}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;

          <input
            type='radio'
            name='psychiatric'
            defaultValue={!this.state.psychiatric}
            onChange={this.handleInputChange.bind(this)}
          />
          No

          &nbsp; &nbsp;

          Psychiatric

          &nbsp; &nbsp;

          <input
            type='text'
            name='psychiatricExplain'
            placeholder='Explain'
            defaultValue={this.state.psychiatricExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />

          <input
            type='radio'
            name='learning'
            defaultValue={this.state.learning}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;

          <input
            type='radio'
            name='learning'
            defaultValue={!this.state.learning}
            onChange={this.handleInputChange.bind(this)}
          />
          No

          &nbsp; &nbsp;

          Learning

          &nbsp; &nbsp;

          <input
            type='text'
            name='learningExplain'
            placeholder='Explain'
            defaultValue={this.state.learningExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />

          <input
            type='radio'
            name='bleeding'
            defaultValue={this.state.bleeding}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;

          <input
            type='radio'
            name='bleeding'
            defaultValue={!this.state.bleeding}
            onChange={this.handleInputChange.bind(this)}
          />
          No

          &nbsp; &nbsp;

          Bleeding

          &nbsp; &nbsp;

          <input
            type='text'
            name='bleedingExplain'
            placeholder='Explain'
            defaultValue={this.state.bleedingExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />

          <input
            type='radio'
            name='fainting'
            defaultValue={this.state.fainting}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;

          <input
            type='radio'
            name='fainting'
            defaultValue={!this.state.fainting}
            onChange={this.handleInputChange.bind(this)}
          />
          No

          &nbsp; &nbsp;

          Fainting

          &nbsp; &nbsp;

          <input
            type='text'
            name='faintingExplain'
            placeholder='Explain'
            defaultValue={this.state.faintingExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />
          <input
            type='radio'
            name='thyroid'
            defaultValue={this.state.thyroid}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;
          <input
            type='radio'
            name='thyroid'
            defaultValue={!this.state.thyroid}
            onChange={this.handleInputChange.bind(this)}
          />
          No
          &nbsp; &nbsp;
          Thyroid Condition
          &nbsp; &nbsp;
          <input id='small-explain-input'
            type='text'
            name='thyroidExplain'
            placeholder='Explain'
            defaultValue={this.state.thyroidExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />
          <input
            type='radio'
            name='kidneyDisease'
            defaultValue={this.state.kidneyDisease}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;
          <input
            type='radio'
            name='kidneyDisease'
            defaultValue={!this.state.kidneyDisease}
            onChange={this.handleInputChange.bind(this)}
          />
          No
          &nbsp; &nbsp;
          Kidney Disease
          &nbsp; &nbsp;
          <input id='small-explain-input'
            type='text'
            name='kidneyDiseaseExplain'
            placeholder='Explain'
            defaultValue={this.state.kidneyDiseaseExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />
          <input
            type='radio'
            name='sickleCell'
            defaultValue={this.state.sickleCell}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;

          <input
            type='radio'
            name='sickleCell'
            defaultValue={!this.state.sickleCell}
            onChange={this.handleInputChange.bind(this)}
          />
          No

          &nbsp; &nbsp;

          Sickle Cell

          &nbsp; &nbsp;

          <input
            type='text'
            name='sickleCellExplain'
            placeholder='Explain'
            defaultValue={this.state.sickleCellExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />

          <input
            type='radio'
            name='seizures'
            defaultValue={this.state.seizures}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;

          <input
            type='radio'
            name='seizures'
            defaultValue={!this.state.seizures}
            onChange={this.handleInputChange.bind(this)}
          />
          No
          &nbsp; &nbsp;
          Seizures
          &nbsp; &nbsp;
          <input
            type='text'
            name='seizuresExplain'
            placeholder='Explain'
            defaultValue={this.state.seizuresExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />
          <input
            type='radio'
            name='sleepDisorders'
            defaultValue={this.state.sleepDisorders}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;
          <input
            type='radio'
            name='sleepDisorders'
            defaultValue={!this.state.sleepDisorders}
            onChange={this.handleInputChange.bind(this)}
          />
          No
          &nbsp; &nbsp;
          Sleep Disorders
          &nbsp; &nbsp;
          <input id='small-explain-input'
            type='text'
            name='sleepDisordersExplain'
            placeholder='Explain'
            defaultValue={this.state.sleepDisordersExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />
          <input
            type='radio'
            name='giProblems'
            defaultValue={this.state.giProblems}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;
          <input
            type='radio'
            name='giProblems'
            defaultValue={!this.state.giProblems}
            onChange={this.handleInputChange.bind(this)}
          />
          No
          &nbsp; &nbsp;
          GI Problems
          &nbsp; &nbsp;
          <input
            type='text'
            name='giProblemsExplain'
            placeholder='Explain'
            defaultValue={this.state.giProblemsExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />
          <input
            type='radio'
            name='surgery'
            defaultValue={this.state.surgery}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;
          <input
            type='radio'
            name='surgery'
            defaultValue={!this.state.surgery}
            onChange={this.handleInputChange.bind(this)}
          />
          No
          &nbsp; &nbsp;
          Surgeries
          &nbsp; &nbsp;
          <input
            type='text'
            name='surgeryExplain'
            placeholder='Explain'
            defaultValue={this.state.surgeryExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />
          <input
            type='radio'
            name='seriousInjury'
            defaultValue={this.state.seriousInjury}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;
          <input
            type='radio'
            name='seriousInjury'
            defaultValue={!this.state.seriousInjury}
            onChange={this.handleInputChange.bind(this)}
          />
          No
          &nbsp; &nbsp;
          Serious Injuries
          &nbsp; &nbsp;
          <input id='small-explain-input'
            type='text'
            name='seriousInjuryExplain'
            placeholder='Explain'
            defaultValue={this.state.seriousInjuryExplain}
            onChange={this.handleInputChange.bind(this)}
          />
          <br /> <br />
          <input
            type='radio'
            name='other'
            defaultValue={this.state.other}
            onChange={this.handleInputChange.bind(this)}
          />
          Yes
          &nbsp; &nbsp;

          <input
            type='radio'
            name='other'
            defaultValue={!this.state.other}
            onChange={this.handleInputChange.bind(this)}
          />
          No

          &nbsp; &nbsp;

          Other

          &nbsp; &nbsp;

          <input
            type='text'
            name='otherExplain'
            placeholder='Explain'
            defaultValue={this.state.otherExplain}
            onChange={this.handleInputChange.bind(this)}
          />
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
