import Role from '#models/role'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AccountsController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    return view.render('pages/login')
  }

  async login({ request, response, session, auth }: HttpContext) {
    const data = request.only(['email', 'password'])

    try {
      const user = await User.query().where('email', data.email).where('roleId', '1').firstOrFail()

      await auth.use('web').login(user)
      session.flash({ status: 'Login successful' })
      return response.redirect('/home')
    } catch (e) {
      session.flash({ error: 'Invalid credentials' })
      return response.redirect('back')
    }
  }

  async logout({ auth, response, session }: HttpContext) {
    await auth.use('web').logout()
    session.flash({ status: 'Logout successful' })
    return response.redirect('/login')
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    const roles = await Role.query().where('name', '=', 'Admin')
    // return roles
    return view.render('pages/register', { roles: roles })
  }

  /**
   * Handle form submission for the create action
   */
  // async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  // async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  // async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  // async destroy({ params }: HttpContext) {}
}
