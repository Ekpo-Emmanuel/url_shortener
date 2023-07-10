import React from 'react'
import { useState } from 'react'


const InputShortener = ({setInputValue}) => {
  const [value, setValue] = useState("")

  const handleClick = ()=> {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className='input-container'>
        <h1>URL Shortener</h1>
        <input type="text" placeholder='Paste a link' 
        value={value}
        onChange={e => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Shorten</button>
    </div>
  )
}

export default InputShortener