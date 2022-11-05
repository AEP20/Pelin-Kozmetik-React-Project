import React from 'react'
import "./Statistics.css";
import statisticIcon1 from './statistic-icon1.svg';
import statisticIcon2 from './statistic-icon2.svg';
import statisticIcon3 from './statistic-icon3.svg';
import statisticIcon4 from './statistic-icon4.svg';



function Statistics() {
  return (
    <div className='statistics-container'>
        <div className='statistics-title-container'><h1>Sayılarla Biz</h1></div>
        <div className='statistics-sub-container'>
            <div className='statistics-upper'>
                <div className='statistic-box'>
                    <div className='icon-container'><img src={statisticIcon1}></img></div>
                    <div className='statistic'><p>+250 Mutlu Müşteri</p></div>
                </div>

                <div className='statistic-box'>
                    <div className='icon-container'><img src={statisticIcon2}></img></div>
                    <div className='statistic'><p>+150 Proje</p></div>
                </div>

                <div className='statistic-box'>
                    <div className='icon-container'><img src={statisticIcon3}></img></div>
                    <div className='statistic'><p>+25 Profesyonel Çalışma</p></div>
                </div>

                <div className='statistic-box'>
                    <div className='icon-container'><img src={statisticIcon4}></img></div>
                    <div className='statistic'><p>30 Senelik Tecrübe</p></div>
                </div>
            </div>
            <div className='statistics-bottom'></div>
        </div>
    </div>
  )
}

export default Statistics