const PortafolioController = require("../controllers/portafolio.controller");
const UserController = require("../controllers/user.controllers");

const {authenticate} = require("../config/jwt.config");

module.exports = app => {
    
    app.post("/api/portafolios", authenticate, PortafolioController.create_portafolio);

    app.get("/api/portafolios", authenticate, PortafolioController.get_all);

    app.get("/api/portafolios/:id", authenticate, PortafolioController.get_portafolio);

    app.put("/api/portafolios/:id", authenticate, PortafolioController.update_portafolio);

    app.delete("/api/portafolios/:id", authenticate, PortafolioController.delete_portafolio);

    app.post("/api/register", UserController.register);

    app.post("/api/login", UserController.login);

    app.get("/api/logout", UserController.logout);

    app.get("/api/home");
}