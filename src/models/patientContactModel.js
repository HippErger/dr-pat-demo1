import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

  userName: {
    type: String,
    maxlength: [ 20, 'We do not need that long of a name' ]
  },

  passWord: {
    type: String,
    maxlength: [ 20, 'We do not need that long of a name' ]
  },


  firstName: {
    type: String,
    maxlength: [ 20, 'We do not need that long of a name' ]
  },

  lastName: {
    type: String,
    maxlength: [ 20, 'That is a long last name' ]
  },

  birthDate: {
    type: String,
    maxlength: [ 20, 'bday' ]
  },

  address: {
    type: String, Number,
    maxlength: [ 300, 'Leave some information to start the conversation' ]
  },

  city: {
    type: String,
    maxlength: [ 25, 'City name is too long, vote to change' ]
  },

  homeState: {
    type: String,
    required: true,
    maxlength: [ 20, 'Username does not need to be that long' ]
  },

  zip: {
    type: Number,
    maxlength: [ 10, 'Just the zip' ]
  },

  asthmaExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  asthma: {
    type: Boolean,
  },

  diabetesExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  diabetes: {
    type: Boolean,
  },

  hypertensionExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  hypertension: {
    type: Boolean,
  },

  heartdiseaseExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  heartdisease: {
    type: Boolean,
  },

  strokeExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  stroke: {
    type: Boolean,
  },

  copdExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  copd: {
    type: Boolean,
  },

  earsinusExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  earsinus: {
    type: Boolean,
  },

  muscularSkeletalExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  muscularSkeletal: {
    type: Boolean,
  },

  menstrualExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  menstrual: {
    type: Boolean,
  },

  psychiatricExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  psychiatric: {
    type: Boolean,
  },

  learningExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  learning: {
    type: Boolean,
  },

  bleedingExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  bleeding: {
    type: Boolean,
  },

  faintingExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  fainting: {
    type: Boolean,
  },

  thyroidExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  thyroid: {
    type: Boolean,
  },

  kidneyDiseaseExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  kidneyDisease: {
    type: Boolean,
  },

  sickleCellExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  sickleCell: {
    type: Boolean,
  },

  seizuresExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  seizures: {
    type: Boolean,
  },

  sleepDisordersExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  sleepDisorders: {
    type: Boolean,
  },

  giProblemsExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  giProblems: {
    type: Boolean,
  },

  surgeryExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  surgery: {
    type: Boolean,
  },

  seriousInjuryExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  seriousInjury: {
    type: Boolean,
  },

  otherExplain: {
    type: String,
    maxlength: [ 200, 'Details' ]
  },

  other: {
    type: Boolean,
  },


});

export default mongoose.model('User', userSchema);
