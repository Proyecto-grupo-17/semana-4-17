const routerx = require('express-promise-router');
const apiUsuarioRouter = require('./api/usuarios');
// const apiUsuarioRouter = require('./api/articulo');

const router = routerx();

//.com/api/usuario
//.com/api/usuario/listar
//....
router.use('/usuario', apiUsuarioRouter);

// router.use('/articulo', articuloRouter);

module.exports = router;
