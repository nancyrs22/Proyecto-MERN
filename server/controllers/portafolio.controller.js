const Portafolio = require("../models/portafolio.models");

module.exports.get_all = (req, res) => {
    Portafolio.find().collation({locale:"en"}).sort({nombre: 1})
        .then(portafolios => res.json(portafolios))
        .catch(err => res.status(400).json(err));
}

module.exports.create_portafolio = (req, res) => {
    Portafolio.create(req.body)
        .then(portafolio => res.json(portafolio))
        .catch(err=> res.status(400).json(err))
}

module.exports.get_portafolio = (req, res) => {
    Portafolio.findOne({_id: req.params.id})
        .then(portafolio => res.json(portafolio))
        .catch(err => res.status(400).json(err));
}

module.exports.update_portafolio = (req, res) => {
    Portafolio.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
        .then(portafolio => res.json(portafolio))
        .catch(err => res.status(400).json(err));
}

module.exports.delete_portafolio = (req,res) => {
    Portafolio.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
}