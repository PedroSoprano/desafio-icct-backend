import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export const loginService = (data) => {
    const token = jwt.sign({ email: data.email }, process.env.SECRET_KEY, { expiresIn: '1h' });

    return {
        status: "success",
        statusCode: 200,
        message: token
    }
}