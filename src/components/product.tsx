import React, { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import products from "../store/app.state.ts";
import cart from "../store/cart.state.ts";
import ProductImage from "./productImage.tsx";
import ColorSelector from "./colorSelector.tsx";
import SizeSelector from "./sizeSelector.tsx";
import Loading from "./loading.tsx";

const Product: FC = () => {
  const params = useParams();
  const id = Number(params.id);
  const [selectedColor, setSelectedColor] = useState(1);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const navigate = useNavigate();

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

  const validate = id && selectedColor && selectedSize;

  const onAddToCart = () => {
    if (validate) cart.addToCart({ id, selectedColor, selectedSize });
  };

  return (
    <div className="product-details">
      <Loading on={products.busy} />
      <div
        className="product-details_header_close-btn"
        onClick={() => navigate("/")}
      >
        НАЗАД
      </div>
      <div className="product-details_header">
        <h2>{products.current?.name}</h2>
      </div>
      <ProductImage
        images={
          products.current?.colors.find(({ id }) => id === selectedColor)
            ?.images
        }
      />
      <ColorSelector
        colors={products.current?.colors}
        selectedColor={selectedColor}
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
      <div
        className={`product-details_cart-button ${!validate ? "disabled" : ""}`}
        onClick={onAddToCart}
      >
        Добавить в корзину
      </div>
    </div>
  );
};

export default observer(Product);
