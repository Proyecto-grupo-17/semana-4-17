const routerx = require('express-promise-router');
const articuloRouter = require('./articulo');
const apiUsuarioRouter = require('./api/usuarios')


const router = routerx();
//.com/api/usuario
//.com/api/usuario/listar
//....
router.use('/usuario', apiUsuarioRouter);

// router.use('/articulo', articuloRouter);

module.exports = router;