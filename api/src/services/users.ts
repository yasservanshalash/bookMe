import User, { UserDocument } from "../models/User";

const createUser = async (newUser: UserDocument): Promise<UserDocument> => {
  return newUser.save();
};
//for admin want to see all users
const getUser = async (): Promise<UserDocument[]> => {
  return User.find();
};

const getUserById = async (userId: string): Promise<UserDocument | null> => {
  const user = User.findOne({ userId: userId });
  return user;
};
const getUserByEmail = async (email: string): Promise<UserDocument | null> => {
  const user = User.findOne({ email: email });
  return user;
};

const deleteByEmail = async (email: string): Promise<UserDocument | null> => {
  return User.findByIdAndRemove(email);
};

const updateById = async (
  userId: String,
  userUpdates: UserDocument
): Promise<UserDocument | null> => {
  return User.findByIdAndUpdate(userId, userUpdates, { new: true });
};

export default {
  createUser,
  getUser,
  deleteByEmail,
  updateById,
  getUserByEmail,
  getUserById,
};
