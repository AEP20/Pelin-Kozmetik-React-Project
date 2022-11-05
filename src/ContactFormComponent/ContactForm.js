import "./ContactForm.css";
import "./ContactFormRight.css";
import "./ContactFormLeft.css";
import icon1 from "./mail.svg";
import icon2 from "./phone.svg";
import icon3 from "./location.svg";



function ContactForm() {
    
    
  return (
    <div className='contact-form-dom-container' id="iletisim"> 
    <div className='contact-form-container'>
        <div className='contact-form-title-container'><h1>Bizimle İletişime Geçin</h1></div>
        <div className='contact-form-sub-title-container'><h1>Bize sorucağınız sorular ve sizden gelen geri dönüşler bizim için çok değerli</h1></div>
        <div className='contact-form-sub-container'>
            <div className='contact-form-left-container'>
                <div className='contact-form-sub-left-container'>
                    <div className='contact-form-sub-left-title-container'><h1>İletişim Bilgileri</h1></div>
                    <div className='contact-form-sub-left-main-container'>
                        <div className='contact-form-text-logo-container'>
                            <div className='contact-form-logo-container'><img src={icon1} alt="mail"></img></div>
                            <div className='contact-form-text-container'><p>info@pelinkozmetik.com.tr</p></div>
                        </div>

                        <div className='contact-form-text-logo-container'>
                            <div className='contact-form-logo-container'><img src={icon2} alt="phone"></img></div>
                            <div className='contact-form-text-container'><p>+90 216 378 60 22 - 23</p></div>
                        </div>

                        <div className='contact-form-text-logo-container'>
                            <div className='contact-form-logo-container'><img src={icon3} alt="location"></img></div>
                            <div className='contact-form-text-container'><p>Sanayi Mah. Akçiçek Sok. No: 4/2 Kurtköy / Pendik - İSTANBUL</p></div>
                        </div>
                    </div>
                </div>
            </div>
        
            <form className='contact-form-right-container' action="https://submit-form.com/CoY5Nosd">
                <div className='contact-form-right-sub-container1'>
                    <div className='contact-form-sub1-part1'>
                        <div className='sub1-name-container'><label>İsminiz</label></div>
                        <div className='sub1-name-answer-container'> <input type="text" id="name" name="name" placeholder="İsminiz" required maxLength="100"/></div>
                    </div>
                    <div className='contact-form-sub1-part2'>
                        <div className='sub1-mail-container'><label>Mailiniz</label></div>
                        <div className='sub1-mail-answer-container'><input type="email" id="email" name="email" placeholder="Mailiniz" required maxLength="100"/></div>
                    </div>
                </div>


                <div className='contact-form-right-sub-container2'>
                        <div className='sub2-thema-container'><label>Konu</label></div>
                        <div className='sub2-thema-answer-container'><input type="text" id="konu" name="konu" placeholder="Konu" required maxLength="200"/></div>
                </div>
                <div className='contact-form-right-sub-container3'>
                        <div className='sub3-feedback-container'><p>Mesajınız</p></div>
                        <div className='sub3-feedback-answer-container'><textarea id="message" name="message" placeholder="Mesajınız" required maxLength="1500"></textarea></div>
                </div>
                <div className='contact-form-right-sub-container4'>
                    <button className='send-button-container' type="submit"><p>Gönder</p></button>
                </div>
            </form>
        
        </div>
    </div>
    </div>
    
  )
}

export default ContactForm