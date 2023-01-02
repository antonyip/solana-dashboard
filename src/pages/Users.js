import { Row, Col, Container, Card } from "reactstrap";

import GenerateChart from "../components/GenerateChart";
import { CHARTCOLORS } from "../constants/ChartColors";

import { myQuery as GetWeeklyNewSenderQuery } from "../api/GetWeeklyNewSenderQuery";
import { myQuery as GetAccountAgesQuery } from "../api/GetAccountAgesQuery";
import { myQuery as GetWeeklyActiveSenderQuery } from "../api/GetWeeklyActiveSenderQuery";

export default function Users() {
  return (
    <Container>
      <Row className="pb-2">
        <Card className="bg-teal-700 text-black">
          <Col className="h1">Users</Col>
        </Card>
      </Row>
      <Row className="pb-2">
        <Col xs={12} md={8}>
          <GenerateChart
            chartQuery={GetWeeklyNewSenderQuery}
            chartType="MultiAxisLineBarChart"
            chartTitle="Total/New Senders Per Week"
            chartFlipYData={true}
            chartYAxisLabel={["Total Senders", "New Senders Per Week"]}
            chartBackgroundColors={[CHARTCOLORS.BLACK, CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
        <Col xs={12} md={4}>
          <GenerateChart
            chartQuery={GetAccountAgesQuery}
            chartType="PieChart"
            chartTitle="Wallet Age"
            chartYAxisLabel={["1 Day", "1 Week", "1 Month", "1 Year", "2 Years", "Others"]}
            chartBackgroundColors={[
              CHARTCOLORS.COLOR1,
              CHARTCOLORS.COLOR2,
              CHARTCOLORS.COLOR3,
              CHARTCOLORS.COLOR4,
              CHARTCOLORS.COLOR5,
              CHARTCOLORS.BLACK,
            ]}
          ></GenerateChart>
        </Col>
      </Row>
      <Row className="pb-2">
        <Col className="rounded" xs={12} md={6}>
          <GenerateChart
            chartQuery={GetWeeklyActiveSenderQuery}
            chartType="TimeBarChart"
            chartTitle="Active Senders Per Week"
            //chartYAxisLabel={["Active Senders Per Week"]}
            chartBackgroundColors={[CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
        <Col className="rounded" xs={12} md={6}>
          <GenerateChart
            chartQuery={GetWeeklyNewSenderQuery}
            chartType="TimeBarChart"
            chartTitle="New Wallets Per Week"
            //chartYAxisLabel={["New Wallets Per Week"]}
            chartBackgroundColors={[CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
      </Row>
    </Container>
  );
}
