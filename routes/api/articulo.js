const router = require('express').Router();
const articuloControllers = require('../../controllers/ArticuloController');
const auth = require ('../../middlewares/auth');

//.com/api/articulo/list
router.get('/list', articuloControllers.list);

//.com/api/articulo/add
router.post('/add', auth.verificarAdministrador, articuloControllers.add);

//.com/api/articulo/update
router.put('/update', auth.verificarAdministrador, articuloControllers.update);

//.com/api/articulo/activate
router.put('/activate', auth.verificarAdministrador, articuloControllers.activate);

//.com/api/articulo/deactivate
router.put('/deactivate', auth.verificarAdministrador, articuloControllers.deactivate);

module.exports = router;