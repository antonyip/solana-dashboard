import { myQuery as GetWeeklyProtocolFeesQuery } from "../api/GetWeeklyProtocolFeesQuery";
import { myQuery as GetTransactionsWeeklyQuery } from "../api/GetTransactionsWeeklyQuery";
import { Row, Col, Container, Card } from "reactstrap";
import GenerateChart from "../components/GenerateChart";
import { CHARTCOLORS } from "../constants/ChartColors";

export default function Fees() {
  return (
    <Container>
      <Row className="pb-2">
        <Card className="bg-teal-700 text-black">
          <Col className="h1">Protocol Fees</Col>
        </Card>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <GenerateChart
            chartQuery={GetWeeklyProtocolFeesQuery}
            chartType="MultiAxisLineBarChart"
            chartTitle="Weekly Protocol Earnings"
            chartYAxisLabel={["Weekly Earnings (ETH)", "Average Tx Fee in GWEI"]}
            chartBackgroundColors={[CHARTCOLORS.BLACK, CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
        <Col xs={12} md={6}>
          <GenerateChart
            chartQuery={GetTransactionsWeeklyQuery}
            chartType="TimeBarChart"
            chartTitle="Transactions Per Week"
            //chartYAxisLabel=[""]
            chartBackgroundColors={[CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
      </Row>
    </Container>
  );
}
