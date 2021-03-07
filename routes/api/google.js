const router = require("express").Router();
 const googleController = require("../../controllers/googlecontroller");

 router
   .route("/")
   .get(googleController.findAll);

 module.exports = router;