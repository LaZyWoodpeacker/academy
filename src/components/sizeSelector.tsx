import React, { FC } from "react";
import { ISize } from "../store/app.state";

interface IProps {
  sizes: number[] | undefined;
  selectedSize: number | null;
  onSelectSize: (sizeId: number) => void;
  sizesDetails: ISize[];
}

const SizeSelector: FC<IProps> = ({
  sizes,
  sizesDetails,
  onSelectSize,
  selectedSize,
}) => {
  return (
    <div className="size-selector">
      {sizesDetails?.map((size, idx) => (
        <>
          <div
            className={`size-selector_size ${
              size.id === selectedSize ? "selected" : ""
            } ${!sizes?.includes(size.id) ? "disabled" : ""}`}
            onClick={() => {
              if (sizes?.includes(size.id)) onSelectSize(size.id);
            }}
          >
            {size.label}
          </div>
        </>
      ))}
    </div>
  );
};

export default SizeSelector;
