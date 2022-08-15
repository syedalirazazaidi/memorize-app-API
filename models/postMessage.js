import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  creator: String,
  title: String,
  message: String,
  name: String,
  tags: [String],
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
