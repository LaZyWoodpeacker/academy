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
          <button
            onClick={() => onSelectSize(size.id)}
            disabled={!sizes?.includes(size.id)}
          >
            {size.label}
          </button>
          {size.id === selectedSize && <h1>Выбран</h1>}
        </>
      ))}
    </div>
  );
};

export default SizeSelector;
