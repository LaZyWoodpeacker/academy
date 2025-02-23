import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../store/app.state";

interface IProps {
  state: IProduct;
}

const ProductListItem: FC<IProps> = ({ state }) => {
  const navigate = useNavigate();
  const detailsHandle = () => {
    navigate(`/${state.id}`);
  };

  const image = state.colors[0].images[0];
  return (
    <div className="product-card" onClick={detailsHandle}>
      <img className="product-card_image" src={image} />
      <h1>{state.name}</h1>
    </div>
  );
};

export default ProductListItem;
