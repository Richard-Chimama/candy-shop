import React, {useState} from 'react'
import styled from "styled-components"

const InputComponent = (props) => {
    const [InputValue, setInputValue] = useState(1)
    const handleChange = (e) => {
       if (e.target.value === ""){
        setInputValue(e.target.value)
       }else{
        const num = parseInt(e.target.value)
         setInputValue(num)
         props.onDataReceived(num)
       }
    }
  return (
    <Input type="number" value={InputValue} onChange={(e)=> handleChange(e)} />
  )
}

const Input = styled.input`
  width: 50px;
  height: 30px;
  border: 1px solid black;
  text-align: center;
  font-family: 600;
`;

export default InputComponent