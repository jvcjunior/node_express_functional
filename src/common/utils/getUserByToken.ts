const jwt = require('jsonwebtoken');
import { JWT_SECRET } from '../constants/auth.constant'
import {
  getRecordBy
} from '../../repositories/user.repository';

function treatAuthToken(token: string) {
  if(!token)
  {
    return false;
  }
  if(token.indexOf('Bearer') !== -1)
  {
    token = token.slice(7);
  }
  return jwt.verify(token, process.env.JWT_KEY || JWT_SECRET);
}

// /**
//  * extract user from jwt token
//  * get the id and fetch the user
//  * */
// module.exports = (token: string, extraParam)  => {
//   const data = treatAuthToken(token);

//   if (!data.id) {
//     throw Error('User not logged in.');
//   }

//   const param = Object.assign({
//     where: {
//       id: data.id
//     }
//   }, extraParam);

//   return getRecordBy('email', email)

//   // return User.findOne(param);
// };
