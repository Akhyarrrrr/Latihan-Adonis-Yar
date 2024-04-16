/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const PagesController = () => import('#controllers/pages_controller')
const UsersController = () => import('#controllers/users_controller')
const AccountsController = () => import('#controllers/accounts_controller')

// router.on('/').render('pages/home')

router
  .group(() => {
    router.get('/', [PagesController, 'home'])
    router.get('/home', [PagesController, 'home'])
    router.get('/about', [PagesController, 'about'])
    router.get('/register', [PagesController, 'register'])
    router.get('/datatable', [PagesController, 'datatable'])
    router.post('/logout', [AccountsController, 'logout'])
  })
  .use(middleware.auth())

// router.post('/user', [UsersController, 'create'])
// router.get('/user/:id', [UsersController, 'edit']).as('user.edit')
// router.put('/user/:id', [UsersController, 'update']).as('user.edit')

router.post('/login', [AccountsController, 'login'])
router.get('/login', [AccountsController, 'index'])

router.resource('account', AccountsController)
router.resource('user', UsersController)
