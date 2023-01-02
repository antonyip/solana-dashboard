function TransformCoinGeckoPrice(data) {

    // console.log(data);

    return data.market_data.current_price.usd
}

export default TransformCoinGeckoPrice;