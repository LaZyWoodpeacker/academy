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
      <button onClick={onChangeView}>{"<"}</button>
      <img width={100} height={100} src={images && images[current]} />
      <button onClick={onChangeView}>{">"}</button>
    </div>
  );
};

export default ProductImage;
