const ethers = require('ethers');

//voy a usar de prueba la red Goerli.

async function main() {
    const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/');
    const wallet = new ethers.Wallet('aca va la clave privada', provider);

};