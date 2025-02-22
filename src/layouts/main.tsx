import React, { FC, ReactNode } from "react";
import ChartButton from "../components/chartButton.tsx";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="main-layout">
      <div>
        <ChartButton />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
