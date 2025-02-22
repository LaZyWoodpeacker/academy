import React from "react";
import { observer } from "mobx-react-lite";
import products from "../store/app.state.ts";
import chart from "../store/chart.state.ts";

const Chart = () => {
  return (
    <div>
      {chart.selectedPositions.map((e, idx) => (
        <div>
          <button onClick={() => chart.remove(idx)}>Удалить</button>
          <pre>{JSON.stringify(e, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

export default observer(Chart);
