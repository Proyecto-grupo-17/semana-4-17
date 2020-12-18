const routerx = require('express-promise-router');
const apiUsuarioRouter = require('./api/usuarios');
const apiCategoriaRouter = require('./api/categoria');
const apiArticuloRouter = require('./api/articulo');

const router = routerx();

//.com/api/usuario
//.com/api/usuario/list
//....
router.use('/usuario', apiUsuarioRouter);

//.com/api/categoria
//.com/api/categoria/list
//...
router.use('/categoria', apiCategoriaRouter);

//.com/api/articulo
//.com/api/articulo/activate
//...
router.use('/articulo', apiArticuloRouter);

module.exports = router;