// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [jawaban, setJawaban] = useState("");
  const [showBenar, setShowBenar] = useState(false)
  
  useEffect(() => {
    jawaban == "pinguin" || jawaban == "penguin" || jawaban == "pingin" ? setShowBenar(true) : setShowBenar(false);
  }, [jawaban])

  return(
    <div className="Parentbox">
      <div className='Pertanyaan'>Hewan yang suka ngidam??</div>
      
      {
        showBenar ? (
          <div className='Terjawab'> 
            <h5>Yeeey Anda Pintaaar Nebak Kuis</h5>
            <p>Tapi kayaknya kamu bodoh dalam hal percintaan</p>
          </div>
        ) : (
          "Ayo Terus jawab Goblok. Sampe bener"
        )
      }

      <div className='Jawaban'>
        <input 
        type="text"
        className='jawaban'
        placeholder='Jawab dong'
        onChange={(typing) => setJawaban(typing.target.value)}
        />
        
          
      </div>
    </div>
  );
  
}

export default App;
