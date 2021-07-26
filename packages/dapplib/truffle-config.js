require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift regret soap arrow inflict arena equal gesture'; 
let testAccounts = [
"0x7a6a40746836c71204e714ccf476dd4b375d410dce220c85353028b44f018378",
"0x702235cf2c7d5649a275190274216b82c4628334da7554d5b344cddd9931567a",
"0x861aa14b03b5cd3d6b21879dd496e7a91f0a3df08ddd855fb3465c6bf9b6db0d",
"0x25fdc1b5e4df8ea19c6139f2c9fc7511817e137eef389479774a188bd6cf7ecf",
"0x7a550b492bfc1eed6ac3270cef4808d85750727663cc5e802fa3999f09e44110",
"0xaa80f3372225d0e02603233a484b0ac218ce81c48d36897419ff6a1f9a4903b1",
"0xfb2b83e96ace22ff4c8509655e52612fa8192ba5dd3166ed176b89f710ae64df",
"0x06d171a2d5d75bd929cc281a4bf961c3304ce37e35ec6018453ad1128852575d",
"0x9111c3f095a48c1e27fda9d713287c9463f055514b3a401dfdff6b532e482aab",
"0xbd89696d2b6ee14dffcb24edcfa9de5e4aff6f2fd0e9b719c92d17edf0c048a5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

