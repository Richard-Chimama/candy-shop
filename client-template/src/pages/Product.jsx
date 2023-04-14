import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Product = ({ product }) => {
  const [InputValue, setInputValue] = useState(1);
  return (
    <Content>
      <Image src={product.image} alt="here should be a image" />
      <h2>{product.title}</h2>
      <p>{product.price} SEK</p>
      <Input
        type="number"
        value={InputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <button>Add to cart</button>
      <p>In Stock</p>

      <Link to={"/product/" + product._id}>
        <i>Read more...</i>
      </Link>
    </Content>
  );
};

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Input = styled.input`
  width: 50px;
  height: 30px;
  border: 1px solid black;
  text-align: center;
  font-family: 600;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 27%;
  height: 400px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  margin-top: 1rem;
  padding: 0.5rem;
`;

export default Product;
