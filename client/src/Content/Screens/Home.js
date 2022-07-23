import React from "react";
import Products from "../../Template/Components/Product/Products";

export default function Home() {
  document.title = process.env.REACT_APP_COMPANY_NAME;

  return (
    <>
      <Products />
    </>
  );
}
