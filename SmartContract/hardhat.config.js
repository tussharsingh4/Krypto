require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/scZAPiXoQXm13fnVzLtDK-BOE12vPczY',
      accounts: ['3d3e7ca142420f6e02b9f9d83445f772aeebbacdfa138b3b221b852c8e912bc0'],
    },
  },
};