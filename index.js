const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

//METODOS HTTP: GET, POST, PUT, DELETE
//QUERY PARAMS: request.query (FILTROS, ORDENACAO, PAGINACAO)
//ROUTE PARAMS: request.params (identificar um recurso/alteração/remoção)
//BODY: request.body (put/post) (dados para criacao e alteracao de registros)

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.get('/players', (request, response)=>{
    console.log(request.query);
    response.json({mensagem: "/players"})
})

app.delete("/players/:id", (request, response)=>{
    console.log(request.params);
    response.json(request.params);
})

app.post("/players", (request, response)=>{
    console.log(request.body);
    response.json(request.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
