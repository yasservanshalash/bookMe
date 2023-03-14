import User, { UserDocument } from "../models/User";

const createUser = async (newUser: UserDocument): Promise<UserDocument> => {
  return newUser.save();
};

const getAllUser = async (): Promise<UserDocument[]> => {
  return User.find();
};

const getUserById = async (userId: String): Promise<UserDocument | null> => {
  const user = User.findOne({ _id: userId });
  return user;
};
const getUserByEmail = async (email: string): Promise<UserDocument | null> => {
  const user = User.findOne({ email: email });
  return user;
};

const deleteByEmail = async (userId: String): Promise<UserDocument | null> => {
  return User.findByIdAndRemove(userId);
};

const updateById = async (
  userId: String,
  userUpdates: UserDocument
): Promise<UserDocument | null> => {
  return User.findByIdAndUpdate(userId, userUpdates, { new: true });
};

export default {
  createUser,
  getAllUser,
  deleteByEmail,
  updateById,
  getUserByEmail,
  getUserById,
};
