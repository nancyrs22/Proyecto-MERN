const PortafolioController = require("../controllers/portafolio.controller");

module.exports = app => {
    
    app.post("/api/portafolios", PortafolioController.create_portafolio);

    app.get("/api/portafolios", PortafolioController.get_all);

    app.get("/api/portafolios/:id", PortafolioController.get_portafolio);

    app.put("/api/portafolios/:id", PortafolioController.update_portafolio);

    app.delete("/api/portafolios/:id", PortafolioController.delete_portafolio);
}