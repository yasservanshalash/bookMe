//server here
import Express from "Express";
import cors from "cors";
//routes
import userRouter from "./routes/users";
import placeRouter from "./routes/place";
import wishListRouter from "./routes/wishList";
const app = Express();
app.use(Express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/places", placeRouter);
app.use("/wishlist", wishListRouter);
export default app;
