import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: String,
  completion: Date,
  description: String,
  image: String,
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

export default mongoose.model('Project', projectSchema);