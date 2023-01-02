import { Row, Col, Container, Card } from "reactstrap";

import GenerateChart from "../components/GenerateChart";
import { CHARTCOLORS } from "../constants/ChartColors";

import { myQuery as GetTokenPriceQuery } from "../api/GetTokenPriceQuery";
import { myQuery as GetBlocksWeeklyQuery } from "../api/GetBlocksWeeklyQuery";
import { myQuery as GetNumTxsQuery } from "../api/GetNumTxsQuery";


import GenerateSingleDigitDisplay from "../components/GenerateSingleDigitDisplay";
import TransformCoinGeckoPrice from "../converters/TransformCoinGeckoPrice";
import TransformLatestBlock from "../converters/TransformLatestBlock";
import TransformTxs from "../converters/TransformTxs";

export default function Index() {
  return (
    <Container className="pb-1">
      <Row className="pb-2">
        <Card className="bg-teal-700 text-black">
          <Col className="h1">Summary</Col>
        </Card>
      </Row>
      <Row className="pb-2">
        <Col xs={12} md={4}>
          <GenerateSingleDigitDisplay
            chartSource="https://api.coingecko.com/api/v3/coins/solana?tickers=true&market_data=true&sparkline=true"
            chartDataTransformer={TransformCoinGeckoPrice}
            chartTitle={"Sol Price"}
            chartPreValueText={"$ "}
            chartToDisplaySource={true}
          ></GenerateSingleDigitDisplay>
        </Col>
        <Col xs={12} md={4}>
          <GenerateSingleDigitDisplay
            chartSource="https://public-api.solscan.io/block/last?limit=1"
            chartSourceParams={{
              jsonrpc: "2.0",
              id: 1,
              method: "getBlockHeight",
            }}
            //chartAxiosGetter="POST"
            chartDataTransformer={TransformLatestBlock}
            chartTitle={"Blocks"}
            chartPreValueText={"Block "}
            chartToDisplaySource={true}
          ></GenerateSingleDigitDisplay>
        </Col>
        <Col xs={12} md={4}>
          <GenerateChart
            chartQuery={GetNumTxsQuery}
            chartDataTransformer={TransformTxs}
            chartSource={"flipside"}
            chartType="SingleDigitChart"
            chartTitle={"Transactions"}
            chartPreValueText={"Txs "}
            chartToDisplaySource={true}
          ></GenerateChart>
        </Col>
      </Row>
      <Row className="pb-2">
        <Col xs={12} md={6}>
          <GenerateChart
            chartQuery={GetTokenPriceQuery}
            chartType="LineBarChart"
            chartTitle="Weekly Solana Price"
            chartFlipYData={true}
            chartYAxisLabel={["Average Sol Price", "Weekly Price"]}
            chartBackgroundColors={[CHARTCOLORS.BLACK, CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
        <Col xs={12} md={6}>
          <GenerateChart
            chartQuery={GetBlocksWeeklyQuery}
            chartType="TimeBarChart"
            chartTitle="Solana Blocks Per Week"
            //chartYAxisLabel={["Weekly Submissions"]}
            chartBackgroundColors={[CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
      </Row>
    </Container>
  );
}
