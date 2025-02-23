import React from "react";

const Loading = ({ on }) => {
  if (!on) return;
  return (
    <div className="loading-placeholder">
      <div className="loading-placeholder_spinner">
        <img src="/icons/spinner.svg" />
      </div>
    </div>
  );
};

export default Loading;
