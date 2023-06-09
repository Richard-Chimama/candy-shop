import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import LocalData from "../LocalData";
import InputComponent from "../components/InputComponent";
import ShowRoute from "../components/ShowRoute";
import styled from "styled-components";
import { motion } from "framer-motion";
import Colors from "../Theme";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [InputValue, setInputValue] = useState(1);
  const { cartData, setCartData } = useContext(LocalData);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://product-api-production-3a61.up.railway.app/products/${id}`)
      .then((response) => response.json())
      .then((json) => setProduct(json));
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
    <div>
      <ShowRoute route={"/products/product"} navigateTO={"/"} />

      {product ? (
        <Div>
          <motion.div
            initial={{ x: -150 }}
            animate={{ x: 10 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
          >
            <Bild src={product.image} alt="here should be a image" />
          </motion.div>

          <motion.div
            initial={{x: 500}}
            animate={{ x: 20 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
          >
            <Kontent>
              <Content key={product._id}>
                <div>
                  <h2>{product.title}</h2>
                  <p>{product.price} SEK</p>
                  <p>{product.description}</p>
                  <p>Stock: {product.stock} pcs</p>
                </div>

                <BtnsContainer>
                  <InputComponent onDataReceived={handleInputComponent} />
                  <Buton
                    as={motion.button}
                    whileHover={{
                      scale: 1.04,
                      backgroundColor: Colors.color3,
                      color: Colors.white,
                      cursor: "pointer",
                    }}
                    onClick={() => addToLocalData(product)}
                  >
                    Add to cart
                  </Buton>
                </BtnsContainer>
              </Content>
            </Kontent>
          </motion.div>
        </Div>
      ) : (
        <div style={{height:450}}></div>
      )}
    </div>
  );
};

const Bild = styled.img`
  width: 560px;
  height: 100%;
  border-radius: 8px;
`;

const Kontent = styled.div`
  display: flex;
  justify-content: left;
  align-items: start;
`;

const Content = styled.div`
  h2,
  p {
    margin: 10px;
    padding: 0;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const Div = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 3rem;
  margin-top: 2rem;
`;

const BtnsContainer = styled(motion.div)`
  padding-top: 1rem;
`;

const Buton = styled(motion.button)`
  border: 0;
  padding: 12px;
  border-radius: 8px;
  margin: 10px 0 10px 10px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export default Product;
