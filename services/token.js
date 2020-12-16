var jwt = require("jsonwebtoken");
const db = require("../models");
 
const checkToken = async(token) =>{
    let localID = null;
    try {
       const { id } = await token.decode(token);
       localID = id;
    } catch (error) {
        return false;
    }
    const user = await db.Usuario.findOne({where: {
        id : localID,
        estado : 1
    }});
    if (user) {
        const token = encode(user);
        return token;  
    } else {
        return false;
    }
}

module.exports = {
  //generar el token
  encode: async (user) => {
    const token = jwt.sign(
      {
        id: user.id,
        nombre: user.nombre,
        rol: user.rol,
        email: user.email,
      },
      "Hola soy una cadena secreta",
      {
        expiresIn: 86400, // 24 horas
      }
    );
    return token;
  },
  //permite decodificar el token
  decode: async (token) => {
    try {
        const{ _id } = await jwt.verify(token, "Hola soy una cadena secreta");
        const user = await db.Usuario.findOne({where: {
            id :  _id,
            estado : 1
        }});
        if (user) {
            return user;
        } else {
            return false;
        }
    } catch (e) {
        //tarea
        const newToken = await checkToken(token);
        return newToken;
    }
  },
};
