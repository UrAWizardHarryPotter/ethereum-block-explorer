const axios = require('axios');

const INFURA_ENDPOINT = "https://mainnet.infura.io/v3/2efa7bef7da741e29462a12dacda23d8";

axios.post(INFURA_ENDPOINT, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBlockByNumber",
  params: [
    "latest", // latest block
    true  // retrieves the full transaction object in transactions array
  ]
}).then((response) => {
  console.log(response.data.result);
});