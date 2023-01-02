import { myQuery as GetOpNFTWeeklySalesQuery } from "../api/GetOpNFTWeeklySalesQuery";

import { Row, Col, Container, Card } from "reactstrap";
import GenerateChart from "../components/GenerateChart";
import { CHARTCOLORS } from "../constants/ChartColors";

export default function NFT() {
  return (
    <Container>
      <Row className="pb-2">
        <Card className="bg-teal-700 text-black">
          <Col className="h1">NFT</Col>
        </Card>
      </Row>
      <Row>
        <Col xs={12} md={6}>
        <GenerateChart
            chartQuery={GetOpNFTWeeklySalesQuery}
            chartType="LineBarChart"
            chartTitle="NFT Sales (USD)"
            chartFlipYData={true}
            chartYAxisLabel={["Average Weekly Sales","Weekly Sales"]}
            chartBackgroundColors={[CHARTCOLORS.BLACK, CHARTCOLORS.COLOR1]}
          ></GenerateChart>
        </Col>
      </Row>
    </Container>
  );
}
