import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    return (
        <div  id="home" className="hero">
            <img src={profile_img} alt="" />
            <h1> <span>Meu nome é Gersey Machava</span>, e sou um desenvolvedor Web</h1>
            <p>Eu sou um desenvolvedor Web com experiência em React, Node.js e MongoDB. Estou sempre aprendendo novas tecnologias e buscando melhorar minhas habilidades.</p>
            <div className="hero-actions">
                 <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
                <div className="hero-resume">Baixar CV</div>

            </div>
        </div>
    );
}


export default Hero;