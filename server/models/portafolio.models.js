const mongoose = require("mongoose");

const EsquemaPortafolio = new mongoose.Schema({

    nombre: {
        type: String,
        required: [true, "Nombre es obligatorio."],
        minlength: [2,"El nombre debe tener al menos dos caracteres."]
    },

    apellido: {
        type: String,
        required: [true, "Apellido es obligatorio."],
        minlength: [2,"El apellido debe tener al menos dos caracteres."]
    },

    imagen:String,

    cargo:{
        type: String,
        required: [true, "Cargo es obligatorio."],
        minlength: [2,"El cargo debe tener al menos dos caracteres."]
    },

    email:{
        type: String,
        required: [true, "E-mail obligatorio"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Ingrese email válido"
        },
        unique: true
    },

    telefono:{
        type: String,
        required: [true, "Celular/Telefono es obligatorio."]
    },

    ubicacion:{
        type: String,
        required: [true, "Ubicacion es obligatorio."],
        minlength: [2,"La ubicacion debe tener al menos dos caracteres."]
    },

    enlaces: String,

    listaEn: {
        type:Array
    },

    titulo:{
        type: String
    },

    listaTi:
    {
        type:Array
    },

    contenido:{
        type: String
    },

    listaCon:{
        type: Array
    }
}, {timestamps: true, versionKey: false})

const Portafolio = mongoose.model("portafolios", EsquemaPortafolio);
module.exports = Portafolio;