import React, { useState } from 'react'
import memesdata from '../memesdata'
const Meme = () => {
    const [meme,setmeme]= useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const()
    function getmemeimg(){
        const memesarray = memesdata.data.memes
        const randomnumber = Math.floor(Math.random() * memesarray.length)
        setmemeimg(memesarray[randomnumber].url)
    }
  return (
    <main>
      <div className='form'>
        <input type="text" placeholder='Top Text' className='form-input'/>
        <input type="text" placeholder='Bottom Text' className='form-input'/>
        <button className='form-btn' onClick={getmemeimg}>Get a new meme image🖼️</button>
      </div>
      <img src={memeimg} className='meme-img' />
    </main>
  )
} 

export default Meme
