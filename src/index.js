import express, { request, response } from 'express';
const app = express();
app.use(express.json());

app.get('/', (request, response) => {
return response.json('OK');

});

let user = []

app.post('/', (request, response) => {
    let infirequest
})


app.listen(8080, () => console.log("Servidor iniciado"));