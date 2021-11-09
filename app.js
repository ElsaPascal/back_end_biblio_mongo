const express = require('express');
const mongoose = require ('mongoose');

const app = express();

app.use(express.json());

const musiquesRoutes = require('./routes/musiques-routes');

app.use('/api/musiques', musiquesRoutes);

app.use((error, req, res, next) => {
    res.status(error.code || 500);
    res.json({message: error.message || 'Une erreur non gérée est survenue'});
});

const uri = "mongodb+srv://GretaUser:FhC9BTNvsLeodBLi@monmongo.vbkxr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


//const options = {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true};
const options = {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect(uri,options)
.then(() => {
    app.listen(5000, console.log ('server running'));
})
.catch (err => {
    console.log(err);
})
//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