import NumberWithCommas from "./NumberWithCommas"

export default function TransformTxs(data) {

    //console.log(data);

    data.chartName = data.chartTitle
    data.chartSource = data.chartQuery
    if (data.chartDataLoad)
    {
        data.chartValue = NumberWithCommas(data.chartDataLoad.rows[0][0])
    }

    return data;
}