import React, { useEffect, useMemo } from "react";
import { observer } from "mobx-react-lite";
import products from "../store/app.state.ts";
import cart from "../store/cart.state.ts";
import ProductImage from "./productImage.tsx";
import { useNavigate } from "react-router";
import Loading from "./loading.tsx";

const getPosition = (dtoEm, products) => {
  if (products && products.list.length) {
    const {
      id: productId,
      colors,
      name: productName,
    } = products.list.find((e) => e.id === dtoEm.id);
    const {
      id: colorId,
      images,
      name: colorName,
      price,
    } = colors.find((e) => e.id === dtoEm.selectedColor);
    const { label: sizeName } = products.sizes.find(
      (e) => e.id === dtoEm.selectedSize
    );
    return {
      productId,
      productName,
      colorId,
      colorName,
      price,
      images,
      sizeName,
    };
  }
};

const Cart = () => {
  const navigate = useNavigate();

  useEffect(() => {
    products.fetch();
  }, []);

  return (
    <div className="cart">
      <Loading on={products.busy} />
      <div className="cart_back" onClick={() => navigate("/")}>
        НАЗАД
      </div>
      <div className="cart-list">
        {cart.selectedPositions
          .map((dto) => getPosition(dto, products))
          .map((e, idx) => (
            <div
              className="cart-list_item"
              key={`${e?.productId}-${e?.colorId}-${idx}`}
            >
              <ProductImage images={e?.images} />
              <div className="cart-list_item_name">{e?.productName}</div>
              <div className="cart-list_item_detail">Цвет:{e?.colorName}</div>
              <div className="cart-list_item_detail">Цвет:{e?.sizeName}</div>
              <div className="cart-list_item_detail">Цена:{e?.price}</div>
              <div
                className="cart-list_item-remove-btn"
                onClick={() => cart.remove(idx)}
              >
                удалить
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default observer(Cart);
