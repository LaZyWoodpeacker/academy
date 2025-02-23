import React, { FC } from "react";
import { IColor } from "../store/app.state";

interface IProps {
  colors: IColor[] | undefined;
  selectedColor: number | null;
  onSelectColor: (colorId: number) => void;
}

const ColorSelector: FC<IProps> = ({
  colors,
  selectedColor,
  onSelectColor,
}) => {
  return (
    <div className="color-selector">
      {colors?.map((color) => (
        <div
          className={`color-selector_color ${
            color.id === selectedColor ? "selected" : ""
          }`}
          key={color.id}
          onClick={() => onSelectColor(color.id)}
        >
          {color.name}
        </div>
      ))}
    </div>
  );
};

export default ColorSelector;
