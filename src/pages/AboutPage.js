import { useRef } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardLink,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";

function SmallCard({ title, text, link }) {
  const _blank = useRef("_blank")
  return (
    <Card className="bg-teal-100">
      <CardBody>
        <CardTitle className="h3">{title}</CardTitle>
      </CardBody>
      <CardBody>
        <CardText className="p-2">{text}</CardText>
        <CardText className="p-2">
          <CardLink
            className="text-blue-600 rounded border-black border-2 p-2"
            href={link}
            target={_blank}
          >
            {link}
          </CardLink>
        </CardText>
      </CardBody>
    </Card>
  );
}

export default function AboutPage() {
  return (
    <Container className="pb-1">
      <Row className="pb-2">
        <Card className="bg-teal-700 text-black">
          <Col className="h1">About Me</Col>
        </Card>
      </Row>
      <Row className="pb-2">
        <Col>
          <SmallCard
            title={"Website"}
            text={"Visit me!"}
            link={"https://www.antonyip.com"}
          ></SmallCard>
        </Col>
        <Col>
          <SmallCard
            title={"Twitter"}
            text={"A not-very active account!"}
            link={"https://twitter.com/msgAnton"}
          ></SmallCard>
        </Col>
        <Col>
          <SmallCard
            title={"Flipside Bounties"}
            text={"Look at my best work!"}
            link={"https://flipsidecrypto.xyz/Antonidas"}
          ></SmallCard>
        </Col>
      </Row>
      <Row>
        <Col>
          <SmallCard
            title={"MetricsDAO"}
            text={"Bounty Provider"}
            link={"https://metricsdao.xyz"}
          ></SmallCard>
        </Col>
      </Row>
    </Container>
  );
}
