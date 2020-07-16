import express from 'express';

const app = express();

app.get('/', (resquest, response)=>{
    return response.json({message: 'Fala aí, meu bom parça'});
});

app.listen(3000);