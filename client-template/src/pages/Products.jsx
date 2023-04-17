import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LocalData from "../LocalData";
import InputComponent from "../components/InputComponent";
import ShowRoute from "../components/ShowRoute";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [InputValue, setInputValue] = useState(1);
  const { cartData, setCartData } = useContext(LocalData);

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
      <ShowRoute
        route={"/products/"}
      />
      <Container>
        {products.map((product) => (
          <Content key={product._id}>
            <Image src={product.image} alt="here should be a image" />
            <p>{product.title}</p>
            <p>{product.price} SEK</p>
            <InputComponent onDataReceived={handleInputComponent} />
            <br />
            <button onClick={() => addToLocalData(product)}>Add to cart</button>
            <p>In Stock</p>

            <Link to={"/product/" + product._id}>
              <i>Read more...</i>
            </Link>
          </Content>
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

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: Calc(100%/3 - 1rem);
  height: 350px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  margin-top: 1rem;
  padding: 0.5rem;
`;
export default Products;
