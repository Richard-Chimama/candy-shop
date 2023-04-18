import React, {useState} from 'react'
import styled from "styled-components"
import Colors from '../Theme'

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
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${Colors.color3};
  text-align: center;
  font-family: 600;
  outline: none;
`;

export default InputComponent