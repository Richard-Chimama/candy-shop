import React, { useContext, useEffect, useState } from "react";
import LocalData from "../LocalData/";
import { FiTrash2 } from "react-icons/fi";
import styled from "styled-components";
import ShowRoute from "../components/ShowRoute";
import { motion } from 'framer-motion'
import Colors from "../Theme";

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
        route={"/products/checkout"}
        navigateTO={"/"}
      />
      <TitleP>Checkout</TitleP>
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
                  <motion.button 
                    whileHover= {{cursor:'pointer'}} 
                    onClick={() => handleDeleteItem(item.id)}>
                    -
                  </motion.button>{" "}
                  <motion.button 
                    whileHover= {{cursor:'pointer'}} 
                    onClick={() => handleAddItem(item.id)}>
                    +
                  </motion.button>
                </TD>
                <TD>
                  {item.item} x {item.price} kr
                </TD>
                <TD>
                  <motion.button whileHover= {{cursor:'pointer'}} onClick={() => handleDelete(item.id)}>
                    <FiTrash2 size={20} color="red" />
                  </motion.button>
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
        <Message>No Item in the cart to checkout!</Message>
      }
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
                        <Button as={motion.button} whileHover={{scale: 1.01, backgroundColor: Colors.color3, color: Colors.white, cursor:'pointer'}}>Order</Button>
                      </div>
              </form>
            </ContainerInner>
        </ContainerDiv>

    </>
  );
};

const TitleP = styled.h1`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-align: center;
  margin: 0;
  padding-top: 2rem;
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  border:none;
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
  gap: 10px;
  padding-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0 10px 0;
  border: 2px solid ${Colors.color3};
`;

const Select = styled.select`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0 10px 0;
  border: 2px solid ${Colors.color3};
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const Label = styled.label`
  display: block;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Div = styled.div`
  border-bottom: 1px solid black;
  margin-bottom 1rem;
`;

const P = styled.h1`
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 0;
  padding-bottom: 2rem;
`;

const Message = styled.div`
  height: 200px;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

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
  height: 100%;
  border-radius: 4px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TH = styled.th`
  font-size: 20px;
  text-align: left;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
  margin: 0;
  padding-bottom: 1rem;
`;

const TD = styled.td`
  width: 20%;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
  padding: 1rem 0 1rem 0;
`;

const TBODY = styled.tbody`
  border-top: 1px solid ${Colors.black};
`;
  
  const TotalRow = styled.tr`
  border-top: 1px solid ${Colors.black};
  & > td {
    text-align: right;
    font-family: Roboto;
    font-size: 20px;
    padding: 1rem 5rem 3rem 1rem; 
  }
`;

export default Checkout;
