const router = require('express').Router();
const usuarioController = require('../../controllers/UserController.js');
const auth = require ('../../middlewares/auth');

//.com/api/usuario/list
router.get('/list',auth.verificarAdministrador, usuarioController.list)

//.com/api/usuario/register 
router.post('/register',auth.verificarAdministrador,usuarioController.register)

//.com/api/usuario/login
router.post('/login',usuarioController.login);

//.com/api/usuario/update
router.put('/update',auth.verificarAdministrador, usuarioController.update);

module.exports = router;



