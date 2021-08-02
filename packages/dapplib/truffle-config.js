require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth shift pupil heavy entire outer gesture'; 
let testAccounts = [
"0x95d6ffadadfe8a20825ff8ab181a258215004a81fa86360258c97813de48097c",
"0x7f71523a61bf5e2e73c2a10556ba7ff1f5e637abfb23ae101c9a466abd533ffe",
"0x482ff82696541cd11079574dc60b0d9fd9b751c8049f6327fcce7713a0a3f5b5",
"0xa38e9e1dc47aa30a4642c430505017212667d51a307c6c98b44a975c695474e5",
"0x83e5b366c253554b98bfdfc5cae11bda0c8e868c83e92d2f4f621d1cef670bfe",
"0x7b3a7bead5b41e9d6d67c9e40ad99d1e78a5799d80a423f6653d8cbfe8a40805",
"0x150d92e882d51c7dffb980cf3602fbacc6c9eb03ffbaa4a7cf7ec904701f02fb",
"0xad32a2ab7bd1ed484196ec18824707dbf3b661659790d43930ebf66abd375a1f",
"0x2dbaa253495e81ba7ff5976512710288d6ba763fa56a95afa1b56e48b24287f9",
"0xeb4666b5ff8858806ab4c28fa638ea31232c6dc2c569ad116818f5ea6caea221"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

