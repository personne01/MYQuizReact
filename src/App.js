// import logo from './logo.svg';
import benar from './image/jawab-benar-illustration.png';
import tanya from './image/tanya-illustration.png';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [jawaban, setJawaban] = useState("");
  const [showBenar, setShowBenar] = useState(false)
  
  useEffect(() => {
    jawaban === "pinguin" || jawaban === "penguin" || jawaban === "pingin" ? setShowBenar(true) : setShowBenar(false);
  }, [jawaban])

  return(
    <div className="Parentbox">
      <div className='Pertanyaan'>
      <h1>Hewan Apa Yang Suka Ngidam</h1>
      </div>
      {
        showBenar ? (
          <div className='Terjawab'> 
            <img src={benar} className="jawabanBenar" alt="Ini Ilustrasi Benar" width='400px'/>
            <h5>Yeeey Anda Pintaaar Nebak Kuis</h5>
            <p>Tapi kayaknya kamu bodoh dalam hal percintaan</p>
          </div>
        ) : (
          <div>
            <img src={tanya} className="tanya-illust" alt="ini illustrasi" width='400px'/>
            <h2>Jawab Yang Bener Dong !!</h2>
          </div>
          
        )
      }

      <div className='Jawaban'>
        <input 
        type="text"
        className='jawaban'
        placeholder='Jawab dong'
        onChange={(typing) => setJawaban(typing.target.value.toLowerCase())}
        />
        
          
      </div>
    </div>
  );
  
}

export default App;
