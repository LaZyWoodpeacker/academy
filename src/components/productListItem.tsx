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
  return (
    <div>
      <h1>{state.name}</h1>
      <button onClick={detailsHandle}>Подробнее</button>
    </div>
  );
};

export default ProductListItem;
