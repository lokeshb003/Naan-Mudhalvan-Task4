import User from "../models/mongodb-atlas.js"
import bcrypt from "bcryptjs";

const registerRoute = async(req,res) => {
  try {
    const registrationData = req.body;
    console.log(registrationData);
    const newPassword = await bcrypt.hash(req.body.password,10);
    const encryptedData = {...registrationData, password : newPassword}
    const data = new User (encryptedData);
    data.save();
    console.log(encryptedData);
    res.status(200).json({success : true,data : encryptedData,message : "Hi i am Lokesh Balaji"})
    }
    catch (error) {
      res.status(400).send(error);
    }
}
export default registerRoute;
