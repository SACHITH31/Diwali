import React from 'react'
import './css/first.css'
import diwali from '../public/yellow-chakra.svg'
import deep from '../public/deepak-1.svg'
import honey from '../public/honey.svg'
import clipPath from '../public/clip path group.svg'
import { Link } from 'react-scroll'

export default function Section1() {
  return (
 <main>
 <div className='diwaliRotatorContainer'>
     <img className='diwali' src= {diwali} ></img>
     </div>

     <div className='mainContentContainer' >

     <div className='happyDiwaliContainer'>
      <h1 className='happyDiwali'>Happy Diwali </h1> 
      <img className='deep' src={deep} style={{width: '80px'}}></img>
     </div>

      <p className='content'>Let's dive into the sweets, lights up the crackers, share the laughs and build memories that light up your hearts as much as the night sky.</p>
      <p className='letsCelebrate'>Let's celebrate!</p>

      <div className='buttons'>
        <button className='burstACracker'>Burst a Cracker! </button>
        <Link to= "Section2">
        <button className='getBlessings'>Get Blessings</button>
        </Link>
      </div>
     </div>

    <div className='another'>
    <img className='clipPathImage' src= {clipPath} style={{height: '350px'}}></img>
    <div className='honeyContainer'>
    <img className='heneyImage' src= {honey} style={{marginLeft: '10px', width: '200px', }}></img>
    </div>
    </div>

 </main>
  )
}
