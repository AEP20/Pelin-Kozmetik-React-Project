import React from "react";
import "./Progress.css";
import PackageIcon from "./cube-outline.svg";
import ProductIcon from "./disc-outline.svg";
import LogisticIcon from "./flask-outline.svg";

function Progress() {
  return (
    <div className="mission-bottom-container">
      <div className='progress-title-container'><h1>Neden Pelin Kozmetik</h1></div>
        <div  className='progress-sub-title-container'><h2>İşletmenizin Dostu</h2></div>
        <div className="mission-sub-container">
        <div className="detail-container" id="detail1">
        <div className="detail-icon-text-container">
          <div className="detail-icon-container">
            <img src={LogisticIcon} alt="Lojistik"></img>
          </div>
          <div className="detail-title-container">
            <h1>Fason Dolum</h1>
          </div>
        </div>

        <div className="detail-text-container">
          <p>
            Tesislerimizdeki yüksek dolum kapasitesi ile istenilen adetlerde
            şampuan, krem, losyon, parfüm, kolonya, güneş yağları ve güneş
            kremleri için fason dolum işlemleri markalı ve markasız olarak
            yapılmaktadır.
          </p>
        </div>
      </div>

      <div className="detail-container" id="detail2">
        <div className="detail-icon-text-container">
          <div className="detail-icon-container">
            <img src={PackageIcon} alt="ambalajlama"></img>
          </div>
          <div className="detail-title-container">
            <h1>Fason Ambalajlama</h1>
          </div>
        </div>

        <div className="detail-text-container">
          <p>
            Ürünlerin kutulanması, kozmetik dolum tesisi içerisinde yer alan
            paketleme makineleri ile otomatik olarak yapılmaktadır. Ürünleriniz
            itinalı bir şekilde kutulanır ve paketleme işlemleri tamamlanır.
          </p>
        </div>
      </div>

      <div className="detail-container" id="detail3">
        <div className="detail-icon-text-container">
          <div className="detail-icon-container">
            <img src={ProductIcon} alt="dolum"></img>
          </div>
          <div className="detail-title-container">
            <h1>Fason Lojistik</h1>
          </div>
        </div>

        <div className="detail-text-container">
          <p>
            Fabrikamız İstanbul, Pendik/Kurtköy’de olup, bulunduğumuz konum
            itibarıyla havaalanına ve TEM otoyoluna yakın mesafededir. Böylece,
            imalatı tamamlanan ürünlerin sevkiyatı; hızlı ve güvenli bir şekilde
            sağlanır.
          </p>
        </div>
      </div>
        </div>
      
    </div>
  );
}

export default Progress;
