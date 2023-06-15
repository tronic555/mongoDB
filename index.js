const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

app.set('port', process.env.PORT || 3000);

(async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,
            {
                useUnifiedTopology: true,
                useNewUrlParser:true
            }
        );

        console.log("conexion valida MONGODB");
        
    }catch(error){
        console.log(error);
    }
})();

app.listen(app.get('port'),() => {
    console.log(`puerto ${app.get('port')} activado`);
});