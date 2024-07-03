var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
const accountModel = require("../models/account");

router.get("/", async (req, res) => {
  const accounts = await accountModel.find();
  res.json(accounts);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const account = await accountModel.findOne({
    username,
  });
  if (!account) {
    return res.json({ message: "Account not found" });
  }
  if (!bcrypt.compareSync(password, account.password)) {
    return res.json({ message: "Invalid password" });
  }
  res.json(account);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const account = await accountModel.findById(id);
  res.json(account);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  const updatedAccount = await accountModel.findByIdAndUpdate(
    id,
    { username, password: hashPassword },
    { new: true }
  );
  res.json(updatedAccount);
});

module.exports = router;


