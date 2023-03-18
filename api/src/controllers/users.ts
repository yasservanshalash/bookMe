import { Request, Response } from "Express";
import bcrypt from "bcrypt";

import User, { UserDocument } from "../models/User";
import UserServices from "../services/users";
import generateToken from "../util/generateToken";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, avatar, isAdmin, isBanned, phoneNumber } =
      req.body;
    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      email: email,
      password: hashedPassword,
      name: name,
      avatar: avatar,
      isAdmin: isAdmin,
      isBanned: isBanned,
      phoneNumber: phoneNumber,
    });

    const userEmail = await UserServices.getUserByEmail(email);
    if (!userEmail) {
      const user = await UserServices.createUser(newUser);
      res.json({ status: "success", message: `Registration successful.` });
    }
    res.json({ message: `${req.body.email} is already registered.` });
  } catch (error) {
    console.log(error);
  }
};

export const loginWithPasswordController = async (
  req: Request,
  res: Response
) => {
  try {
    const userData = await UserServices.getUserByEmail(req.body.email);
    if (!userData) {
      res.status(401).json({
        massage: `The email ${req.body.email} doesn't exist`,
      });
      return;
    }

    const databasePassword = userData.password;
    const inputPassword = req.body.password;

    const match = await bcrypt.compare(inputPassword, databasePassword);
    if (!match) {
      console.log("inside match");
      res.json("The password does not exist!");
      return;
    }

    const token = generateToken(userData._id, req.body.email);
    res.status(200).json({ userData, token });
  } catch (error) {
    console.log(error);
  }
};

export const displayUserInformationController = async (
  req: Request,
  res: Response
) => {
  try {
    const userData = await UserServices.getUserById(req.params.userId);
    if (!userData) {
      res.json({ message: `No user with id ${req.params.userId}` });
      return;
    }

    res.json(userData);
  } catch (error) {
    console.log(error);
  }
};

export const updateUserByIdController = async (req: Request, res: Response) => {
  try {
    //const saltRounds = await bcrypt.genSalt(10);
    //const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    // req.body.password = hashPassword;
    console.log(req.params.userId, req.body);
    const updatedUser = await UserServices.updateById(
      req.params.userId,
      req.body
    );
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

export const displayAllInformationController = async (
  req: Request,
  res: Response
) => {
  try {
    const userData = await UserServices.getAllUser();
    if (!userData) {
      res.json({ message: `No users stored in data base` });
      return;
    }
    res.json(userData);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserByIdController = async (req: Request, res: Response) => {
  try {
    const userData = await UserServices.deleteByEmail(req.params.userId);
    const userDataAfter = await UserServices.getAllUser();
    if (!userData) {
      res.json({ message: `No  ${req.params.userId} stored in data base` });
      return;
    }
    res.json(userDataAfter);
  } catch (error) {
    console.log(error);
  }
};

export const googleAuthenticate = async (req: Request, res: Response) => {
  try {
      console.log(req, "request");
      const userData = req.body as UserDocument;
      if (!userData) {
          res.json({ message: "Cant find user with the email" })
          return; //see 43:00 in googlelogin 1 video
      }
      // const token = jwt.sign(
      // {
      //     name: userData.name,
      //     email: request.body.email,
      // },
      // JWT_SECRET,
      // {
      //     expiresIn: "1h",
      // }
      // );
      // res.json({token, userData});
      res.json({ userData });
  } catch (error) {
    console.log(error);
  }
};
