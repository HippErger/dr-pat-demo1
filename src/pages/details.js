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
        <style jsx>{`
          h1 {
            margin-left: 5%;
            font-family: arial;
            font-weight: lighter;
          }
          ul {
            list-style-type: none;
          }
          li {
            font-family: arial;
          }
          ul > .health-history {
            font-size: 16px;
            text-decoration: underline;
            margin: 1% auto 1% 2%;
            text-align: center;
          }
          ul > li > .disease-history-div {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            border-bottom: solid .5px black;
            margin-bottom: 1%;
          }
          ul > li > .gray-color {
            background-color: #D3D3D3;
          }

          ul > li > .white-color {
            background-color: #F8F8F8;
          }
        `}</style>
        <Header />
        <h1>
          {user.firstName}&nbsp;{user.lastName}
        </h1>
        <ul>
          <li> username: {user.userName} </li>
          <li> {user.address} </li>
          <li> {user.username} </li>
          <li className='health-history'> Health History </li>
          <li>
            <div className='disease-history-div gray-color'>
              <div>Asthma : {JSON.stringify(user.asthma)}</div>
              <div>Asthma Explanation: {user.asthmaExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div white-color'>
              <div>Diabetes : {JSON.stringify(user.diabetes)}</div>
              <div>Diabetes Explanation:{user.diabetesExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div gray-color'>
              <div>Hypertension : {JSON.stringify(user.hypertension)} </div>
              <div>Hypertension Explanation : {user.hypertensionExplain} </div>
            </div>
          </li>
          <li>
            <div className='disease-history-div white-color'>
              <div>Heart Disease : {JSON.stringify(user.heartdisease)} </div>
              <div>Heart Disease Explanation : {user.heartdiseaseExplain} </div>
            </div>
          </li>
          <li>
            <div className='disease-history-div gray-color'>
              <div>Stroke : {JSON.stringify(user.stroke)} </div>
              <div>Stroke Explanation : {user.strokeExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div white-color'>
              <div>COPD : {JSON.stringify(user.copd)}</div>
              <div>COPD Explanation : {user.copdExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div gray-color'>
              <div>Ear/Sinus : {JSON.stringify(user.earsinus)}</div>
              <div>Ear/Sinus Explanation{user.earsinusExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div white-color'>
              <div>Muscular/Skeletal : {JSON.stringify(user.muscularSkeletal)}</div>
              <div>Muscular/Skeletal Explanation : {user.muscularSkeletalExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div gray-color'>
              <div>Menstrual : {JSON.stringify(user.menstrual)}</div>
              <div>Menstrual Explanation : {user.menstrualExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div white-color'>
              <div>Psychiatric : {JSON.stringify(user.psychiatric)}</div>
              <div>Psychiatric Explanation : {user.psychiatricExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div gray-color'>
              <div>Learning : {JSON.stringify(user.learning)}</div>
              <div>Learning Explanation : {user.learningExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div white-color'>
              <div>Bleeding : {JSON.stringify(user.bleeding)}</div>
              <div>Bleeding Explanation : {user.bleedingExplain}</div>
            </div>
          </li>

          <li>
            <div className='disease-history-div gray-color'>
              <div>Fainting : {JSON.stringify(user.fainting)}</div>
              <div>Fainting Explanation{user.faintingExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div white-color'>
              <div>Thyroid : {JSON.stringify(user.thyroid)}</div>
              <div>Thyroid Explanation{user.thyroidExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div gray-color'>
              <div>Kidney Disease : {JSON.stringify(user.kidneyDisease)} </div>
              <div>Kidney Disease Explanation : {user.kidneyDiseaseExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div white-color'>
              <div>Sickle Cell : {JSON.stringify(user.sickleCell)}</div>
              <div>Sickle Cell Explanation : {user.sickleCellExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div gray-color'>
              <div>Seizures : {JSON.stringify(user.seizures)}</div>
              <div> Seizures Explanation{user.seizuresExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div white-color'>
              <div>Sleep Disorders : {JSON.stringify(user.sleepDisorders)}</div>
              <div>Sleep Disorders Explanation{user.sleepDisordersExplaine}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div gray-color'>
              <div>G I Problems : {JSON.stringify(user.giProblems)}</div>
              <div>G I Problems Explanation : {user.giProblemsExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div white-color'>
              <div>Surgery : {JSON.stringify(user.surgery)}</div>
              <div>Surgery Explanation{user.surgeryExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div gray-color'>
              <div>Serious Injuries : {JSON.stringify(user.seriousInjury)}</div>
              <div>Serious Injuries Explanation{user.seriousInjuryExplain}</div>
            </div>
          </li>
          <li>
            <div className='disease-history-div white-color'>
              <div>Other : {JSON.stringify(user.other)}</div>
              <div>Other Explanation{user.otherExplain}</div>
            </div>
          </li>
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
