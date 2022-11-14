import React from 'react'
import "./AboutUs.css";
import 'animate.css';

function AboutUs() {
  return (
    <div className='about-us-container' id="hakkimizda">
        <div className='about-us-title-container'><h1>Pelin Kozmetik Hakkında</h1></div>
        <div  className='about-us-sub-title-container'><h2>Hayalinizin En Büyük Destekçisi Pelin Kozmetik</h2></div>

        <div className='about-us-sub-container'>
            <div className='about-us-info-container'>
                <div className='info'><p>Ticari faaliyetlerine 1989 yılında başlayan Pelin Kozmetik bitkilerden elde edilen doğal içeriklerin kullanıldığı doğal kozmetik ürünlerinin ithalatını yapıp Türkiye piyasasına satışını yaparak faaliyetlerini sürdürmüştür.</p></div>
                <div className='info'><p>Pelin kozmetik bu ithalatlarla kozmetik ürünlerinin ithalatına öncülük eden ilk Türk firmasıdır. İthalat ve ihracat firması olan firmamız, özellikle Avrupa’ da doğal üretim yapan firmalardan ithalat yapmaya özen göstermiştir.</p></div>
                <div className='info'><p>Uzun yıllar ithalat ile dünyadaki doğal kozmetik ürünleri üzerinde deneyim sahibi olan firmamız sahada fırsatları görerek 2000 metre kare kapalı alana sahip bir araştırma geliştirme, üretim, dolum ve seri paketleme hattını kurduk.</p></div>
                <div className='info'><p>Kurum olarak satış, pazarlama ağını kurmuş profesyoneller ve kurumsal firmalar ve market zincirler için kendi markaları ile kendi ürünlerini yapmalarına olanak sağlıyoruz.</p></div>
                <div className='info'><p>Firmamız kendi ürünlerini geliştirecek girişimciler için UTS - Ürün Takip Sisteminde sağlık bakanlığının yönetmelikleri için ücretsiz danışmanlık hizmeti ile birlikte girişimcilere yol arkadaşlığı yaparak ürünlerini oluşturuyoruz.</p></div>

            </div>
        </div>
    </div>
  )
}

export default AboutUs