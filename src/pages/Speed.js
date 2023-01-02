import { Row, Col, Container, Card } from "reactstrap";
import GenerateChart from "../components/GenerateChart";
import { CHARTCOLORS } from "../constants/ChartColors";
import { myQuery as GetAverageBlockSpeedWeeklyQuery } from "../api/GetAverageBlockSpeedWeeklyQuery";
import { myQuery as GetAverageFeeWeeklyQuery } from "../api/GetAverageFeeWeeklyQuery";

export default function Speed() {
  return (
    <Container>
      <Row className="pb-2">
        <Card className="bg-teal-700 text-black">
          <Col className="h1">Speed</Col>
        </Card>
      </Row>
      <Row className="pb-2">
        <Col className="rounded" xs={12} md={6}>
          <GenerateChart
            chartQuery={GetAverageBlockSpeedWeeklyQuery}
            chartType="TimeBarChart"
            chartTitle="Blocks Speed Per Week"
            //chartYAxisLabel={["Blocks Per Week"]}
            chartBackgroundColors={[CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
        <Col className="rounded" xs={12} md={6}>
          <GenerateChart
            chartQuery={GetAverageFeeWeeklyQuery}
            chartType="MultiAxisLineBarChart"
            chartTitle="Protocol Earnings Per Week"
            chartYAxisLabel={[
              "Total Fees Paid Per Week",
              "Average Fees Paid Per Tx",
            ]}
            chartBackgroundColors={[CHARTCOLORS.BLACK, CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
      </Row>
    </Container>
  );
}
