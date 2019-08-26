import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

  userName: {
    type: String,
    unique: true,
    maxlength: [ 50, 'That is a long email' ]
  },

  bandName: {
    type: String,
    required: true,
    maxlength: [ 50, 'something went wrong' ]
  },

  albumName: {
    type: String,
    required: true,
    maxlength: [ 30, 'something went wrong' ]
  },


  releaseDate: {
    type: String,
    maxlength: [ 20, 'releaseDate please' ]
  },
  inventory: {
    type: String,
    maxlength: [ 20, 'inventory please' ]
  },


  message: {
    type: String,
    maxlength: [ 500, 'Leave some information to start the conversation' ]
  },


});

export default mongoose.model('User', userSchema);
