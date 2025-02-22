import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import ProductListItem from "./productListItem.tsx";
import products from "../store/app.state.ts";

function ProductList() {
  useEffect(() => {
    products.fetch();
  }, []);

  return (
    <div>
      {products.list.map((e) => (
        <ProductListItem key={e.id} state={e} />
      ))}
    </div>
  );
}

export default observer(ProductList);
