import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import LocalData from "../LocalData";
import ShowRoute from "../components/ShowRoute";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [InputValue, setInputValue] = useState(1);
  const { cartData, setCartData } = useContext(LocalData);

  useEffect(() => {
    fetch("https://product-api-production-3a61.up.railway.app/products")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  const addToLocalData = (data) => {
    const checkData = cartData.find((item) => item.id === data._id);
    if (checkData == undefined) {
      setCartData((prev) => [
        ...prev,
        {
          id: data._id,
          title: data.title,
          image: data.image,
          price: data.price,
          item: InputValue,
        },
      ]);
    } else {
      setCartData(
        cartData.filter((el) => {
          if (el.id === data._id) {
            el.item += InputValue;
          }
          return el;
        })
      );
    }
  };

  const handleInputComponent = (data) => {
    setInputValue(data);
  };

  return (
    <>
      <ShowRoute route={"/products/"} />

      <Container>
        {products.map((product) => (
          <Product
            product={product}
            handleInputComponent={handleInputComponent}
            addToLocalData={addToLocalData}
          />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export default Products;
