import React from "react";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import EmptyChart from "./EmptyChart";

import SQLButton from "./SQLButton";
import JSONButton from "./JSONButton";
import { Container, Row, Col, Spinner } from "reactstrap";

ChartJS.register(
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement
);

const template = (
  finalChart,
  chartTitle,
  chartQuery,
  chartJsonData,
  needSpinner
) => {
  return (
    <Container className="bg-teal-100 rounded-4 p-4">
      <Row className="flex">
        <Col className="flex basis-1/2 text-left h4">{chartTitle}</Col>
        <Col className="flex justify-start">
          {needSpinner ? <Spinner /> : <></>}
        </Col>
        <Col className="flex justify-end">
          <SQLButton sqlQuery={chartQuery}></SQLButton>
          <JSONButton
            jsonData={chartJsonData || { error: "Chart Not Loaded Yet..." }}
          ></JSONButton>
        </Col>
      </Row>
      <Row>{finalChart}</Row>
    </Container>
  );
};

export default function PieChartV2({
  chartDataLoad,
  chartTitle,
  chartYAxisLabel,
  chartBackgroundColors,
  chartQuery,
}) {
  if (!chartDataLoad) {
    return template(<EmptyChart />, chartTitle, chartQuery, null, true);
  }

  //console.log(chartBackgroundColors)

  const yAxisLabel = chartYAxisLabel;
  const chartYAxisData = chartDataLoad.rows;

  const dataSets = [];
  for (let index = 0; index < chartYAxisData.length; index++) {
    const yData = chartYAxisData[index];
    //const yLabel = chartYAxisLabel[index];
    //const yColor = chartBackgroundColors[index];
    dataSets.push({
      //label: yLabel,
      data: yData,
      backgroundColor: chartBackgroundColors,  
    });
  }
  const dataV2 = {
    labels: chartYAxisLabel,
    datasets: dataSets,
    backgroundColor: chartBackgroundColors,
  };

  const optionsV2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: yAxisLabel[0] ? true : false,
      },
      title: {
        display: false,
        text: chartTitle,
      },
    },
  };

  return template(
    <Pie options={optionsV2} data={dataV2} />,
    chartTitle,
    chartQuery,
    chartDataLoad,
    false
  );
}
