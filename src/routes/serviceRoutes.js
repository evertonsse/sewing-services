const createService = require("../service/createService");
const express = require("express");
const selectService = require("../service/selectService");
const selectServices = require("../service/selecAllServices");
const serviceRoutes = express.Router();
const deleteService = require("../service/deleteService");
const updateService = require("../service/updateService");

//create service
serviceRoutes.post("/service", (request, response) => {
  createService(request, response);
});

// get service
serviceRoutes.get("/service/", (request, response) => {
  selectService(request, response);
});

//get all services
serviceRoutes.get("/services", (request, response) => {
  selectServices(request, response);
});

//delete service
serviceRoutes.delete("/service", (request, response) => {
  deleteService(request, response);
});

serviceRoutes.put("/service", (request, response) => {
  updateService(request, response);
});
module.exports = serviceRoutes;
