import mongoose from 'mongoose';

const referenceSchema = new mongoose.Schema(
  {
    name: String,
    testimonial: String,
    position: String,
    company: String,
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

export default mongoose.model('Reference', referenceSchema);