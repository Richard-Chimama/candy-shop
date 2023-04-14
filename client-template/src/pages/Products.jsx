import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://product-api-production-3a61.up.railway.app/products"
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Content>
      {products.map((product) => (
        <Product className="productItem" key={product._id} product={product} />
      ))}
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
`;

export default Products;
