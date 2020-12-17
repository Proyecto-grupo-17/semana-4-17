const db = require("../models");

exports.list = async(req, res, next) => {
    try {
       const reg = await db.Categoria.findAll();
       res.status(200).json(reg);
    } catch (error) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(error);
    }
}

exports.add = async(req, res, next) => {
    try {
        const reg = await db.Categoria.create(req.body);
        res.status(200).json(reg);
    } catch (error) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(error);
    }
}

exports.update = async (req, res, next) => {
    try {
       const reg = await db.Categoria.update({ 
           nombre: req.body.nombre, 
           descripcion: req.body.descripcion
        }, { where:{ id: req.body.id} });
       res.status(200).json(reg); 
    } catch (error) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(error);
    }
}

exports.activate = async (req, res, next) => {
    try {
        const reg= await db.Categoria.update({ estado: 1 },{ where: { id: req.body.id } });
        res.status(200).json(reg);
    } catch (error) {
        res.status(500).send({
            message: 'Ocurrió un error'
        })
        next(error);
    }
}

exports.deactivate = async(req, res,next) => {
    try {
        const reg = await db.Categoria.update({estado: 0}, {where: {id: req.body.id } });
        res.status(200).json(reg);
    } catch (error) {
        res.status(500).send({
            message: 'Ocurrióun error'
        });
        next(error);
    }
}
