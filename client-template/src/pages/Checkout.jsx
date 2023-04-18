import React, { useContext, useEffect, useState } from "react";
import LocalData from "../LocalData/";
import { FiTrash2 } from "react-icons/fi";
import styled from "styled-components";
import { motion } from 'framer-motion'

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
    <Container>
      <Content>
        <Table>
          <thead>
            <tr>
              <TH colspan="5">Product</TH>
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
              <td className="text-total" colspan="3">
                Total
              </td>
              <td className="text-price" colspan="2">
                {total} kr
              </td>
            </TotalRow>
          </TBODY>
        </Table>
      </Content>
    </Container>
    <Div>
      <P>
        Shipping adress
      </P>
    </Div>
        <ContainerDiv>
            <ContainerInner>
              <form action="">

                  <FormBox1>
                    <InputContainer>
                      <div>
                        <Label htmlFor=""> Firstname</Label>
                          <Input type="text" name="" id="" />
                      </div>
                    </InputContainer>

                    <InputContainer>
                      <div>
                        <Label htmlFor=""> Lastname </Label>
                          <Input type="text" name="" id="" />
                      </div>
                    </InputContainer>
                  </FormBox1>

                    <div>
                      <Label htmlFor="">Street adress</Label>
                        <Input type="text" name="" id="" />
                    </div>

                    <FormBox1>
                      <InputContainer>
                        <div>
                          <Label htmlFor="">City</Label>
                            <Input type="text" name="" id="" />
                        </div>
                      </InputContainer>

                      <InputContainer>
                        <div>
                          <Label htmlFor="">Zip code</Label>
                            <Input type="number" name="" id="" />
                        </div>
                      </InputContainer>
                    </FormBox1>

                 
                    <div>
                      <div>
                          <Select id="country" name="country">
                            <option>Select country</option>
                            <option value="CA">Canada</option>
                            <option value="DK">Denmark</option>
                            <option value="FI">Finland</option>
                            <option value="IS">Iceland</option>
                            <option value="NO">Norway</option>
                            <option value="SE">Sweden</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                          </Select>

                      </div>
                    </div>

                    <div>
                      <div>
                          <Label htmlFor="">Phonenumber</Label>
                            <Input type="number" name="" id="" />
                      </div>
                    </div>

                      <div>
                        <Label htmlFor="">Email</Label>
                          <Input type="email" name="" id="" placeholder="example@gmail.com" />
                      </div>

                      <div>
                        <Button as={motion.button} whileHover={{scale: 1.01, backgroundColor: 'lightpink'}}>Order</Button>
                      </div>
              </form>
            </ContainerInner>
        </ContainerDiv>

    </>
  );
};

const Button = styled(motion.button)`
  width: 100%;
  padding: 10px;
  border-radius: 8px
`;

const ContainerInner = styled.div`
  margin: 0 auto;
  max-width: 550px;
  width: 100%
`;

const InputContainer = styled.div`
  width: 100%;
  `;

const FormBox1 = styled.div`
  display: flex;
  gap: 10px
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0 10px 0;
`;
const Select = styled.select`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0 10px 0;
`;

const Label = styled.label`
  display: block;
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Div = styled.div`
  border-bottom: 1px solid black;
  margin-bottom 10px
`;

const P = styled.p`
  font-size: 20px;
  text-align: left;
`;

const Content = styled.div`
  margin-top: 2rem;
  width: 70%;
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
