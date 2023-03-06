import ScatterPlot from "src/components/scatterPlot";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

function Graph() {
  // This data will be picked from Upload data bar component by the csv file selected
  // When this data is picked we will fire an event that our current Graph will correspond to
  const x = Array.from({ length: 100 }, (_, i) => i + 1);
  const y = [
    x,
    x.map((i) => i ** 2),
    x.map((i) => i ** 0.5),
    x.map((i) => 9 + Math.sin(i)),
  ];

  return (
    <>
      <div className="graphPage">
        <div className="dataBar">Choose X range, and y function</div>

        <div className="graphsContainer">
          <ScatterPlot xData={x} yDatas={y} />
        </div>
      </div>
    </>
  );
}

export default withPageAuthRequired(Graph);
