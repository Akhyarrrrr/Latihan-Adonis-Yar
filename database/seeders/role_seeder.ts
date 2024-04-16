import Role from '#models/role'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { Roles } from '../../app/Enums/roles.js'

export default class extends BaseSeeder {
  async run() {
    await Role.createMany([
      { id: Roles.ADMIN, name: 'Admin' },
      { id: Roles.GUEST, name: 'Guest' },
    ])
  }
}
