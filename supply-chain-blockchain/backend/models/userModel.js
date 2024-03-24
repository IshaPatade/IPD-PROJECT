import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password, username) {
  //validation
  if (!email || !password) {
    throw error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw error("Invalid email");
  }

  // if(!validator.isStrongPassword())

  const exists = await this.findOne({ email });
  if (exists) {
    throw error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash, username });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw error("Incorrect email");
  }

  const match = bcrypt.compare(password, user.password);
  if (!match) {
    throw error("Incorrect password");
  }

  return user;
};

const User = mongoose.model("User", userSchema);
export { User };
