import React from 'react'
import "./Mission.css";


function Mission() {
  return (
    <div className='mission-container'>
      <div className='mission-main-title-container'><h1>Misyonumuz ve Vizyonumuz</h1></div>
      <div className='mission-sub-title-container'><h2>Misyon & Vizyon</h2></div>
        <div className='mission-container1'>
            <div className='mission-title-container1'><h1>Misyonumuz</h1></div>
            <div className='mission-vision1'><p>Fason kozmetik üretiminde Türkiye, Orta doğu ve avrupa ülkeri dahil dünyanın kozmetik üretim tesisi haline gelmektir.</p></div>
        </div>


        <div className='mission-container2'>
            <div className='mission-title-container2'><h1>Vizyonumuz</h1></div>
            <div className='mission-vision2'><p>Satış pazarlama ağını kurmuş girişimci profesyoneller, kurumsal firmalar ve market zincirler için ekonomik, sağlam, güvenilir fason kozmetik üretimi tesisi olmaktır.</p></div>
        </div>

    </div>
  )
}

export default Mission