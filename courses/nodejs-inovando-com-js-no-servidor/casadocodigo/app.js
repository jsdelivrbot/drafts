let app = require("./config/express")();

app.listen(3000, () => {
    console.log("servidor rodando");
});