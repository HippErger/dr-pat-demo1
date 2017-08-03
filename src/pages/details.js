import React, {Component} from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../services/store';
import { getUserId } from '../actions';






class Details extends Component {
  constructor(props) {
    super(props);
  }



  componentDidMount() {
    this.props.getUserId(this.props.url.query.id);
  }





  render() {
    const { user } = this.props;

    // const userId = this.props.url.query.id;
    return (
      <div>
          <Header />
        <h1>
          Details
        </h1>
        <ul>
          <li> {user.firstName} </li>
          <li> {user.lastName} </li>
          <li> {user.userName} </li>
          <li> {user.address} </li>
          <li> {user.username} </li>
          <li> Asthma : {JSON.stringify(user.asthma)} </li>
          <li> Asthma Explanation: {user.asthmaExplain} </li>
          <li> Diabetes : {JSON.stringify(user.diabetes)} </li>
          <li> Diabetes Explanation{user.diabetesExplain} </li>
          <li> Hypertension : {JSON.stringify(user.hypertension)} </li>
          <li> Hypertension Explanation : {user.hypertensionExplain} </li>
          <li> Heart Disease : {JSON.stringify(user.heartdisease)} </li>
          <li> Heart Disease Explanation : {user.heartdiseaseExplain} </li>
          <li> Stroke : {JSON.stringify(user.stroke)} </li>
          <li> Stroke Explanation : {user.strokeExplain} </li>
          <li> COPD : {JSON.stringify(user.copd)} </li>
          <li> COPD Explanation : {user.copdExplain} </li>
          <li> Ear/Sinus : {JSON.stringify(user.earsinus)} </li>
          <li> Ear/Sinus Explanation{user.earsinusExplain} </li>
          <li> Muscular/Skeletal : {JSON.stringify(user.muscularSkeletal)} </li>
          <li> Muscular/Skeletal Explanation : {user.muscularSkeletalExplain} </li>
          <li> Menstrual : {JSON.stringify(user.menstrual)} </li>
          <li> Menstrual Explanation : {user.menstrualExplain} </li>
          <li> Psychiatric : {JSON.stringify(user.psychiatric)} </li>
          <li> Psychiatric Explanation : {user.psychiatricExplain} </li>
          <li> Learning : {JSON.stringify(user.learning)} </li>
          <li> Learning Explanation : {user.learningExplain} </li>
          <li> Bleeding : {JSON.stringify(user.bleeding)} </li>
          <li> Bleeding Explanation : {user.bleedingExplain} </li>
          <li> Fainting : {JSON.stringify(user.fainting)} </li>
          <li> Fainting Explanation{user.faintingExplain} </li>
          <li> Thyroid : {JSON.stringify(user.thyroid)} </li>
          <li> Thyroid Explanation{user.thyroidExplain} </li>
          <li> Kidney Disease : {JSON.stringify(user.kidneyDisease)} </li>
          <li> Kidney Disease Explanation : {user.kidneyDiseaseExplain} </li>
          <li> Sickle Cell : {JSON.stringify(user.sickleCell)} </li>
          <li> Sickle Cell Explanation : {user.sickleCellExplain} </li>
          <li> Seizures : {JSON.stringify(user.seizures)} </li>
          <li> Seizures Explanation{user.seizuresExplain} </li>
          <li> Sleep Disorders : {JSON.stringify(user.sleepDisorders)} </li>
          <li> Sleep Disorders Explanation{user.sleepDisordersExplaine} </li>
          <li> G I Problems : {JSON.stringify(user.giProblems)} </li>
          <li> G I Problems Explanation : {user.giProblemsExplain} </li>
          <li> Surgery : {JSON.stringify(user.surgery)} </li>
          <li> Surgery Explanation{user.surgeryExplain} </li>
          <li> Serious Injuries : {JSON.stringify(user.seriousInjury)} </li>
          <li> Serious Injuries Explanation{user.seriousInjuryExplain} </li>
          <li> Other : {JSON.stringify(user.other)} </li>
          <li> Other Explanation{user.otherExplain} </li>

        </ul>
      </div>
    );
  }
}



Details.propTypes = {
  user: PropTypes.object.isRequired,
  getUserId: PropTypes.func,
  url: PropTypes.object,
  query: PropTypes.array,
  id: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return {
    getUserId: id => {
      dispatch(getUserId(id));
    }
  };
}

function mapStateToProps(state) {
  return {
    users: state.users,
    user: state.user
  };
}


export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Details);
