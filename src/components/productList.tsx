import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import ProductListItem from "./productListItem.tsx";
import products from "../store/app.state.ts";
import Loading from "./loading.tsx";

function ProductList() {
  useEffect(() => {
    products.fetch();
  }, []);

  return (
    <div className="products-list">
      <Loading on={products.busy} />
      {products.list.map((e) => (
        <ProductListItem key={e.id} state={e} />
      ))}
    </div>
  );
}

export default observer(ProductList);
