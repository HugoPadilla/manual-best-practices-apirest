const express = require('express');
const v1Router = require("./v1/routes");

const app = express();
const PORT = process.env.PORT || 3000;

// For testing purposes
app.use("/api/v1", v1Router);

app.listen(PORT, () => {
    console.log('Api is listening on port: ' + PORT);
})