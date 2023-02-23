import LineGraph from "components/lineGraph";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

function Graph() {
  return (
    <>
      <div className="graphPage">
        <div className="dataBar">Upload Data Bar</div>

        <div className="graphsContainer">
          <LineGraph />
        </div>
      </div>
    </>
  );
}

export default withPageAuthRequired(Graph);
