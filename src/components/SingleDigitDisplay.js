import { Container, Card, Row, Col, Spinner } from "reactstrap";
import SRCButton from "./SRCButton";

function SingleDigitDisplay({
  chartName,
  chartValue,
  chartPreValueText,
  chartSource,
  disableSource,
}) {
  return (
    <Card className="bg-teal-100 py-2 pb-2">
      <Container>
        <Row className="flex">
          <Col className="flex justify-left h4">
            {chartName} {!chartValue ? <Spinner></Spinner> : <></>}
          </Col>
          <Col className="flex justify-right justify-end">
            {disableSource ? (
              <></>
            ) : (
              <SRCButton
                className="bg-black text-white"
                srcLink={chartSource}
              ></SRCButton>
            )}
          </Col>
        </Row>
        <Row className="h5">
          <Col className="flex justify-start">
            {chartPreValueText ? chartPreValueText : ""}
            {chartValue}
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default SingleDigitDisplay;
