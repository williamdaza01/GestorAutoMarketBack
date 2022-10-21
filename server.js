const { Router } = require("express");
const express = require("express");
const app = express();
const router = Router();

const admin = require("firebase-admin");
const credentials = require("./firebase.json");

//Credenciales de db
admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

//Middleware
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//Inicializacion de bd
const db = admin.firestore();

//Peticiones
//Sede
//Get
app.get('/sedes', async (req, res) => {
    const getSede = await db.collection("Sedes").get();
    const sede = getSede.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    res.send(sede)
});

//Post
app.post('/sedes', async(req, res) => {
    const data = req.body;
    const postSede = await db.collection("Sedes").add(data);
    res.send("Agregado con exito");
});

//Delete
app.delete('/sedes/:id', async(req, res) => {
    const delSede = await db.collection("Sedes").doc(req.params.id).delete();   
    res.send("Eliminado con exito");
})

//Put
app.put('/sedes/:id', async(req, res) => {
    console.log(req.body);
    const uptSede = await db.collection("Sedes").doc(req.params.id).update(req.body);   
    res.send("Actualizado con exito");
})

//Repuestos
//Get
app.get('/repuestos', async (req, res) => {
    const getSede = await db.collection("Repuestos").get();
    const sede = getSede.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    res.send(sede)
});

//Post
app.post('/repuestos', async(req, res) => {
    const data = req.body;
    const postSede = await db.collection("Repuestos").add(data);
    res.send("Agregado con exito");
});

//Delete
app.delete('/repuestos/:id', async(req, res) => {
    const delSede = await db.collection("Repuestos").doc(req.params.id).delete();   
    res.send("Eliminado con exito");
})

//Put
app.put('/repuestos/:id', async(req, res) => {
    console.log(req.body);
    const uptSede = await db.collection("Repuestos").doc(req.params.id).update(req.body);   
    res.send("Actualizado con exito");
})

//Marcas
app.get('/marcas', async (req, res) => {
    const getSede = await db.collection("MarcasCarros").get();
    const sede = getSede.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    res.send(sede)
});

//Post
app.post('/marcas', async(req, res) => {
    const data = req.body;
    const postSede = await db.collection("MarcasCarros").add(data);
    res.send("Agregado con exito");
});

//Delete
app.delete('/marcas/:id', async(req, res) => {
    const delSede = await db.collection("MarcasCarros").doc(req.params.id).delete();   
    res.send("Eliminado con exito");
})

//Put
app.put('/marcas/:id', async(req, res) => {
    console.log(req.body);
    const uptSede = await db.collection("MarcasCarros").doc(req.params.id).update(req.body);   
    res.send("Actualizado con exito");
})

//Modelos
app.get('/modelos', async (req, res) => {
    const getSede = await db.collection("ModeloCarros").get();
    const sede = getSede.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    res.send(sede)
});

//Post
app.post('/modelos', async(req, res) => {
    const data = req.body;
    const postSede = await db.collection("ModeloCarros").add(data);
    res.send("Agregado con exito");
});

//Delete
app.delete('/modelos/:id', async(req, res) => {
    const delSede = await db.collection("ModeloCarros").doc(req.params.id).delete();   
    res.send("Eliminado con exito");
})

//Put
app.put('/modelos/:id', async(req, res) => {
    console.log(req.body);
    const uptSede = await db.collection("ModeloCarros").doc(req.params.id).update(req.body);   
    res.send("Actualizado con exito");
})

//Clientes

//Empleados

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
