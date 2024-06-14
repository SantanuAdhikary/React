

import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [amount, setAmount] = useState(0);
  const [options, setOptions] = useState({});
  const [output, setOutput] = useState('');

  // Fetch currency options
  useEffect(() => {
    axios.get('https://api.frankfurter.app/currencies')
      .then(response => {
        setOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching currency options:', error);
      });
  }, []);

  // Handle conversion
  const convertCurrency = () => {
    if (amount <= 0 || !from || !to) {
      setOutput('Please enter a valid amount and select currencies.');
      return;
    }

    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to} `;
    axios.get(url)
      .then(response => {
        setOutput(`${amount} ${from} = ${response.data.rates[to]} ${to}`);
      })
      .catch(error => {
        console.error('Error converting currency:', error);
        setOutput('Error converting currency. Please try again.');
      });
  };

  // Handle switch
  const switchCurrencies = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    // Recalculate conversion with new currency values
    if (amount > 0) {
      const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${to}&to=${from}`;
      axios.get(url)
        .then(response => {
          setOutput(`${amount} ${to} = ${response.data.rates[from]} ${from}`);
        })
        .catch(error => {
          console.error('Error converting currency:', error);
          setOutput('Error converting currency. Please try again.');
        });
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Currency Converter</h1>
      </div>
      <div className="input-box">
        <label htmlFor="from">FROM</label>
        <select 
          name="from"
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          {Object.keys(options).map(currency => (
            <option key={currency} value={currency}>
              {currency} - {options[currency]}
            </option>
          ))}
        </select>

        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label htmlFor="to">TO</label>
        <select
          name="to"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          {Object.keys(options).map(currency => (
            <option key={currency} value={currency}>
              {currency} - {options[currency]}
            </option>
          ))}
        </select>
      </div>
      <button className='btn' onClick={switchCurrencies}>Switch</button>
      <div className="output">
        {output}
      </div>
      <button className='btn' onClick={convertCurrency}>Convert</button>
    </div>
  );
}

export default App;
