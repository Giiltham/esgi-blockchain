const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("CedricTokenModule", (m) => {
  const token = m.contract("CedricToken", [1000000]);

  return { token };
});

module.exports = TokenModule;