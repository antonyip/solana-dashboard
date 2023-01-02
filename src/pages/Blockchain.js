import { Row, Col, Container, Card } from "reactstrap";
import GenerateChart from "../components/GenerateChart";
import { CHARTCOLORS } from "../constants/ChartColors";

import { myQuery as GetBlocksWeeklyQuery } from "../api/GetBlocksWeeklyQuery";
import { myQuery as GetTransactionsWeeklyQuery } from "../api/GetTransactionsWeeklyQuery";
import { myQuery as GetProtocolSuccessRateQuery } from "../api/GetProtocolSuccessRateQuery";

export default function Blockchain() {
  return (
    <Container className="pb-1">
      <Row className="pb-2">
        <Card className="bg-teal-700 text-black">
          <Col className="h1">Blockchain</Col>
        </Card>
      </Row>
      <Row className="pb-2">
        <Col className="rounded" xs={12} md={6}>
          <GenerateChart
            chartQuery={GetBlocksWeeklyQuery}
            chartType="TimeBarChart"
            chartTitle="Blocks Per Week"
            //chartYAxisLabel={["Blocks Per Week"]}
            chartBackgroundColors={[CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
        <Col className="rounded" xs={12} md={6}>
          <GenerateChart
            chartQuery={GetTransactionsWeeklyQuery}
            chartType="TimeBarChart"
            chartTitle="Transactions Per Week"
            //chartYAxisLabel={["Transactions Per Week"]}
            chartBackgroundColors={[CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
      </Row>
      <Row className="pb-2">
        <Col className="rounded" xs={12} md={6}>
          <GenerateChart
            chartQuery={GetProtocolSuccessRateQuery}
            chartType="LineBarChart"
            chartTitle="Transaction Success Rate"
            chartFlipYData={true}
            chartYAxisLabel={["Average Success Rate", "Weekly Success Rate"]}
            chartBackgroundColors={[CHARTCOLORS.BLACK, CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
      </Row>
    </Container>
  );
}
