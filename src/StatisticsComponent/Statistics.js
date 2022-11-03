import React from 'react'
import "./Statistics.css";


function Statistics() {
  return (
    <div className='statistics-container'>
        <div className='statistics-title-container'><h1>Sayılarla Biz</h1></div>
        <div className='statistics-sub-container'>
            <div className='statistics-upper'>
                <div className='statistic-box'>
                    <div className='icon-container'><img src="./img/statistic-icon1.svg"></img></div>
                    <div className='statistic'><p>+250 Mutlu Müşteri</p></div>
                </div>

                <div className='statistic-box'>
                    <div className='icon-container'><img src="./img/statistic-icon2.svg"></img></div>
                    <div className='statistic'><p>+150 Proje</p></div>
                </div>

                <div className='statistic-box'>
                    <div className='icon-container'><img src="./img/statistic-icon3.svg"></img></div>
                    <div className='statistic'><p>+25 Profesyonel Çalışma</p></div>
                </div>

                <div className='statistic-box'>
                    <div className='icon-container'><img src="./img/statistic-icon4.svg"></img></div>
                    <div className='statistic'><p>30 Senelik Tecrübe</p></div>
                </div>
            </div>
            <div className='statistics-bottom'></div>
        </div>
    </div>
  )
}

export default Statistics