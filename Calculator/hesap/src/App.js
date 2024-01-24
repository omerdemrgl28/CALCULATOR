import './App.css';
import { useState } from 'react';


function App() {
  const [denklik, setDenklik] = useState('');
  const [firstVal, setFirstVal] = useState([]);
  const [secondVal, setSecondVal] = useState(0);
  const [firstValgg, setFirstValgg] = useState([]);
  const [secondValgg, setSecondValgg] = useState(0);
  const [show, setShow] = useState('');
  const [showgg, setShowgg] = useState('');
  const [denklikEq, setDenklikEq] = useState('');
  
  const [sonuc, setSonuc] = useState('');
  const hesapla = (arr) => {
    
    const result = parseInt(arr.join(''), 10);
  
    return result;
  };

  const handleNum = (number) => {
    if (denklik === '') {
      setSecondVal(secondVal + 1);
      setFirstVal([...firstVal, number].join(''));
      let showCopy = [...firstVal, number].join('');
      setShow(showCopy);
      switch (number) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
          setFirstVal([...firstVal, number]); // Diziyi kopyalayarak güncelleyin
          break;
        case 10:
          setFirstVal([number]);
          setSecondVal(0);
          break;
        default:

          break;
      }
    }if ((denklik === '+' || denklik === '-' || denklik === '/' || denklik === 'x')&&(denklikEq==='')) {
      setSecondValgg(secondValgg + 1);
      setFirstValgg([...firstValgg, number].join(''));
      let showCopygg = [...firstValgg, number].join('');
      setShowgg(showCopygg);
      switch (number) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
          setFirstValgg([...firstValgg, number]); // Diziyi kopyalayarak güncelleyin
          break;
        case 10:
          setFirstValgg([number]);
          setSecondValgg(0);
          break;
        default:

          break;
      }
    }
    
  };
  const handleNum1=()=>{
    setDenklikEq('=');
    if(denklik === '+'){
       setSonuc(hesapla(firstVal)+hesapla(firstValgg));
       
    }
    else if(denklik === '-'){
     setSonuc(hesapla(firstVal)-hesapla(firstValgg));
    }
    else if(denklik === '/'){
     setSonuc(hesapla(firstVal)/hesapla(firstValgg));
    }
    else if(denklik === 'x'){
     setSonuc(hesapla(firstVal)*hesapla(firstValgg));
    }
};
const deleteState=()=>{
  setSonuc('');
  setDenklikEq('');
  setFirstVal([]);
  setFirstValgg([]);
  setDenklik('');
  setDenklikEq('');
  setShow('');
  setShowgg('');

}

  return (
    <div className="abc">
      <p>HESAP MAKİNESİ</p>
      <div className="kutucuk">
        <div className="showbar">{show}{denklik}{showgg}{denklikEq}{sonuc}</div>
        <button className="delete-button" onClick={deleteState}>SİL</button>
        <div className="desc">
          <button onClick={() => handleNum(1)}>1</button>
          <button onClick={() => handleNum(2)}>2</button>
          <button onClick={() => handleNum(3)}>3</button>
          <button onClick={() => handleNum(4)}>4</button>
          <button onClick={() => handleNum(5)}>5</button>
          <button onClick={() => handleNum(6)}>6</button>
          <button onClick={() => handleNum(7)}>7</button>
          <button onClick={() => handleNum(8)}>8</button>
          <button onClick={() => handleNum(9)}>9</button>
          <button onClick={() => handleNum(0)}>0</button>
          <button onClick={() => setDenklik('+')}>+</button>
          <button onClick={() => setDenklik('-')}>-</button>
          <button onClick={() => setDenklik('/')}>/</button>
          <button onClick={() => setDenklik('x')}>x</button>
          <button onClick={() => handleNum1()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;