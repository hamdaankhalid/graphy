import LineGraph from "components/lineGraph";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

function Graph() {
  const x = Array.from({ length: 100 }, (_, i) => i + 1);
  const y = [x, x.map((i) => i ** 2), x.map((i) => i ** 0.5)];
  return (
    <>
      <div className="graphPage">
        <div className="dataBar">Upload Data Bar</div>

        <div className="graphsContainer">
          <LineGraph xData={x} yDatas={y} />
        </div>
      </div>
    </>
  );
}

export default withPageAuthRequired(Graph);
