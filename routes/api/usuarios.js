const router = require('express').Router();
const usuarioController = require('../../controllers/UserController.js');
const auth = require ('../../middlewares/auth');

//.com/api/usuario/list
router.get('/list', usuarioController.list)

//.com/api/usuario/add
router.post('/add',usuarioController.add)

//.com/api/usuario/update
router.put('/update', usuarioController.update);

//.com/api/usuario/login
router.post('/login',usuarioController.login);

//.com/api/usuario/activate
router.put('/activate', usuarioController.activate);

//.com/api/usuario/deactivate
router.put('/deactivate',usuarioController.deactivate);

module.exports = router;

