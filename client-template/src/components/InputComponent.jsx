import React, {useState} from 'react'

const InputComponent = ({Value}) => {
    const [InputValue, setInputValue] = useState(1)
    const handleChange = (e) => {
        setInputValue(e.target.value)
        Value(InputValue)
    }
  return (
    <input value={InputValue} onChange={(e)=> handleChange(e)} />
  )
}

export default InputComponent