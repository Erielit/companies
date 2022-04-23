const { Router } = require("express");

const router = Router();
const {
  findAll,
  save,
  update,
  deleteCompany,
} = require("../controllers/CompanyController");

router.get("/", findAll);

router.post("/", save);

router.put("/", update);

router.delete("/", deleteCompany);

module.exports = router;
