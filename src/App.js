import { useEffect, useState } from 'react';
import './App.css';
import Element from './components/Element'
import img1 from './static/bgimg.jpg'
import img2 from './static/img2.jpg'
import img3 from './static/img3.jpg'
function App() { 
  const arr=[img1,img2,img3]
  const lt='<'
  const gt='>'
  const [text,settext]=useState('Dark')
  const [count,setcount]=useState(0)
  const [html,sethtml]= useState('')
  const [css,setcss]= useState('')
  const [js,setjs]= useState('')
  const [srcDoc,setSrcDoc]=useState('')
  const [current,setcurrent]=useState(arr[1])
 
  
  useEffect(()=>{
    const timeout=setTimeout(() => {
      setSrcDoc(
        `<html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>`
      )
    },250)
    return () => clearTimeout(timeout)
  }, [html, css, js])


    function click() {
      if(count===0){
        settext('light')
        setcount(1)
        document.body.style.backgroundColor='#1F1F1F' 
      }else{
        settext('Dark')
        setcount(0)
        document.body.style.backgroundColor='white'
      }
            
    }
    function clickPrev() {
        setcurrent(img2)
  
    }
     function clickNext() {
        setcurrent(img3)
    }

  return (
    <>
    <div>
    <div className='addimg' style={{backgroundImage:`url(${current})`}}>
     <h1 className="text-3xl font-bold underline flex justify-center">Web Code Editor</h1>
   <div>
    <button 
    style={{backgroundColor:'lightblue',marginLeft:'35vw', padding:'2px', paddingLeft:'15px', paddingRight:'15px', borderRadius:'3px', height:'5vh' }} onClick={clickPrev}>{lt}</button>
    <button
    style={{backgroundColor:'lightblue',marginLeft:'25vw', padding:'2px', paddingLeft:'15px', paddingRight:'15px', borderRadius:'3px', height:'5vh'}} onClick={clickNext}>{gt}</button></div>
    <div className= 'grid grid-cols-3 gap-3 bg-local' >
      <div className='h-96'><Element head='HTML' value={html} onchange={sethtml} c={count}/></div>
      <div><Element head="CSS" value={css} onchange={setcss} c={count}/></div>
      <div><Element head="Js" value={js} onchange={setjs} c={count}/></div>

      
    
      
      <br/>
    </div></div><br/>
    <div style={{backgroundColor:count===0?'white':'#1F1F1F', }}>
    <div className='flex justify-end pr-2'>
    <button onClick={click} 
     style={{color: 'blue',
     textDecoration:'underline',
     fontWeight:'bolder',
     backgroundColor:'lightblue',
     padding:'0 20px 5px 20px',
     borderRadius:'5px'}}>{text}</button></div>
     <h1 className=' text-2xl font-bold pl-6' style={{color:count===0?'black':'white'}}>OUTPUT:</h1><p className='pl-8' style={{color:count===0?'black':'white'}}>Scroll down to see full page</p>
    </div>
    <hr/><hr/>
    
   <iframe className='w-full h-dvh bg-transparent' srcDoc={srcDoc} title='output'/></div>
    </>
  );
}

export default App;
