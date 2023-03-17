//server here
import Express from "Express";
import cors from "cors";


import  passport  from 'passport';
import {googleStrategy} from "./config/passport"

//routes
import userRouter from "./routes/users";
import placeRouter from "./routes/place";
import wishListRouter from "./routes/wishList";
import reviewRouter from "./routes/review";
const app = Express();
app.use(Express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/places", placeRouter);
app.use("/wishlist", wishListRouter);
<<<<<<< Updated upstream
app.use("/review", reviewRouter);
||||||| Stash base
=======

app.use(passport.initialize());
passport.use(googleStrategy)

>>>>>>> Stashed changes
export default app;
