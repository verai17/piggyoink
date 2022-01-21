const http = require('http');
const path = require('path');
const _    = require('lodash');
const requireAll  = require('require-all') 
const express     = require('express');
const app         = express();
const cors        = require('cors');
const bodyparser  = require("body-parser");  
var server        = http.createServer(app);
require('dotenv').config();


const context = require('./src/utils/context')
// const jwt     = require('./utils/passport-jwt')
 
 
app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));       //parse application/x-www-form-urlencoded
app.use(bodyparser.json());                             //parse application/json
// app.use(bodyparser.json({type: "application/json"}));   // Parse vnd.api+json as json
 
// register controllers
const controllers = requireAll({
    dirname: path.resolve(__dirname, 'src/controllers'),
    filter: /(.+)\.js$/,
})

_.each(controllers, (controller) => {
   
    _.each( 
      Object.values(controller), 
      ({ path, method, resolver: _resolver, requireAuth }) => {
    
        let methodAuth = true;   
        if(requireAuth === false) {  methodAuth = false; }
       
        if (!path) throw new Error('Invalid controller path');
        const resolver = async (req, res) => {
          const requestor = req.user
          try {
            const { _method: method, ...rawInput } = Object.assign(
              {},
              req.params,
              req.query,
              req.body
            )
            const options = { method }
            const ctx = context.createContext({ req, res })
            const data = await _resolver(options, rawInput, ctx)
            res.json(data)
          } catch (err) {
            console.error(err)
            res.status(err.status || 500)
            res.json({ error: err.message, details: err.details })
          }
        }
        if (methodAuth) {
          app[method](path, jwt.decode, resolver)
        } else {  
          app[method](path, resolver)
        }
      }
    );
     
 });

 
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("All ready! Server listening at", addr.address + ":" + addr.port);
});
