import mongoose from "mongoose";
const { Schema } = mongoose;

const CatSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Cat", CatSchema);
