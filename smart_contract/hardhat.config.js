require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/A5kKsXMw7nAi_QNoSVWoM95l67cLPmQU',
      accounts: [ '75c82a4168a458afff2feff0fc1a7727d9017367d116475686c7fcfceff9b321' ]
    }
  }
}