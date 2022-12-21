import './App.css';
import React,{useState,useEffect} from 'react'
function App() {
  
  const[value,setValue]=useState({
    x:0,
    y:0,
    p:0,
  })
  console.log(value)
  return (
    <>
      <div className='bill_div'>
        <div className='bill_mini'>
          <h1>Tip Calculator</h1>
            <input 
            placeholder='Mebleg' 
            type={'number'} 
            min={1}
            max={10000000}
            name='x'
            onChange={(e)=>setValue({...value,x:e.target.value})}/>
            <input
             placeholder='Faiz' 
             type={'number'} 
             min={1}
             max={10000000}
             onChange={(e)=>setValue({...value,y:e.target.value})}/>
            <input
             placeholder='Sexsin sayi' 
             type={'number'}
             min={1}
             max={1000}
             onChange={(e)=>setValue({...value,p:e.target.value})}/>
      







      <h1>Result:&nbsp;<span>{value.y ? ((value.x*value.y/100)):'-'}</span></h1>
        <h1>Person Result:&nbsp;<span>{value.p?(((value.x*value.y/100))/value.p):'-'}</span></h1>

        </div>
       


    </div>
     
    </>
  );
}

export default App;
