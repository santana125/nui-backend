const jwt = require('jsonwebtoken');
//require('dotenv').config({path: './src/config/.env'});

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({message: "Token required."});

    const parts = authHeader.split(' ');

    if(!parts.length === 2)
        return res.status(401).send({message: "Token error"});
    
    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({message: "token malformed"});

    jwt.verify(token, "secret", (err, decoded) => {
        if (err) return res.status(401).send({message: "Invalid Token"});
        
        req.usuario_id = decoded.id;
        return next();

    });
}
