import roleModel from '../database/models/role.model'

const getRoleWithPermissions = async (id: string | number)=> 
  await roleModel
    .query()
    .withGraphJoined('permissions')
    .where('roles.id', '=', id)
    .first()

export {
  getRoleWithPermissions,
}

