import express from 'express';
import '@controllers/UsersController';

const app = express();

app.get('/', (resquest, response)=>{
    return response.json({message: 'Fala aí, meu bom parça'});
});

app.listen(3000);