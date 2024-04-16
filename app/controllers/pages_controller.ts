import Role from '#models/role'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  async home({ view }: HttpContext) {
    const users = await User.query().orderBy('id', 'asc').preload('role')
    return view.render('pages/home', { users: users })
  }

  async about({ view }: HttpContext) {
    return view.render('pages/about')
  }

  async register({ view }: HttpContext) {
    return view.render('pages/register')
  }

  // async datatable({ view }: HttpContext) {
  //   // const users = await User.all()
  //   const users = await User.query().orderBy('id', 'asc')
  //   return view.render('pages/datatable', { users: users })
  // }

  async datatable({ view }: HttpContext) {
    const roles = await Role.query().where('name', '!=', 'Admin')
    return view.render('pages/datatable', { users: roles })
  }
}
