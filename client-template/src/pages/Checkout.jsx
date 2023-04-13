import React, {useContext,useEffect, useState} from 'react'
import LocalData from '../LocalData/'
import styled from 'styled-components'

const Checkout = () => {
  const { cartData, setCartData } = useContext(LocalData);
  const [total, setTotal] = useState(0)
  useEffect(()=>{
    let sum = 0
    if(cartData.length >= 1){
      for(let el of cartData){
        sum += parseInt(el.price)
      }
    }
    setTotal(sum)
  }, [cartData.length])

  return (
    <div>
    <Content>
      <Table>
        <thead>
          <tr>
            <TH colspan="5">Product</TH>
          </tr>
        </thead>
        <TBODY>
          {
            cartData.map((item)=>
              <tr key={item.id}>
                <td><Image src={item.image} alt={item.title} /></td>
                <td>{item.title}</td>
                <td><button>-</button> <button>+</button></td>
                <td>{item.price} kr</td>
                <td><button>X</button></td>
              </tr>
            )
          }
          <TotalRow colspan="5">Total: {total} kr</TotalRow>
        </TBODY>
      </Table>
        
      </Content>
    </div>
  )
}

const Content = styled.div`
  width: 70%;
`

const Image = styled.img`
  width: 75px;
  height: 75px;
`

const Table = styled.table`
  border-collapse: collapse;
`

const TH = styled.th`
`

const TBODY = styled.tbody`
  border-top: 1px solid black;
`
const TotalRow = styled.tr`
    border-top: 1px solid black;
`

export default Checkout