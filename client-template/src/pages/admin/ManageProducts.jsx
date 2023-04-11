import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const URL = "https://product-api-production-3a61.up.railway.app/products";

const ManageProducts = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(URL);
        const DATA = await response.json();
        if (!response.ok) {
          throw new Error("Opps! we couldn't fetch the data");
        }
        setData(DATA);
        setIsLoading(false);
        console.log(DATA);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
        setError(err);
      }
    }
    fetchProducts();
  }, []);

  if (isLoading) {
    return <CenterMessage>Loading...</CenterMessage>;
  }

  if (isError != null) {
    return <CenterMessage>{isError}</CenterMessage>;
  }

  return (
    <>
    <Header>
      <Title>ManageProducts</Title>
      <NavLink to={"/admin"}>Create new product</NavLink>
    </Header>
      <Table>
        <thead>
          <tr>
            <TH>Title</TH>
            <TH className="price">Price</TH>
            <TH className="stock">Stock</TH>
            <TH>Date</TH>
            <TH className="action">Action</TH>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item)=>
              <tr key={item._id}>
                <TD>{item.title}</TD>
                <TD>{item.price}</TD>
                <TD>{item.stock}</TD>
                <TD>{new Date(item.date).toLocaleDateString()}</TD>
                <TD>
                  <button>Update</button>
                  <button>Delete</button>
                </TD>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  );
};

const Title = styled.p`
  font-size: 20px;
  text-align: center;
`;

const NavLink = styled(Link)`
  font-size: 16px;
  text-align: center;
  padding-top:20px;
`

const Table = styled.table`
  border-collapse: collapse;
  width: 70%;
  margin: 0 auto;
`
const TD = styled.td`
  border: 1px solid black;
  height: 40px;
  text-align: center;
`
const CenterMessage = styled.div`
  text-align: center;
  vertical-align: middle;
`

const TH = styled(TD)`
  font-size: 18px;
  font-weight: 600;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 70%;
  margin: 2rem auto 1rem auto;
`

export default ManageProducts;
