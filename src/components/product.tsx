import React, { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import products from "../store/app.state.ts";
import chart from "../store/chart.state.ts";
import ProductImage from "./productImage.tsx";
import ColorSelector from "./colorSelector.tsx";
import SizeSelector from "./sizeSelector.tsx";

const Product: FC = () => {
  const params = useParams();
  const id = Number(params.id);
  const [selectedColor, setSelectedColor] = useState(1);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  useEffect(() => {
    products.fetchById(id);
  }, [id]);

  const onSelectColor = (colorId) => {
    setSelectedSize(null);
    setSelectedColor(colorId);
  };

  const onSelectSize = (sizeId) => {
    setSelectedSize(sizeId);
  };

  const onAddToChart = () => {
    if (id && selectedColor && selectedSize)
      chart.addToChart({ id, selectedColor, selectedSize });
  };

  return (
    <div>
      {products.current?.name}
      <ProductImage
        images={
          products.current?.colors.find(({ id }) => id === selectedColor)
            ?.images
        }
      />
      <ColorSelector
        colors={products.current?.colors}
        onSelectColor={onSelectColor}
      />
      <SizeSelector
        sizes={
          products.current?.colors.find(({ id }) => id === selectedColor)?.sizes
        }
        selectedSize={selectedSize}
        sizesDetails={products.sizes}
        onSelectSize={onSelectSize}
      />
      <button onClick={onAddToChart}>Добавить в корзину</button>
    </div>
  );
};

export default observer(Product);
