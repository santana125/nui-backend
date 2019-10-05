const jwt = require('jsonwebtoken');
//require('dotenv').config({path: './src/config/.env'});

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({error: "Token required."});

    const parts = authHeader.split(' ');

    if(!parts.length === 2)
        return res.status(401).send({error: "Token error"});
    
    const [ scheme, token ] = parts;

    console.log(scheme);
    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({error: "token malformed"});

    jwt.verify(token, "secret", (err, decoded) => {
        if (err) return res.status(401).send({error: "Invalid Token"});
        
        req.usuario_id = decoded.id;
        return next();

    });
}
