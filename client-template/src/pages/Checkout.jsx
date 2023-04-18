import React, { useContext, useEffect, useState } from "react";
import LocalData from "../LocalData/";
import { FiTrash2 } from "react-icons/fi";
import styled from "styled-components";
import ShowRoute from "../components/ShowRoute";

const Checkout = () => {
  const { cartData, setCartData } = useContext(LocalData);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let sum = 0;
    if (cartData.length >= 1) {
      for (let el of cartData) {
        sum += el.item * parseInt(el.price);
      }
    }
    setTotal(sum);
  }, [cartData]);

  const handleDelete = (id) => {
    setCartData(cartData.filter((item) => item.id !== id));
  };

  const handleAddItem = (id) => {
    setCartData(
      cartData.filter((item) => {
        if (item.id === id) {
          item.item += 1;
        }
        return item;
      })
    );
  };

  const handleDeleteItem = (id) => {
    setCartData(
      cartData.filter((item) => {
        if (item.id === id) {
          if (item.item > 1) item.item -= 1;
        }
        return item;
      })
    );
  };

  return (
    <>
    <ShowRoute
        route={"/products/"}
        navigateTO={"/"}
      />
    <Container>
      <Content>
      {
        cartData.length > 0 ?
        <Table>
          <thead>
            <tr>
              <TH colSpan="5">Product</TH>
            </tr>
          </thead>
          <TBODY>
            {cartData.map((item) => (
              <tr key={item.id}>
                <TD>
                  <Image src={item.image} alt={item.title} />
                </TD>
                <TD>{item.title}</TD>
                <TD>
                  <button onClick={() => handleDeleteItem(item.id)}>-</button>{" "}
                  <button onClick={() => handleAddItem(item.id)}>+</button>
                </TD>
                <TD>
                  {item.item} x {item.price} kr
                </TD>
                <TD>
                  <button onClick={() => handleDelete(item.id)}>
                    <FiTrash2 size={20} color="red" />
                  </button>
                </TD>
              </tr>
            ))}
            <TotalRow>
              <td className="text-total" colSpan="3">
                Total
              </td>
              <td className="text-price" colSpan="2">
                {total} kr
              </td>
            </TotalRow>
          </TBODY>
        </Table>
        :
        <Message>No Item in the cart to checkout</Message>
      }
      </Content>
    </Container>
    </>
  );
};

const Message = styled.div`
  height: 500px;

`

const Content = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 75px;
  height: 75px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TH = styled.th`
  font-size: 20px;
  text-align: left;
`;

const TD = styled.td`
  width: 20%;
  text-align: center;
`;

const TBODY = styled.tbody`
  border-top: 1px solid black;
`;
const TotalRow = styled.tr`
  border-top: 1px solid black;
  & > td {
    text-align: right;
    font-family: Roboto;
    font-size: 22px;
    padding-right: 2rem;
    padding-top: 0.5rem;
  }
`;

export default Checkout;
