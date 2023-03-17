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




const createOrFindUserByEmail = async (
  // userId: string,
  payload: Partial<UserDocument>
): Promise<UserDocument | null> => {
 console.log(payload, "payload");
 
 const userEmail = payload.email;
 const result = await User.findOne({email: userEmail});

 if (result) {
  return result;
 }
 else{
  const user = new User({
      name: payload.name,
      email:payload.email,
  })
  return user.save();
 }
};

export default {
  createUser,
  getAllUser,
  deleteByEmail,
  updateById,
  getUserByEmail,
  getUserById,
  createOrFindUserByEmail,
};
