const express = require('express') ;
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get('/test', (req, res) => {
    res.send({
        status: "success",
        message: "you're briliant people."
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`);
})