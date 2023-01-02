import axios from "axios";
import { useEffect, useState } from "react";
import SingleDigitDisplay from "./SingleDigitDisplay";

export default function GenerateSingleDigitDisplay({
  chartSource,
  chartSourceParams,
  chartAxiosGetter,
  chartDataTransformer,
  chartTitle,
  chartPreValueText,
  chartToDisplaySource,
}) {
  const [queryResult, setQueryResult] = useState();

  useEffect(() => {
    if (chartAxiosGetter === "POST"){
      axios.post(chartSource, chartSourceParams).then((res) => {
        setQueryResult(chartDataTransformer(res.data));
      })
    }
    else {
      axios.get(chartSource).then((res) => {
        setQueryResult(chartDataTransformer(res.data));
      })
    }
    
  }, [chartSource, chartDataTransformer, chartAxiosGetter, chartSourceParams]);

  return (
    <SingleDigitDisplay
      chartName={chartTitle}
      chartSource={chartSource}
      chartPreValueText={chartPreValueText}
      chartValue={queryResult}
      disableSource={!chartToDisplaySource}
    ></SingleDigitDisplay>
  );
}
