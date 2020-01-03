const Cloneable = artifacts.require("./thirdparty/Cloneable.sol");
const BatchVerifier = artifacts.require("./thirdparty/BatchVerifier.sol");

module.exports = function(deployer, network, accounts) {
  console.log("deploying to network: " + network);
  var deployer_ = deployer;

  // common deployment
  if (network != "live" && network != "live-fork") {
    deployer_
      .then(() => {
        return Promise.all([
          deployer.deploy(Cloneable),
          deployer.deploy(BatchVerifier)
        ]);
      })
      .then(() => {
        console.log(">>>>>>>> contracts deployed by deploy_thirdparty:");
        console.log("Cloneable:", Cloneable.address);
        console.log("BatchVerifier:", BatchVerifier.address);
        console.log("");
      });
  } else {
    const batchVerifier = "0x40598B41cc17a7E56dd72F415E8223aaCCA94cF7";
    console.log("BatchVerifier");
  }
};
