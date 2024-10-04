const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://impactadb:impactadb@cluster0.jhgsr.mongodb.net/", {
    // As opções abaixo não são mais necessárias
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.log("Error connecting to MongoDB", error);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
