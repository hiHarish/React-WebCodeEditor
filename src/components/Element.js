import React from 'react'

export default function element(props) {
    const {head,value,onchange, c}=props;

  return (
    <>
     
      <div className='flex justify-center'>
        <h1 className='font-bold  underline backdrop-blur-lg inline-block pl-2 pr-2  text-center rounded-lg'>{head}</h1>
      </div>
      <div className=' text-center'>
       <textarea className='bg-transparent shadow-lg backdrop-blur-sm shadow-cyan-500/50 hover:brightness-150'  title={head} value={value}
        onChange={(e)=>{onchange(e.target.value)}}
        style={{ backgroundColor:c===0?'transparent':'#1F1F1F',
         borderRadius:'15px',
          color:'white',
          paddingLeft:'20px',
           width:'30vw',
          height:'30vh'}} />
     </div>
   </>
    
  )
}

