import React, { FC } from "react";
import { IColor } from "../store/app.state";

interface IProps {
  colors: IColor[] | undefined;
  onSelectColor: (colorId: number) => void;
}

const ColorSelector: FC<IProps> = ({ colors, onSelectColor }) => {
  return (
    <div className="color-selector">
      {colors?.map((color, idx) => (
        <button key={color.id} onClick={() => onSelectColor(color.id)}>
          {color.name}
        </button>
      ))}
    </div>
  );
};

export default ColorSelector;
