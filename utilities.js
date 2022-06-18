const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
  if (password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
};

module.exports = { encryptPassword };
