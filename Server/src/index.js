const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index')

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*'); /* dame acceso desde cualquier punto */
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'  /*acceso a todos los metodos  */
   );
   next();
});

server.use(express.json());  /* Crea un middleware que ejecute a express.json(). */
server.use('/rickandmorty', router)  /**Crea un middleware que agregue el string "/rickandmorty" antes de cada una de tus rutas. en como esto complementa la ruta si no esta esto la ruta no estaria completa. agrega un path antes de los anteriores */

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});













//############## esto era lo que tenia que borrar  ##
/* let http = require('http');

PORT = 3001;
const getCharById = require('./controllers/getCharById')

http.createServer((req , res) =>{

    res.setHeader('Access-Control-Allow-Origin', '*');
     const { url } = req
     //ruta
     if( url.includes("/rickandmorty/character")){
        const id = url.split('/').pop();
        //controllador
        getCharById(res,id)
     }

}).listen(PORT, 'localhost')


 */


