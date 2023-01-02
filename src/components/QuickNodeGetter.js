import axios from 'axios'

export default async function QuickNodeGetter() {
    const res = await axios.post(
        "https://powerful-indulgent-night.optimism.discover.quiknode.pro/49f2256db16cf52224e9488a33bdc5f2adf7c05d/",
        { method: "eth_blockNumber", params: [], id: 1, jsonrpc: "2.0" }
      );
}


