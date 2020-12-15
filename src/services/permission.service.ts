import HttpStatus from 'http-status-codes';
//@ts-ignore
import asyncPipe from 'pipeawait';
import { Request } from 'express';
import { getUserRole } from '../repositories/permission.repository'
import { getRoleWithPermissions } from '../repositories/role.repository'
import { treatAuthToken } from '../common/utils/auth.utils';
import BaseError from '../exceptions/BaseError';

const checkPermissions = async (request: Request, permissionCode: string) => 
  asyncPipe(
    treatAuthToken,
    getUserRole,
    getRoleWithPermissions,
    checkifHasPermission(permissionCode),
  )(request.headers["authorization"])

const checkifHasPermission = (permissionCode: string) => {
  return async ({ permissions } : { permissions: IPermission[]}) =>  {
    const rolePermissions = permissions.filter(permission => permission.code === permissionCode)
    if(rolePermissions.length === 0) {
      throw new BaseError("User has no permission to acccess this route", HttpStatus.UNAUTHORIZED, "User has no permission to acccess this route", true);
    }
  }
}

export default {
  checkPermissions,
}