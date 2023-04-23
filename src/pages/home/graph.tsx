import GraphBase from "src/components/graphBase";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { getRandomColor } from "@/utils/graphingUtils";
import { ChangeEvent, useEffect, useState } from "react";

function createArrayFromRange(start: number, end: number): Array<number> {
  const rangeArr = [];
  for (let i = start; i < end + 1; i++) {
    rangeArr.push(i);
  }
  return rangeArr;
}

function makeY(
  x: Array<number>
): Array<{ data: Array<number>; color: string }> {
  return [
    x,
    x.map((i) => i ** 2),
    x.map((i) => i ** 0.5),
    x.map((i) => 9 + Math.sin(i)),
  ].map((dataOnly) => {
    return { data: dataOnly, color: getRandomColor() };
  });
}

function Graph() {
  const [x, setX] = useState<{ start: number; end: number }>({
    start: 0,
    end: 100,
  });

  const [y, setY] = useState<Array<{ data: Array<number>; color: string }>>([]);

  useEffect(() => {
    setY(makeY(createArrayFromRange(x.start, x.end)));
  }, [x]);

  return (
    <>
      <div className="graphPage">
        <div className="dataBar">
          <div>
            <input
              type="number"
              placeholder="x starts at"
              onChange={(e) =>
                setX({
                  start: parseInt(e.target.value),
                  end:
                    parseInt(e.target.value) > x.end
                      ? parseInt(e.target.value) + 1
                      : x.end,
                })
              }
            />
            <input
              type="number"
              placeholder="x ends at"
              onChange={(e) =>
                setX({
                  end: parseInt(e.target.value),
                  start:
                    parseInt(e.target.value) < x.start
                      ? parseInt(e.target.value) + 1
                      : x.start,
                })
              }
            />
          </div>
        </div>

        <div className="graphsContainer">
          <GraphBase xData={createArrayFromRange(x.start, x.end)} yDatas={y} />
        </div>
      </div>
    </>
  );
}

// export default withPageAuthRequired(Graph);
export default Graph;
