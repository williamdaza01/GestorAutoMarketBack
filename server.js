const express = require("express");
const app = express();

const admin = require("firebase-admin");
const credentials = require("./gestion-de-inventario-f637f-firebase-adminsdk-rbupd-e99f044b86.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

const db = admin.firestore();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
