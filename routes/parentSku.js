const express = require("express");
const parentController = require("../controllers/parentSku");
const { route } = require("./admin");

const router = express.Router();

router.get("/parent-skus", parentController.getIndex);

router.post("/add-parent", parentController.addParent);

router.put("/update-parent", parentController.updateParent);

router.delete("/delete-parent", parentController.deleteParent);

module.exports = router;
