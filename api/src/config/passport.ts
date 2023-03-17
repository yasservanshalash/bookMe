import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import UserService from "../services/users";

import GoogleTokenStrategy from 'passport-google-id-token';
// import passport from 'passport';


dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
const CLIENT_ID = process.env.CLIENT_ID as string;


export const JwtStrategys = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },

  async (payload: any, done: any) => {
    const email = payload.email;
    console.log("email is", email);
    const foundUser = await UserService.getUserByEmail(email);
    console.log("user is", foundUser);
    if (!foundUser) {
      return "no user";
    }
    done(null, foundUser);
  }
);

//
export const googleStrategy = new GoogleTokenStrategy(
  { clientID: CLIENT_ID },
  async  (parsedToken, googleId: string, done) => {
      console.log(parsedToken, "parsed token");
      const userPayload = {
          name: parsedToken.payload.name,
          email: parsedToken.payload.email
      };

     const user = await UserService.createOrFindUserByEmail(userPayload);
      done(null,user);
  }
  
);
