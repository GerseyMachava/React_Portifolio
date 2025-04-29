import React from 'react';
import "./Contact.css"
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = ()=>{
    return (
        <div id="contact" className="contact">
            <div className="contact-title">
            <h1>Entrar em Contacto</h1>
            <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id consectetur recusandae hic numquam omnis blanditiis dolore aperiam aliquam, odio modi maiores sapiente porro nostrum eum dignissimos, libero perspiciatis mollitia.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                <img src={mail_icon} alt="" /> <p>gerseymachava@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                <img src={call_icon} alt="" /> <p>gerseymachava@gmail.com</p> 
                    </div>
                    <div className="contact-detail">
                <img src={location_icon} alt="" /> <p>gerseymachava@gmail.com</p>  
                    </div>
                </div>
                
                </div>
                <form  className="contact-right">
                <label htmlFor="">Seu Nome</label>
                <input type="text" placeholder='Insira seu nome' name="name" />
                <label htmlFor="">Seu E-mail</label>
                <input type="text" placeholder='Insira seu E-mail' name="email" />
                <label htmlFor="">Escreva sua Mensagem</label>
               <textarea name="message"  rows="8" placeholder="Sua mensagem..."></textarea>
               <button type='submit' className="contact-submit"> Enviar Mensagem</button>



                </form>

            </div>


        </div>
    )
}


export default Contact;
