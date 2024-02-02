import { useState, useCallback,useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  // use of callback
  const generatePassword = useCallback(() => {
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let num = '0123456789'
    let special = '!@#$%^&*'
    if (numberAllowed) {
      str += num
    }
    if (characterAllowed) {
      str += special
    }

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyToClipboard = useCallback(() => {
    inputRef.current?.select();
    inputRef.current?.setSelectionRange(0, 30);
    window.navigator.clipboard.writeText(password)
  }, [password])
  // USE OF USEREF
  const inputRef = useRef(null)
// USE OF USEEFFECT
  useEffect(() => {generatePassword ()}, [length, numberAllowed, characterAllowed, generatePassword])

  return (
    <>
    <div className='w-full max-w-md max-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-red-600' >
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type='text' 
        value={password}
        className=' outline-none p-2 w-full bg-white-700 ' 
        placeholder='Password'
        readOnly
        ref={inputRef}
        />
        <button 
        onClick={copyToClipboard}
        className='outline-none bg-blue-700 text-white p-2 shrink-0'>Copy</button>

      </div>
      <div  className='flex flex-wrap justify-evenly my-5 py-5 mx-5'>
      <div className='flex justify-between mb-4'>
        <label className='text-white' htmlFor='length'>Password Length : {length}</label>
        <input 
        type='range'
        min={8}
        max={30}
        value={length}
        className='cursor-pointer mx-4'
        onChange={(e)=>setlength(e.target.value)}
        />
        </div>
        <div>
          <label className='text-white mx-3' htmlFor='numbers'>Numbers : </label>
          <input
          className='my-3' 
          type='checkbox'
          id='numbersInput'
          defaultChecked={numberAllowed}
          onChange={()=>setNumberAllowed((prev) => !prev)}
          />
        </div>
        <div>
          <label className='text-white mx-3' htmlFor='characters'> Characters : </label>
          <input 
          className='my-3'
          type='checkbox'
          id='charactersInput'
          defaultChecked={characterAllowed}
          onChange={()=>setCharacterAllowed((prev) => !prev)}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
