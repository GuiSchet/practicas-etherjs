const ethers = require('ethers');
require('dotenv').config();
//voy a usar de prueba la red Goerli.

async function main() {
    const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/');
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

};