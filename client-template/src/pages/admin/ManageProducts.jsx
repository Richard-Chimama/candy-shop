import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link} from "react-router-dom";
import Colors from "../../Theme";
import ShowRoute from "../../components/ShowRoute";

const URL = "https://product-api-production-3a61.up.railway.app/products";

const ManageProducts = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(null);

  async function fetchProducts() {
    try {
      const response = await fetch(URL);
      const DATA = await response.json();
      if (!response.ok) {
        throw new Error("Opps! we couldn't fetch the data");
      }
      setData(DATA);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    fetch(URL + "/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete data");
        }
        console.log(`Data with ID ${id} deleted successfully`);
        fetchProducts();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (isLoading) {
    return <CenterMessage>Loading...</CenterMessage>;
  }

  if (isError != null) {
    return <CenterMessage>{isError}</CenterMessage>;
  }

  
  

  return (
    <>
      <ShowRoute route={"/products/admin"} navigateTO={"/"} />
        <Title>Manage Products</Title>
      <Header>
        <NavLink to={"/admin/create-product"}>Create new product</NavLink>
      </Header>
      <Table>
        <thead>
          <tr>
            <TH>#</TH>
            <TH>Title</TH>
            <TH className="price">Price</TH>
            <TH className="stock">Stock</TH>
            <TH>Date</TH>
            <TH className="action">Action</TH>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item._id}>
              <TD>{index + 1}</TD>
              <TD>{item.title}</TD>
              <TD>{item.price}</TD>
              <TD>{item.stock}</TD>
              <TD>{new Date(item.date).toLocaleDateString()}</TD>
              <TD className="actions">

                <Links to={"/admin/update-product/" + item._id}>Update</Links>
                <Links onClick={() => handleDelete(item._id)}>Delete</Links>
              </TD>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

const Title = styled.p`
  font-size: 25px;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const Links = styled(Link)`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-decoration: none;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;

  & tr:nth-child(even) {
    background-color: ${Colors.color4};
  }

  & .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    border-top: none;
    border-left: none;
  }
`;
const TD = styled.td`
  border: none;
  height: 40px;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;
const CenterMessage = styled.div`
  text-align: center;
  vertical-align: middle;
  
`;

const TH = styled(TD)`
  text-align: center;
  padding-left: 10px;
  background-color: ${Colors.color1};
  color: ${Colors.white};
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;
const Header = styled.div`
  display: flex;
  justify-content: right;
  align-content: center;
  width: 100%;
  margin: 0.5rem auto 1rem auto;
`;

export default ManageProducts;
