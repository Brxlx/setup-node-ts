import express from 'express';
import '@controllers/UsersController';

const app = express();
console.log('Teste');
app.get('/', (resquest, response) => response.json({ message: 'Fala aí, meu bom parça' }));

app.listen(3000);
