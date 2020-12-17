const router = require('express').Router();
const categoriaController = require('../../controllers/CategoriaController');


//.com/api/categoria/list
router.get('/list', categoriaController.list);

//.com/api/categoria/add
router.post('/add', categoriaController.add);

//.com/api/categoria/update
router.put('/update', categoriaController.update);

//.com/api/categoria/activate
router.put('/activate', categoriaController.activate);

//.com/api/categoria/deactivate
router.put('/deactivate', categoriaController.deactivate);

module.exports = router;
