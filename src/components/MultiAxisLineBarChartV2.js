import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import EmptyChart from "./EmptyChart";

import SQLButton from "./SQLButton";
import JSONButton from "./JSONButton";
import { Container, Row, Col, Spinner } from "reactstrap";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
  LineController,
  BarController
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
        <Col className="flex justify-start">{needSpinner ? <Spinner /> : <></>}</Col>
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

export default function MultiAxisLineBarChartV2({
  chartDataLoad,
  chartTitle,
  chartFlipYData,
  chartYAxisLabel,
  chartBackgroundColors,
  chartQuery,
}) {
  if (!chartDataLoad) {
    return template(<EmptyChart />, chartTitle, chartQuery, null, true);
  }

  if (chartDataLoad.error)
  {
    return <div>Something went wrong with the query...</div>
  }

  //console.log(chartDataLoad);

  // extract the data into arrays
  const chartXAxisData = [];
  const chartY1AxisData = [];
  const chartY2AxisData = [];
  chartDataLoad.rows.forEach((element) => {
    chartXAxisData.push(element[0]);
    chartY1AxisData.push(element[1]);
    chartY2AxisData.push(element[2]);
  });

  // get y axis values
  var chartYAxisData = [chartY1AxisData, chartY2AxisData];
  if (chartFlipYData) {
    chartYAxisData = [chartY2AxisData, chartY1AxisData];
  }

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: false,
        text: chartTitle,
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  // x-axis
  const labels = chartXAxisData;
  // y-axis
  const dataSets = [];
  for (let index = 0; index < chartYAxisLabel.length; index++) {
    const yData = chartYAxisData[index];
    const yLabel = chartYAxisLabel[index];
    const yColor = chartBackgroundColors[index];
    var yType = "line";
    var yIndex = "y";
    if (index !== 0) {
      yIndex = yIndex + index.toString();
      yType = "bar";
    }
    dataSets.push({
      label: yLabel,
      data: yData,
      borderColor: yColor,
      backgroundColor: yColor,
      yAxisID: yIndex,
      type: yType,
    });
  }

  const data = {
    labels,
    datasets: dataSets,
  };

  return template(
    <Chart options={options} data={data} />,
    chartTitle,
    chartQuery,
    chartDataLoad,
    false
  );
}
