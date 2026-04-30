const express = require("express")
const clienteRoutes = ("./routes/clienteRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//Rota raiz:
app.get("/", (req, res) => {
    res.json({
        mensagem: "API de clientes",
        versao: "1.0.0",
        endpoints: {
            listarTodos: "GET /clientes",
            buscarPorId: "GET /clientes/:id",
        }
    })

})
app.use("/", "/clientes", clienteRoutes);

app.use((req, res) =>{
    res.status(404).json({
        sucesso: false,
        mensagem: "Rota não encontrada",
    })
})

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`)
})

module.exports = app;
