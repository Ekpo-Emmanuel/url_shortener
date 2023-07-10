import './App.css';
import InputShortener from './components/inputShortener'
import BackgroundAnimate from './components/backgroundAnimate'
import LinkResult from './components/linkResult';
import { useState } from 'react';
import Footer from './components/footer';

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue}/>
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue}/>
      <Footer />  
    </div>
  );
}

export default App;
