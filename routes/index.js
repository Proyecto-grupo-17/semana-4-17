const routerx = require('express-promise-router');
const apiUsuarioRouter = require('./api/usuarios');
const apiCategoriaRouter = require('./api/categoria');
const apiArticuloRouter = require('./api/articulo');

const router = routerx();

//.com/api/usuario
//.com/api/usuario/list
//....
router.use('/usuario', apiUsuarioRouter);

//.com/api/articulo
//.com/api/articulo/list
//...
router.use('/categoria', apiCategoriaRouter);

//.com/api/categoria
//.com/api/categoria/activate
//...
router.use('/articulo', apiArticuloRouter);

module.exports = router;
