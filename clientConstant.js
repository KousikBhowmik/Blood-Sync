import dotenv from "dotenv";

dotenv.config();


const SERVER_URL = process.env.SERVER_URL; 
// in .env file ->  SERVER_URL="https://spherre-blood-sync.vercel.app/api/v1"

const USER_ROUTE =`${SERVER_URL}/user`;
export const registerUserPath = `${USER_ROUTE}/register-user`; 
// Method POST , for user creation
export const getUserPath = `${USER_ROUTE}/get-user`; 
// Method GET, for get user details
const POST_ROUTE = `${SERVER_URL}/post`;