import React from "react";

import './footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ullam, sit exercitationem, ad quibusdam asperiores tempore cumque doloremque fuga nisi voluptas tempora, natus accusantium? Laudantium voluptatibus distinctio ad dolore doloribus.m</p>

                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@2025 Gersey Machava</p>
                <div className="footer-bottom-right">
                    <p>Termos de Serviço</p>
                    <p>Politicas de Privacidade</p>
                    <p>Entre em contacto</p>
                </div>
            </div>



        </div>


    )



}

export default Footer;