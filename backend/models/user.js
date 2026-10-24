import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  created: Date,
  updated: Date,
},
{
  toJSON: {
    versionKey: false,
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
    },
  },
}
);

export default mongoose.model('User', userSchema);