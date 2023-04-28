
import  jwt  from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

export function createToken(data){
  const key = process.env.ACCESS_TOKEN_SECRET
  let token = jwt.sign(data,key);
  return token
}

export  function verifyToken(token){
  const key = process.env.ACCESS_TOKEN_SECRET
  jwt.verify(token, key, function(err, decoded) {
    const tk = null
    if (err) {
      console.log(err);
      return tk
    }
    
    return decoded
  });
}

 

