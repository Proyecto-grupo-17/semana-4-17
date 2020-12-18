const db = require('../models');

exports.list = async(req, res, next) =>{
    try {
       const reg = await db.Articulo.findAll({
           include:[{
               model: db.Categoria,
               as: 'categoria'
           }],
       });
       res.status(200).json(reg); 
    } catch (error) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(error);
    }
};

exports.add = async(req, res, next) =>{
    try {
       const reg = await db.Articulo.create(req.body);
       res.status(200).json(reg); 
    } catch (error) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(error);
    }
};

exports.update = async(req, res, next) =>{
    try {
       const reg = await db.Articulo.update({ 
           categoriaId: req.body.categoriaId, 
           codigo: req.body.codigo, 
           nombre: req.body.nombre,
           descripcion: req.body.descripcion,
        },{
            where: { id: req.body.id }
        });
        res.status(200).json(reg); 
    } catch (error) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(error);
    }
}

exports.activate = async (req,res, next) => {
    try {
      const reg = await db.Articulo.update(
          {estado: 1}, {where: { id: req.body.id }}
      );
      res.status(200).json(reg);  
    } catch (error) {
        res.status(500).send({
            message: 'Ocurrió un error',
        });
        next(error);
    }
}
 
exports.deactivate =async(req, res, next) => {
    try {
       const reg = await db.Articulo.update(
           {estado: 0}, { where: { id: req.body.id}}
       );
       res.status(200).json(reg);
    } catch (error) {
        res.status(500).send({
            message: 'Ocurrió un error',
        });
        next(error);
    }
}