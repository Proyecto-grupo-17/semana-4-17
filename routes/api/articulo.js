const router = require('express').Router();
const articuloControllers = require('../../controllers/ArticuloController');

//.com/api/articulo/list
router.get('/list', articuloControllers.list);

//.com/api/articulo/add
router.post('/add', articuloControllers.add);

//.com/api/articulo/update
router.put('/update', articuloControllers.update);

//.com/api/articulo/activate
router.put('/activate',articuloControllers.activate);

//.com/api/articulo/deactivate
router.put('/deactivate', articuloControllers.deactivate);

module.exports = router;