import HttpStatus from 'http-status-codes';
import { Request } from 'express';
import { getUserWithRole } from '../repositories/permission.repository'
import { getRoleWithPermissions } from '../repositories/role.repository'
import { treatAuthToken } from '../common/utils/auth.utils';
import BaseError from '../exceptions/BaseError';

const checkPermissions = async (request: Request, permissionCode: string) => {
  const data: IUser = <IUser>treatAuthToken(request.headers["authorization"]);
  const user = await getUserWithRole(data.id)
  const role = await getRoleWithPermissions(user.role.id)
  const rolePermissions = role.permissions.filter(permission => permission.code === permissionCode);
  if(rolePermissions.length === 0) {
    throw new BaseError("User has no permission to acccess this route", HttpStatus.UNAUTHORIZED, "User has no permission to acccess this route", true);
  }
}

export default {
  checkPermissions,
}