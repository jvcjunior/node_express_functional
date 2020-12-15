import roleModel from '../database/models/role.model'

const getRoleWithPermissions = async ({ role } : { role: IRole})=> 
    await roleModel
      .query()
      .withGraphJoined('permissions')
      .where('roles.id', '=', role.id)
      .first()

export {
  getRoleWithPermissions,
}

