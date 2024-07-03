const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const accountSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const accountModel = mongoose.model("account", accountSchema, "account");

// Default admin account
async function createDefaultAdmin() {
  const adminExists = await accountModel.findOne({ role: "admin" });
  if (!adminExists) {
    await accountModel.create({
      username: "admin",
      password: bcrypt.hashSync("admin", 10),
    });
  }
}

createDefaultAdmin().catch((err) =>
  console.error("Failed to create default admin:", err)
);

module.exports = accountModel;

