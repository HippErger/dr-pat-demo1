import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  bandName: {
    type: String,
    required: true,
    maxlength: [ 50, 'something went wrong' ]
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
