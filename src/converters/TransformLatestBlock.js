import NumberWithCommas from "./NumberWithCommas"

function TransformLatestBlock(data) {

    // console.log(data);

    return NumberWithCommas(parseInt(data[0].result.blockHeight))
}

export default TransformLatestBlock;