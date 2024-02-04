import { useState } from 'react'
import './App.css'
import {InputBox} from './component/input'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {setConvertedAmount(amount * currencyInfo[to])}

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('Photo by Dmitry Demidov from Pexels: https://www.pexels.com/photo/silver-and-gold-round-coins-3790639/')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOption={options}
                            onAmountChange={(amount) => setAmount(amount)}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                            
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOption={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
