import React, { FC, useState } from "react";

interface IProps {
  images: string[] | undefined;
}

const ProductImage: FC<IProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const onChangeView = () => {
    setCurrent((last) => (last === 0 ? 1 : 0));
  };
  return (
    <div className="product-image">
      <div className="product-card_spin-button" onClick={onChangeView}>
        {"<"}
      </div>
      <img className="product-card_image" src={images && images[current]} />
      <div className="product-card_spin-button" onClick={onChangeView}>
        {">"}
      </div>
    </div>
  );
};

export default ProductImage;
