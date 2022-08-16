import jwt from "jsonwebtoken";
// import UserModel from "../models/user";

const secret = "test";

const auth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(
        token,
        secret
        // process.env.JWT_SECRET
      );
      console.log(decoded, "DECOD");

      // Get user from the token
      // req.user = await UserModel.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }
  // console.log(req.headers, "MIDDLE");
  // try {
  // const token = req.headers.authorization.split(" ")[1];
  // const isCustomAuth = token.length < 500;
  // let decodedData;
  // if (token && isCustomAuth) {
  //   decodedData = jwt.verify(token, secret);
  //   req.userId = decodedData?.id;
  // } else {
  //   decodedData = jwt.decode(token);
  //   req.userId = decodedData?.sub;
  // }
  // next();
  // } catch (error) {
  //   console.log(error);
  // }
};

export default auth;
