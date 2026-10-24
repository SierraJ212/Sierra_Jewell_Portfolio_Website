import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
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

export default mongoose.model('Service', serviceSchema);