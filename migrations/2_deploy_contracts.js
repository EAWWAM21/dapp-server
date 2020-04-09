const SimpleStorage = artifacts.require("SimpleStorage")
const TutorialToken = artifacts.require("TutorialToken")

module.exports = function (deployer) {
    deployer.deploy(SimpleStorage)
    deployer.deploy(TutorialToken)
}
