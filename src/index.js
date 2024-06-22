const express = require('express');

const { PORT } = require('./config/serverConfig');

const setupAndStartServer = ()=>{
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.listen(PORT, () => {
        console.log(`Listeninng on port: ${PORT}`);
    })
}

setupAndStartServer();