const WXTZ = "0xc9b53ab2679f573e480d01e0f49e2b5cfb7a3eab";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "etherlink-mainnet",
  wNativeAddress: WXTZ,
  v3: {
    // USDC/WXTZ 500
    wNativeStablePoolAddress: "0x508060a01f11d6a2eb774b55aeba95931265e0cc",
    stableIsToken0: true,
    factoryAddress: "0x093ccbaecb0e0006c8bffca92e9929d117fec583",
    startBlock: 1960368,
    stableCoins: [
      "0x2c03058c8afc06713be23e58d2febc8337dbfe6a", // USDT
      "0x796ea11fa2dd751ed01b53c372ffdb4aaa8f00f9", // USDC
    ],
    whitelistAddresses: [
      WXTZ,
      "0x2c03058c8afc06713be23e58d2febc8337dbfe6a", // USDT
      "0x796ea11fa2dd751ed01b53c372ffdb4aaa8f00f9", // USDC
      "0xbfc94cd2b1e55999cfc7347a9313e88702b83d0f", // WBTC
      "0xfc24f770f94edbca6d6f885e12d4317320bcb401", // WETH
      "0xaa40a1cc1561c584b675cbd12f1423a32e2a0d8c", // WBNB
      "0xe820995cd39b6e09eaa7e4e16337184b4a61b644", // WAVAX
      "0xbbd1f50a212357067318a84179892684e1ac5181", // SHIB
    ],
    nonfungiblePositionManagerAddress: "0x34f957BCD46A9B0f8fCCdcc945004cE03ac6bDb5",
    nonfungiblePositionManagerStartBlock: 1960383,
    minETHLocked: 0,
  },
  v2: {
    factoryAddress: "0x3eebf549D2d8839E387B63796327eE2C8f64A0C4",
    startBlock: 1959559,
    wNativeStablePair0: "0x0000000000000000000000000000000000000000",
    wNativeStablePair1: "0x909bf608c09374c43cfb3249a1c737a51f2d91f9", // WXTZ-USDC
    whitelistAddresses: [
      WXTZ,
      "0x2c03058c8afc06713be23e58d2febc8337dbfe6a", // USDT
      "0x796ea11fa2dd751ed01b53c372ffdb4aaa8f00f9", // USDC
      "0xbfc94cd2b1e55999cfc7347a9313e88702b83d0f", // WBTC
      "0xfc24f770f94edbca6d6f885e12d4317320bcb401", // WETH
      "0xaa40a1cc1561c584b675cbd12f1423a32e2a0d8c", // WBNB
      "0xe820995cd39b6e09eaa7e4e16337184b4a61b644", // WAVAX
      "0xbbd1f50a212357067318a84179892684e1ac5181", // SHIB
    ],
    minETHLocked: 0,
  },
};
