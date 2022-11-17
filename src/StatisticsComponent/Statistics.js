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
        <div className='statistics-sub-title-container'><h2>Fason Üretimine Profesyonel Dokunuş</h2></div>
        <div className='statistics-sub-container'>
            <div className='statistics-upper'>
                <div className='statistic-sub-container1'>
                <div className='statistic-box'>
                    <div className='icon-container'><img src={statisticIcon1} alt="+250 Mutlu Müşteri"></img></div>
                    <div className='statistic'><p>250+</p><p>Mutlu Müşteri</p></div>
                </div>

                <div className='statistic-box'>
                    <div className='icon-container'><img src={statisticIcon2} alt="+150 Proje"></img></div>
                    <div className='statistic'><p>150+</p><p>Proje</p></div>
                </div>

                </div>
                <div className='statistic-sub-container2'>
                <div className='statistic-box'>
                    <div className='icon-container'><img src={statisticIcon4} alt="+25 Profesyonel Çalışma"></img></div>
                    <div className='statistic'><p>25+</p><p>Profesyonel Çalışma</p></div>
                </div>

                <div className='statistic-box'>
                    <div className='icon-container'><img src={statisticIcon3} alt="30 Senelik Tecrübe"></img></div>
                    <div className='statistic'><p>30+</p><p>Senelik Tecrübe</p></div>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Statistics