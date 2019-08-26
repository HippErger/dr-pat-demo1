import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
<<<<<<< HEAD
  bandName: {
    type: String,
    required: true,
    maxlength: [ 50, 'something went wrong' ]
=======
  firstName: {
    type: String,
    required: true,
    maxlength: [ 30, 'something went wrong' ]
>>>>>>> 25dfc3570ab8d4a6b5b5c25bed5b065eaf86639e
  },
  userName: {
    type: String,
    unique: true,
    maxlength: [ 50, 'That is a long email' ]
  },
  phone: {
    type: String,
    maxlength: [ 20, 'Phone please' ]
  },
  message: {
    type: String,
    maxlength: [ 500, 'Leave some information to start the conversation' ]
  },


});

export default mongoose.model('User', userSchema);
